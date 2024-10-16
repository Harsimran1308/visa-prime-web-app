import React from "react";

const HireWorker = () => {
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
                    src="/img/temporary-foriegn-worker.jpg"
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
                  Hire Foreign workers with help of our Immigration services
                  </strong>
                </h1>
                <p>
                Known for our transparency and customer service, we help you employ foreign workers, making sure your business is always fully staffed.
                </p>
                <p className="mb-4">
                Our Alberta-based immigration consultants will guide you through every step of the immigration process. They’ll honestly assess if you meet all requirements to hire a foreign worker, or if skill enhancement is needed for future attempts.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="/temporary-foriegn-worker"
                  style={{ marginTop: "20px" }}
                >
                  Explore Staffing Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HireWorker;