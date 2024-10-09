import React from "react";

const TopInfo = () => {
    return (
        <div className="container-fluid py-2 px-0 d-none d-lg-block">
            <div className="row gx-0 align-items-center">
                <div className="col-lg-7 px-5 text-start">
                    <div className="d-flex">
                        <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+1 (780) 750-5551</a>
                        <a className="text-muted me-4"><i className="fas fa-envelope text-primary me-2"></i>info@visaprime.ca</a>
                        <a className="text-muted me-0"><i className="fas fa-clock text-primary me-2"></i>Mon - Fri : 10:00 AM - 05:30 PM</a>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="d-inline-flex align-items-center" style={{height:"45px"}}>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="https://www.facebook.com/visaprime.consultancy/" target="_blank"><i className="fab fa-facebook-f fw-normal text-primary"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="https://www.linkedin.com/in/puneetothi/" target="_blank"><i className="fab fa-linkedin-in fw-normal text-primary"></i></a>
                        <a className="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="https://www.instagram.com/visaprime.consultancy/" target="_blank"><i className="fab fa-instagram fw-normal text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfo;