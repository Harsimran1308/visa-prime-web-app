import React from "react";

const EmployerAssesmentForm = () => {
  return (
    <div
      class="container-fluid employee-assessment-banner py-5"
      style={{ visibility: "visible" }}
    >
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="">
              <h1 class="text-white">
                The best immigration consultant in Edmonton, Alberta for
                providing guidance on employement needs
              </h1>
              <h5 style={{ color: "#FFFFFF", marginTop: "20px" }}>
                At VisaPrime, we specialize in helping employers and job seekers
                navigate the complex immigration process for employment-based
                visas. Whether you need assistance with work permits, employer
                compliance, or Labour Market Impact Assessments (LMIA), we
                provide expert guidance to ensure your applications are accurate
                and timely, helping you achieve your Canadian employment goals.
              </h5>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex align-items-center justify-content-lg-end h-100">
              <a
                class="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=skEt-A8v_0WQhyna8769N11PUCS96j5EgaiDkGpo4dZUN0Q3NklEMllSNEtVWUQxVEFaT00wOVo2WS4u&embed=true"
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

export default EmployerAssesmentForm;
