import React from "react";

const USVisa = () => {
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
                    src="/img/united-states-visa.jpg"
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
                  Apply for US Visa with the best Immigration consultants in Edmonton
                  </strong>
                </h1>
                <p>
                Consider relocating to the United States for enhanced career prospects or for exploration purposes. Our professional consultants are equipped to guide you through all the programs that the United States permits, ensuring a smooth and transparent transition. Be well-versed with the rules and regulations of various states to facilitate a hassle-free immigration process.
                </p>
                <a
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                  href="/us-visa-oci"
                  style={{ marginTop: "20px" }}
                >
                  Learn About US Visa
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default USVisa;