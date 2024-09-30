import React from "react";

const UnderDevelopment = () => {
  return (
    <div>
      <div
        class="container-xxl py-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}
      >
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 class="mb-4">Under Development</h1>
              <p class="mb-4">
                We apologize, but the page you're looking for is currently under development. We're in the process of adding more information. Please check back later or feel free to visit our homepage in the meantime. Thank you for your patience!
              </p>
              <a class="btn btn-primary rounded-pill py-3 px-5" href="/">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
