import React from "react";

const Contact = () => {
    return (
        <div>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h3>
                </div>
            </div>
            <div className="container-fluid contact overflow-hidden py-5">
                <div className="container py-5">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary pe-3">Quick Contact</h5>
                            </div>
                            <h1 className="display-5 mb-4">Have Questions? Don't Hesitate to Contact Us</h1>
                            <p className="mb-5">Got questions about immigration? We're here to help! Reach out to us anytime, and our expert team will provide the answers and guidance you need.</p>
                            <div className="d-flex border-bottom mb-4 pb-4">
                                <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded"></i>
                                <div className="ps-3">
                                    <h5>Location</h5>
                                    <p>9707 Franklin Avenue #207, Fort McMurray, AB T9H 2K1</p>
                                    <p>4245 97 St NW #101, Edmonton, AB T6E 5Y7</p>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-xl-6">
                                    <div className="d-flex">
                                        <i className="fas fa-tty fa-3x text-primary"></i>
                                        <div className="ps-3">
                                            <h5 className="mb-3">Quick Contact</h5>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Phone:</h6>
                                                <a href="#" className="fs-5 text-primary">+1 (780) 750-5551</a>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Email:</h6>
                                                <a href="#" className="fs-5 text-primary">info@primevisa.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="d-flex">
                                        <i className="fas fa-clone fa-3x text-primary"></i>
                                        <div className="ps-3">
                                            <h5 className="mb-3">Opening Hrs</h5>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Mon - Friday:</h6>
                                                <a href="#" className="fs-5 text-primary">10.00 am to 05.00 pm</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <div className="me-4">
                                    <div className="bg-light d-flex align-items-center justify-content-center" style={{width: "90px", height: "90px", borderRadius: "10px"}}><i className="fas fa-share fa-3x text-primary"></i></div>
                                </div>
                                <div className="d-flex">
                                    <a className="btn btn-secondary border-secondary me-2 p-0" href="">facebook <i className="fas fa-chevron-circle-right"></i></a>
                                    <a className="btn btn-secondary border-secondary mx-2 p-0" href="">twitter <i className="fas fa-chevron-circle-right"></i></a>
                                    <a className="btn btn-secondary border-secondary mx-2 p-0" href="">instagram <i className="fas fa-chevron-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary pe-3">Let’s Connect</h5>
                            </div>
                            <h1 className="display-5 mb-4">Send Your Message</h1>
                            <p className="mb-3">Send us a message, and our experienced consultants will guide you through every step of your immigration process, including work permits, PR, and citizenship applications.</p>
                            <form>
                                <div className="row g-4">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="first_name" placeholder="First Name" required/>
                                            <label for="first_name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="last_name" placeholder="Last Name" required/>
                                            <label for="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="phone" className="form-control" id="phone" placeholder="Phone" required/>
                                            <label for="phone">Your Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Email" required/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "160px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="office pt-5">
                        <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="sub-style">
                                <h5 className="sub-title text-primary px-3">Our Offices</h5>
                            </div>
                            <h1 className="display-5 mb-4">Explore Our Office in Canada</h1>
                            <p className="mb-0">Visit our office in Canada for personalized immigration services. Our team is ready to assist you with all your immigration needs, from consultations to application support. Stop by and explore how we can help make your immigration journey smoother.</p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-8 col-lg-8 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="office-item p-4">
                                    <div className="office-img mb-4">
                                        <img src="img/office-3.jpg" className="img-fluid w-100 rounded" alt="" />
                                    </div>
                                    <div className="office-content d-flex flex-column">
                                        <h4 className="mb-2">Fort MC Murray</h4>
                                        <a href="#" className="text-secondary fs-5 mb-2">+1 (780) 750-5551</a>
                                        <a href="#" className="text-muted fs-5 mb-2">info@primevisa.ca</a>
                                        <p className="mb-0">9707 Franklin Avenue #207, Fort McMurray, AB, Canada T9H 2K1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-8 col-xl-4 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="office-item p-4">
                                    <div className="office-img mb-4">
                                        <img src="img/office-4.jpg" className="img-fluid w-100 rounded" alt="" />
                                    </div>
                                    <div className="office-content d-flex flex-column">
                                        <h4 className="mb-2">Edmonton</h4>
                                        <a href="#" className="text-secondary fs-5 mb-2">+1 (825) 777-4222</a>
                                        <a href="#" className="text-muted fs-5 mb-2">info@primevisa.ca</a>
                                        <p className="mb-0">4245 97 St NW #101, Edmonton, AB, Canada T6E 5Y7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-5">
                                <div className="rounded h-100">
                                    <iframe className="rounded w-100"
                                    style={{height: "500px"}} src="https://storage.googleapis.com/maps-solutions-e88mio2kan/locator-plus/t89m/locator-plus.html" 
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Contact;