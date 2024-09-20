import React from 'react';

const ShortIntro = () => {
  return (
    <div>
       <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="bg-light rounded">
                            <img src="img/about-2.png" className="img-fluid w-100" style={{marginBottom: "75px"}} alt="Image"/>
                            <img src="img/about-3.jpg" className="img-fluid w-100 border-bottom border-5 border-primary" style={{borderTopRightRadius:"300px", borderTopLeftRadius:"300px"}} alt="Image"/>
                        </div>
                    </div>
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
                        <h5 className="sub-title pe-3">About the company</h5>
                        <h1 className="display-5 mb-4">We’re Regulated RCIC Immigration Consultanty</h1>
                        <p className="mb-4"> With expertise in Canada’s immigration system, we offer tailored services such as Permanent Residency (PR), Work Permits, Canadian Citizenship, Labour Market Impact Assessments (LMIA), and Provincial Nominee Programs (PNP). Our staffing solutions cater to diverse industries, providing temporary and permanent recruitment services to meet your workforce needs. Whether you’re seeking skilled professionals to grow your business or navigating the immigration process, we are here to ensure success every step of the way, connecting talent with opportunity and making Canada immigration seamless.</p>
                        <div className="row gy-4 align-items-center">
                            <div className="col-12 col-sm-6 d-flex align-items-center">
                                <i className="fas fa-map-marked-alt fa-3x text-secondary"></i>
                                <h5 className="ms-4">Best Immigration Resources</h5>
                            </div>
                            <div className="col-12 col-sm-6 d-flex align-items-center">
                                <i className="fas fa-user fa-3x text-secondary"></i>
                                <h5 className="ms-4">Expert Staffing Support</h5>
                            </div>
                            <div className="col-4 col-md-3">
                                <div className="bg-light text-center rounded p-3">
                                    <div className="mb-2">
                                        <i className="fas fa-ticket-alt fa-4x text-primary"></i>
                                    </div>
                                    <h1 className="display-5 fw-bold mb-2">10</h1>
                                    <p className="text-muted mb-0">Years of Experience</p>
                                </div>
                            </div>
                            <div className="col-8 col-md-9">
                                <div className="mb-5">
                                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Offer 100 % Genuine Assistance</p>
                                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> It’s Faster & Reliable Execution</p>
                                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Accurate & Expert Advice</p>
                                </div>
                                <div className="d-flex flex-wrap">
                                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                        <a href="" className="position-relative wow tada" data-wow-delay=".9s">
                                            <i className="fa fa-phone-alt text-primary fa-3x"></i>
                                            <div className="position-absolute" style={{top: "0", left: "25px"}} >
                                                <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <span className="text-primary">Have any questions?</span>
                                        <span className="text-secondary fw-bold fs-5" style={{letterSpacing: "2px"}}>Free: +1 (780) 750-5551</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ShortIntro;