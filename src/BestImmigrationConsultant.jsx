import React from "react";

const BestImmigrationConsultant = () => {
  return (
    <div>
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div
            class="col-xl-5 wow fadeInLeft"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInLeft",
            }}
          >
            <div class="border rounded">
              <iframe
                className="rounded w-100"
                style={{ height: "500px" }}
                src="https://storage.googleapis.com/maps-solutions-e88mio2kan/locator-plus/t89m/locator-plus.html"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div
            class="col-xl-7 wow fadeInRight"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInRight",
            }}
          >
            <h1>
              <strong class="text-primary">
                Immigration Consultant Near Me
              </strong>
            </h1>
            <p>
              We offer superior guidance to prospective applicants, ensuring
              that our information is both precise and reliable. VisaPrime’s
              strategically placed office locations help us serve Rural areas of
              Alberta as well.
            </p>
            <p class="mb-4">
              Entrust us with your Immigration application needs. Our offices in Edmonton and Fort McMurray helps us serve Alberta’s rural communities by giving them a personalized Immigration service making us a very best Immigration service in Alberta.
            </p>
            <p>
            VisaPrime Consultancy, nestled in Edmonton & Fort McMurray is your go-to place for sincere immigration advice. Our consultant's expertise paves the path for your successful immigration journey.
            </p>
            <p>At VisaPrime Consultancy, we take pride in providing tailored immigration solutions that cater to the unique needs of each client. With VisaPrime by your side, you can rest assured that your immigration process is in trusted hands, delivering results with efficiency and integrity.</p>
            <a
              class="btn btn-primary rounded-pill text-white py-3 px-5"
              href="/about"
              style={{marginTop:"20px"}}
            >
              Know Us More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestImmigrationConsultant;
