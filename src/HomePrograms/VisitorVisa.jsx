import React from "react";

const VisitorVisa = () => {
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
                    src="/img/visitor-visa.jpg"
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
                  Visit Canada with our Visitor or Super Visa
                  </strong>
                </h1>
                <p>
                Super visa is for parents & grandparents who can visit their loved ones in Canada and stay for longer durations of time. Super Visa helps family stay together for up to 5 years at one stretch without the hassle of leaving Canada. The Canadian Immigration has become easier for parents and grand parents with Super visa
                </p>
                <p className="mb-4">
                  A visitor visa is generally for those who want to visit Canada for shorter duration, preferably less than 6 months. If you want to visit your family or friends or just want to admire the Canadian Rockies or its beautiful lakes. Visitor visa is a right pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default VisitorVisa;