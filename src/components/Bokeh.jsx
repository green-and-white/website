import React from 'react'

export default function Bokeh() {
    const doodleRules = `
        :doodle {
          @grid: 8 / 100vmax;
          background: transparent;
        }
        @random {
          border-radius: 50%;
          background: @pick(
            var(--color-marketing),
            var(--color-customer-care),
            var(--color-literary),
            var(--color-office),
            var(--color-layout),
            var(--color-web),
            var(--color-photo)
          );
          opacity: @rand(0.3, 0.8);
           --circle-size: @rand(100px, 200px);
          width: var(--circle-size);
          height: var(--circle-size);
          filter: blur(@rand(4px, 10px));
          transform: translate(
            @pick(-45%, 45%), /* x: left or right corners */
            @pick(-45%, 45%)  /* y: top or bottom corners */
          ) scale(@rand(0.6, 1.4));
          animation: float @rand(6s, 12s) ease-in-out infinite alternate;
        }

        @keyframes float {
          from { transform: translate(@pick(-45%, 45%), @pick(-45%, 45%)) scale(1); }
          to { transform: translate(@pick(-40%, 40%), @pick(-40%, 40%)) scale(1.2); }
        }
      `;

    return (
        <css-doodle className>{doodleRules}</css-doodle>
    );
}
