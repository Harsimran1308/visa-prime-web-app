import React from "react";

const AlbertaPNP = () => {
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
                The best Immigration Consultant in Alberta for Rural Renewal
                Stream & Alberta’s Nominee Program – AAIP
              </strong>
            </h1>
            <p>
              The Alberta Advantage Immigration Program (AAIP) helps people from
              all over the world make Alberta their new home in Canada. It
              supports a wide range of professions, from farming to tech, and
              everything in between. Your eligibility is based on factors like
              work experience, education, and even your employment in rural
              Alberta communities. Your pathway to Canadian permanent residency
              could be just a nomination away.
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/pnp"
              style={{ marginTop: "20px" }}
            >
              Check More About Alberta PNP
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
                src="/img/pnp-immigration.jpg"
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
};

export default AlbertaPNP;
