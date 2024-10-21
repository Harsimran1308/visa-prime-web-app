import React from "react";

const WorkVisa = () => {
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
                src="/img/work-permit.jpg"
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
                Apply for Work Permit & start working in Canada
              </strong>
            </h1>
            <p>
              An authentic Canadian work permit is your key to working in
              Canada. It’s an official document, granted to foreign nationals
              for a set period. To get this, you need a valid job offer from a
              Canadian employer. They might need a Labour Market Impact
              Assessment (LMIA) as well, a crucial document assessing the effect
              of hiring a foreign worker on the Canadian job market. Get in
              touch with us today and get started on your Immigration journey to
              Canada.
            </p>
            <p>
              In addition there are other pathways to obtaining a work permit,
              such as the International Experience Canada (IEC) Program, Spousal
              Open Work Permit, and more.
            </p>
            <p>
              Contact us today to begin your immigration journey and secure your
              work permit in Canada!
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/work-permit"
              style={{ marginTop: "20px" }}
            >
              Explore Work Permit Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkVisa;
