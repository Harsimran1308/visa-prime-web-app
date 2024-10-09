import React from "react";

const FamilySponsorship = () => {
    return (
        <div>
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div
                className="col-xl-7 wow fadeInLeft"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInLeft",
                }}
              >
                <h1>
                  <strong className="text-primary">
                  Sponsor your Family with VisaPrime
                  </strong>
                </h1>
                <p>
                Our immigration consultants are ready to simplify the complex sponsorship process for family immigration to Canada. We’ll help you grasp the financial commitments you’ll undertake when sponsoring a family member.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="/family-sponsorship"
                  style={{ marginTop: "20px" }}
                >
                  How to Sponsor Familiy ?
                </a>
              </div>
              <div
                className="col-xl-5 wow fadeInRight"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInRight",
                }}
              >
                <div className="border rounded" style={{ maxWidth: "100%" }}>
                  <img
                    src="/img/family-sponsorship.jpg"
                    className="rounded"
                    style={{ width: "100%", height: "auto" }}
                    alt="Citizenship"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default FamilySponsorship;