import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RealisticWater = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Reduce resolution for better performance (scale down by 0.75)
    const renderWidth = Math.floor(width * 0.75);
    const renderHeight = Math.floor(height * 0.75);

    // 1. Scene & Renderer Setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable antialiasing for better performance
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 2. Ping-Pong Buffers for Physics (Buffer A)
    // We need two targets so we can read from one and write to the other
    let renderTargetA = new THREE.WebGLRenderTarget(renderWidth, renderHeight, {
      type: THREE.FloatType,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
    });
    let renderTargetB = renderTargetA.clone();

    // 3. Physics Shader (Buffer A logic)
    const physicsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iChannel0: { value: null },
        iResolution: { value: new THREE.Vector3(renderWidth, renderHeight, 1) },
        iTime: { value: 0 },
        iFrame: { value: 0 },
        iMouse: { value: new THREE.Vector4() },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: `
        uniform sampler2D iChannel0;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform int iFrame;
        uniform vec4 iMouse;
        varying vec2 vUv;

        const float delta = 1.0;

        void main() {
          vec2 fragCoord = vUv * iResolution.xy;
          if (iFrame == 0) { gl_FragColor = vec4(0); return; }

          // Accessing neighbor pixels for wave simulation
          vec2 uv = vUv;
          vec2 step = 1.0 / iResolution.xy;

          float pressure = texture2D(iChannel0, uv).x;
          float pVel = texture2D(iChannel0, uv).y;

          float p_right = texture2D(iChannel0, uv + vec2(step.x, 0.0)).x;
          float p_left  = texture2D(iChannel0, uv + vec2(-step.x, 0.0)).x;
          float p_up    = texture2D(iChannel0, uv + vec2(0.0, step.y)).x;
          float p_down  = texture2D(iChannel0, uv + vec2(0.0, -step.y)).x;

          // Physics Logic
          pVel += delta * (-2.0 * pressure + p_right + p_left) / 4.0;
          pVel += delta * (-2.0 * pressure + p_up + p_down) / 4.0;
          pressure += delta * pVel;
          pVel -= 0.005 * delta * pressure;
          pVel *= 0.998; // Damping
          pressure *= 0.999;

          vec4 finalData = vec4(pressure, pVel, (p_right - p_left) / 2.0, (p_up - p_down) / 2.0);

          // Interaction
          if (iMouse.z > 0.5) {
            float dist = distance(fragCoord, iMouse.xy);
            if (dist <= 20.0) {
              finalData.x += 1.0 - dist / 20.0;
            }
          }
          gl_FragColor = finalData;
        }
      `
    });

    // 4. Visual Shader (Final Image logic)
    const visualMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iChannel0: { value: null }, // Physics Data
        iChannel1: { value: new THREE.TextureLoader().load('/water.jpg') }, // Pond Image
        iResolution: { value: new THREE.Vector3(renderWidth, renderHeight, 1) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: `
        uniform sampler2D iChannel0;
        uniform sampler2D iChannel1;
        uniform vec3 iResolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec4 data = texture2D(iChannel0, uv);
          
          // Use Z and W gradients from Buffer A to distort the pond texture
          gl_FragColor = texture2D(iChannel1, uv + 0.2 * data.zw);
          
          // Sunlight glint / highlights
          vec3 normal = normalize(vec3(-data.z, 0.2, -data.w));
          gl_FragColor += vec4(1.0) * pow(max(0.0, dot(normal, normalize(vec3(-3, 10, 3)))), 60.0);
        }
      `
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), physicsMaterial);
    scene.add(mesh);

    // 5. Interaction - Use window events to capture mouse even when over other elements
    const mouse = new THREE.Vector4();
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Always update mouse position if within bounds (removed the conditional)
      if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
        mouse.x = mouseX * 0.75; // Scale mouse coords to render resolution
        mouse.y = (rect.height - mouseY) * 0.75;
        mouse.z = 1.0; // Mouse interaction active
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mousedown', () => mouse.z = 1.0);
    container.addEventListener('mouseup', () => mouse.z = 0.0);

    // 6. Loop
    let iFrame = 0;
    const animate = (time) => {
      // Step 1: Update Physics in Buffer A
      mesh.material = physicsMaterial;
      physicsMaterial.uniforms.iChannel0.value = renderTargetA.texture;
      physicsMaterial.uniforms.iFrame.value = iFrame;
      physicsMaterial.uniforms.iTime.value = time * 0.001;
      physicsMaterial.uniforms.iMouse.value.copy(mouse);
      
      renderer.setRenderTarget(renderTargetB);
      renderer.render(scene, camera);

      // Step 2: Render Final Image to Screen
      mesh.material = visualMaterial;
      visualMaterial.uniforms.iChannel0.value = renderTargetB.texture;
      
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      // Step 3: Swap Buffers (Ping-Pong)
      let temp = renderTargetA;
      renderTargetA = renderTargetB;
      renderTargetB = temp;

      iFrame++;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full absolute inset-0 bg-blue-900" 
              style={{ willChange: 'transform', 
                        backgroundImage: 'linear-gradient(to bottom, #051937, #072140, #0a2a49, #0d3352, #113c5b)'
              }} />;
};

export default RealisticWater;