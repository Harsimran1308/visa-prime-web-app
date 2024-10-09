import React from "react";

const StudyVisa = () => {
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
            Study in Canada with help of Immigration Consultant in Alberta
            </strong>
          </h1>
          <p>
          Choosing Canada for your Graduation or Post Graduation Degree or Diploma has its benefits. Every year more than 100K students arrive in Canada for higher studies. The Immigration process have become easier for International Students. 
          </p>
          <p>
          Known worldwide, Canada is a prime locale for higher studies. A study permit here opens a wealth of immigration options. Plus, a work permit after your studies propels you towards permanent residency faster.
          </p>
          <a
            className="btn btn-primary rounded-pill text-white py-3 px-5"
            href="/study-permit"
            style={{ marginTop: "20px" }}
          >
            Read More About Study Visa
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
              src="/img/study-permit.jpg"
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

export default StudyVisa;
