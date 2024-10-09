import React from "react";

const WorkforceSolution = () => {
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
                  Workforce Solutions Tailored for Canadian Employers
                  </strong>
                </h1>
                <p>
                Request Permanent workers in Canada with our very best Staffing & Recruitment solutions for you. We guide you with Immigration rules & guidelines with all the programs that are made for Canadian Employers to hire workforce. Programs like LMIA, Rural Renewal Stream, Rural North Immigration Program are designed for employers who face challenges in hiring permanent workforce. We offer no obligation services to employers when they try our services for the first time.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="/lmia"
                  style={{ marginTop: "20px" }}
                >
                  Explore LMIA
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
                    src="/img/admin-office-clerk.jpg"
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

export default WorkforceSolution;