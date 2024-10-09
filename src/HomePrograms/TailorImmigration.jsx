import React from "react";

const TailorImmigration = () => {
    return (
        <div>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="border rounded" style={{ maxWidth: "100%" }}>
                <img
                  src="/img/canada-immigration.jpg"
                  className="rounded"
                  style={{ width: "100%", height: "auto" }}
                  alt="Citizenship"
                />
              </div>
            </div>
            <div
              className="col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInRight",
              }}
            >
              <h1>
                <strong className="text-primary">
                VisaPrime Consultancy's tailored Immigration Solutions for you to reach your goals
                </strong>
              </h1>
              <p>Are you looking for an immigration consultant in Edmonton?</p>
              <p>
              VisaPrime Consultancy in Edmonton stands true to its promise, with leading consultants on board to help you achieve your Immigration goals. As an Immigration consultant company, our process is easy and transparent, and our clients are informed about every step of the way by our dedicated professionals committed to taking care of your immigration needs.
              </p>
              <p className="mb-4">
              We understand just how important your journey is. Whether it’s an Express entry, a Temporary foreign worker spot, a Study visa, a Temporary resident visa, or a Citizenship application, our dedicated team of top Immigration consultants in Edmonton is here to make the process easier for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      );
}

export default TailorImmigration;