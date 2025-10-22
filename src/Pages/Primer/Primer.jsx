import React from "react";
import "./Primer.css";
import texture from "../../assets/textures/texture.png";

export default function Primer() {
  return (
    <main>
      {/* Registration */}
      <section className="primer-hero flex flex-col pt-8">
        <div className="hero-inner flex justify-between h-[90vh]">
          <h2 data-text="Registration">Registration</h2>
          <h3 data-text="Guidelines">Guidelines</h3>
        </div>

        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="primer-texture"
        />

        <div className="flex flex-col lg:flex-row">
          <div className="grid-cols-5">
            <span className="row-span-1">yes</span>
            <span className="row-span-1">sdsadfaf</span>
          </div>
          <div>

          </div>
        </div>
      </section>

      {/* Packages and Payments */}
      <section>
        <div>
          <h2 data-text="Yearbook">Yearbook</h2>
          <h3 data-text="Packages & Payment">Packages & Payment</h3>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div>
          <h3 data-text="Timeline">Timeline</h3>
        </div>
      </section>

      {/* Payment Deadlines */}
      <section>
        <div>
          <h3 data-text="Payment Deadlines">Payment Deadlines</h3>
        </div>
      </section>

      {/* Registration */}
      <section>
        <div>
          <h2 data-text="Registration">Registration</h2>
          <h3 data-text="Steps">Steps</h3>
        </div>
      </section>
    </main>
  );
}
