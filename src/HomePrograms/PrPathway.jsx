import React from "react";

const PrPathway = () => {
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
                    src="/img/citizenship.jpg"
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
                    Immigrate to Canada with the Right Pathway.
                  </strong>
                </h1>
                <p>
                  Let us handle your dream to Canadian residency the right way. We’ve
                  got your back in the challenging journey of immigration. Our
                  promise? An excellent opportunity and an exceptional customer
                  experience.
                </p>
                <p className="mb-4">
                  With more than a decade of experience in Canadian Immigration and
                  Recruitment services, we help you solve complex Canadian
                  Immigration system guiding you with personalized customer service.
                  Checkout our staff members & their achievements at VisaPrime
                  Consultancy.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="/permanent-residence"
                  style={{ marginTop: "20px" }}
                >
                  Check More About Permanent Residency
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default PrPathway;