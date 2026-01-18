import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const WaterPlane = ({ texturePath }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, texturePath);
  
  // Shader logic for the ripple effect
  const shaderData = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTexture: { value: texture },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform sampler2D uTexture;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        
        // Calculate distance from mouse to create ripples
        float dist = distance(uv, uMouse);
        float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.015;
        
        // Only apply ripple within a certain radius for "interaction"
        float mask = smoothstep(0.4, 0.0, dist);
        uv += ripple * mask;

        vec4 color = texture2D(uTexture, uv);

        gl_FragColor = color;
      }
    `
  }), [texture]);

  useFrame((state) => {
    const { x, y } = state.mouse;
    // Map R3F mouse coordinates (-1 to 1) to UV coordinates (0 to 1)
    meshRef.current.material.uniforms.uMouse.value.set((x + 1) / 2, (y + 1) / 2);
    meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial 
        fragmentShader={shaderData.fragmentShader}
        vertexShader={shaderData.vertexShader}
        uniforms={shaderData.uniforms}
      />
    </mesh>
  );
};

export default function WaterBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <WaterPlane texturePath="/water2.jpg" />
      </Canvas>
    </div>
  );
}