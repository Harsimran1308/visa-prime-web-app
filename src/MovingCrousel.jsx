import React from 'react';

const MovingCrousel = () => {
  return (
    <div>
        <div className="carousel-header">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="img/home-screen-2.jpg" className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="text-center p-4" style={{maxWidth:"900px"}}>
                                <h4 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Get Expert Solutions for All Your Immigration Queries</h4>
                                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Immigration Process Starts Here!</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">We provide expert guidance and answers to all your immigration queries, whether it's about Permanent Residency (PR), Work Permits, Study Visas, or Canadian Citizenship. 
                                </p>
                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="/immigration-services">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/home-screen-1.jpg" className="img-fluid" alt="Image"/>
                        <div className="carousel-caption">
                            <div className="text-center p-4" style={{maxWidth:"900px"}}>
                                <h5 className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Staffing Solutions to Meet All Your Workforce Needs</h5>
                                <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">Best Staffing Solution Services</h1>
                                <p className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">We provide comprehensive staffing solutions tailored to your business needs, helping you find the right talent quickly and efficiently.
                                </p>
                                <a className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp" data-wow-delay="0.7s" href="/staffing-solutions">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-secondary wow fadeInLeft" data-wow-delay="0.2s" aria-hidden="false"></span>
                    <span className="visually-hidden-focusable">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-secondary wow fadeInRight" data-wow-delay="0.2s" aria-hidden="false"></span>
                    <span className="visually-hidden-focusable">Next</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default MovingCrousel;