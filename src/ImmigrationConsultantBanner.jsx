import React from "react";

const ImmigrationConsultantBanner = () => {
  return (
    <div
      class="container-fluid banner py-5"
      style={{visibility: "visible"}}
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="">
              <h1 class="text-white">Best Immigration Consultant in Edmonton</h1>
              <h5 style={{color:"#FFFFFF", marginTop:"20px"}}>
               VisaPrime Consultancy led by Puneet Othi is one of the best immigration professionals in Edmonton. Checkout our reviews to know what our clients are saying. We pride ourselves on our meticulous attention to detail and service. Book a consultation with us and let our team chart out an Immigration strategy for you.
              </h5>
              <h5 style={{color:"#FFFFFF", marginTop:"20px"}}>
              Determine your Canadian Immigration eligibility with a Free 1st consultation.
              </h5>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex align-items-center justify-content-lg-end h-100">
              <a class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="https://book.squareup.com/appointments/khg9bqtfjxfazj/location/SK6MBAW63XB7V/services" target="_blank">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationConsultantBanner;
