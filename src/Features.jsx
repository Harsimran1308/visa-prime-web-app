import React from "react";

const Features = () => {
    return (
        <div>
            <div className="container-fluid features overflow-hidden py-5">
            <div className="container">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
                    </div>
                    <h1 className="display-5 mb-4">Offer Tailor Made Services That Our Client Requires</h1>
                    <p className="mb-0">Providing customized services that address the specific needs of both individuals and employers, ensuring a personalized approach for optimal results.</p>
                </div>
                <div className="row g-4 justify-content-center text-center">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-dollar-sign fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Cost-Effective</h5>
                                <p className="mb-3">Delivering high-quality services that maximize value while minimizing expenses</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fab fa-cc-visa fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Visa Assistance</h5>
                                <p className="mb-3">Providing expert guidance and support throughout the entire visa application process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-atlas fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Faster Processing</h5>
                                <p className="mb-3">Ensuring expedited processing to help clients achieve their immigration goals quickly</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item text-center p-4">
                            <div className="feature-icon p-3 mb-4">
                                <i className="fas fa-users fa-4x text-primary"></i>
                            </div>
                            <div className="feature-content d-flex flex-column">
                                <h5 className="mb-3">Expert Guidance</h5>
                                <p className="mb-3">Receive expert guidance tailored to your unique immigration needs, ensuring smooth journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Features;