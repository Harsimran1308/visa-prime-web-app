import {React, useEffect} from 'react';


const CounterName = () => {
  return (
        <div className="container-fluid counter-facts py-5">
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="counter">
                        <div className="counter-icon">
                            <i className="fas fa-passport"></i>
                        </div>
                        <div className="counter-content">
                            <h3>Visa Categories</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="counter-value" data-toggle="counter-up">15</span>
                                <h4 className="text-secondary mb-0" style={{fontWeight: "600" , fontSize: "25px"}}>+</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="counter">
                        <div className="counter-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="counter-content">
                            <h3>Team Members</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="counter-value" data-toggle="counter-up">4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="counter">
                        <div className="counter-icon">
                            <i className="fas fa-user-check"></i>
                        </div>
                        <div className="counter-content">
                            <h3>Visa Process</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="counter-value" data-toggle="counter-up">10 K</span>
                                <h4 className="text-secondary mb-0" style={{fontWeight: "600" , fontSize: "25px"}}>+</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="counter">
                        <div className="counter-icon">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <div className="counter-content">
                            <h3>Success Rates</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                <span className="counter-value" data-toggle="counter-up">100</span>
                                <h4 className="text-secondary mb-0" style={{fontWeight: "600" , fontSize: "25px"}}>%</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CounterName;