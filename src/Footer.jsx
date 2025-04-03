import React, { useRef } from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Footer = () => {
    const emailRef = useRef(null);
    const signupForNewsLetter = async (e) => {
        e.preventDefault();
        
        const email = emailRef.current.value;
        const currentTimeEdmonton = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Edmonton",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
          }).format(new Date());
    
        try {
            // Make an Axios POST request with JSON data
            const response = await axios.post("https://88y718whni.execute-api.ca-central-1.amazonaws.com/prod/send-email", {
                name:"News Letter Signup",
                email:email,
                phone:"News Letter Signup",
                subject:`News Letter Subscription - ${currentTimeEdmonton}`,
                message:"New NewsLetter Subscription"
            }, {
              headers: {
                'Content-Type': 'application/json',  // Set content type to JSON
              }
            });
            NotificationManager.success('Success', 'Thank you for signing up for our newsletter!');
            // Clear the input field after success
            emailRef.current.value = "";
          } catch (error) {
            // Handle error
            NotificationManager.error('Error', 'Please try after some time.');
          }
      };
    return (
        <div className="footer">
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <div style={{display:"flex"}}>
                                    <i className="fas fa-building me-2" style={{display:"inline-flex", paddingTop:"5px", color:"#FFF"}}></i><h4 className="text-secondary mb-4" style={{display:"inline-flex"}}>FORT MCMURRAY</h4>
                                </div>
                                <a><i className="fa fa-map-marker-alt me-2"></i> 9707 Franklin Avenue #207, Fort McMurray, AB T9H 2K1</a>
                                <a><i className="fas fa-envelope me-2"></i> info@visaprime.ca</a>
                                <a><i className="fas fa-phone me-2"></i> +1-780-750-5551</a>
                                <a><i className="fas fa-clock me-2"></i> Mon - Fri : 10:00 AM - 5:30 PM</a>
                                <div className="d-flex align-items-center" style={{marginTop:"5px"}}>
                                    <i className="fas fa-share fa-2x text-secondary me-2"></i>
                                    <a className="btn mx-1" href="https://www.facebook.com/visaprime.consultancy/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn mx-1" href="https://www.instagram.com/visaprime.consultancy/" target="_blank"><i className="fab fa-instagram"></i></a>
                                    <a className="btn mx-1" href="https://www.linkedin.com/in/puneetothi/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <div style={{display:"flex"}}>
                                    <i className="fas fa-building me-2" style={{display:"inline-flex", paddingTop:"5px", color:"#FFF"}}></i><h4 className="text-secondary mb-4" style={{display:"inline-flex"}}>EDMONTON</h4>
                                </div>
                                <a><i className="fa fa-map-marker-alt me-2"></i> 4245 97 St NW #101, Edmonton, AB T6E 5Y7</a>
                                <a><i className="fas fa-envelope me-2"></i> edm@visaprime.ca</a>
                                <a><i className="fas fa-phone me-2"></i> +1-780-750-5551</a>
                                <a><i className="fas fa-clock me-2"></i> Mon - Fri : 10:00 AM - 5:30 PM</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-secondary mb-4">Our Services</h4>
                                <a href="/work-permit" className=""><i className="fas fa-angle-right me-2"></i> Work Permit</a>
                                <a href="/lmia" className=""><i className="fas fa-angle-right me-2"></i> LMIA</a>
                                <a href="/permanent-residence" className=""><i className="fas fa-angle-right me-2"></i> Permanent Residence</a>
                                <a href="/study-permit" className=""><i className="fas fa-angle-right me-2"></i> Study</a>
                                <a href="/staffing-solutions" className=""><i className="fas fa-angle-right me-2"></i> Staffing Solution</a>
                                <a href="/immigration-services" className=""><i className="fas fa-angle-right me-2"></i> Immigrate to Canada</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item">
                                <h4 className="text-secondary mb-4">Newsletter</h4>
                                <p className="text-white mb-3">Sign up to receive the latest immigration news, updates, and changes, including PR, Work Permits, and more.</p>
                                <div className="position-relative mx-auto rounded-pill">
                                    <form onSubmit={signupForNewsLetter}>
                                        <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="email" placeholder="Enter your email" required ref={emailRef}/>
                                        <button type="submit" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center" style={{width:"100%"}}>
                            <span className="text-white" style={{display:"inline-flex"}}><a className="text-white"><i className="fas fa-copyright text-light me-2"></i>VisaPrime Consultancy</a>, All rights reserved.</span>
                            <span className="text-white" style={{display:"inline-flex", marginLeft:"5px"}}>Developed By<a className="article-navigation-link" href="https://www.singhharsimran.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline",marginLeft:"5px"}}>Harsimran Singh</a></span>
                        </div>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center" style={{width:"100%"}}>
                            <span className="text-white" style={{display:"inline-flex"}}><a className="text-white"><a href="https://www.freepik.com/free-ai-image/canada-day-celebration-with-maple-leaf-symbol_186551720.htm#fromView=image_search_similar&page=1&position=30&uuid=9913abd9-5662-4b13-a723-15ab40303619&query=canada+"/>All displayed Images by freepik</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;