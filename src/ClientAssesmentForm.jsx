import React from "react";

const ClientAssesmentForm = () => {
  return (
    <div
      class="container-fluid assessment-banner py-5"
      style={{ visibility: "visible" }}
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="">
              <h1 class="text-white">
                The best immigration consultant in Edmonton, Alberta for
                all your immigration needs
              </h1>
              <h5 style={{ color: "#FFFFFF", marginTop: "20px" }}>
                At VisaPrime, we specialize in helping individuals
                navigate the complex immigration process. Whether you need assistance with work permits, study permit, or Permanent Residence, we
                provide expert guidance to ensure your applications are accurate
                and timely, helping you achieve your Canadian dream.
              </h5>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex align-items-center justify-content-lg-end h-100">
              <a
                class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=skEt-A8v_0WQhyna8769N1x09eyGZvREvzyLVhlgZZFUQ1Q5WEk2VlUyNldVT0tDNEE5MDk1RVVHNyQlQCN0PWcu"
                target="_blank"
              >
                Take Intial Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAssesmentForm;
