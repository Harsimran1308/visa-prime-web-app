import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid nav-bar p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <h1 className="display-5 text-secondary m-0"><img src="img/brand-logo.png" className="img-fluid" alt=""/>
                </h1>
                
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/" className="nav-item nav-link">Home</a>
                    <div className="nav-item dropdown">
                        <a className="nav-link" data-bs-toggle="dropdown"><span href="/immigration-services" className="dropdown-toggle">Immigrate to Canada</span></a>
                            <div className="dropdown-menu m-0">
                                <a href="/express-entry" className="dropdown-item">Express Entry</a>
                                <a href="/pnp" className="dropdown-item">Alberta Advantage Immigration Program</a>
                                <a href="/lmia" className="dropdown-item">LMIA</a>
                                <a href="/permanent-residence" className="dropdown-item">Permanent Residency</a>
                                <a href="/work-permit" className="dropdown-item">Work Permit</a>
                                <a href="/family-sponsorship" className="dropdown-item">Family Sponsorship</a>
                                <a href="/study-permit" className="dropdown-item">Study Permit</a>
                                <a href="/visitor-visa" className="dropdown-item">Visitor Visa</a>
                                <a href="/citizenship" className="dropdown-item">Citizenship</a>
                                <a href="/us-visa-oci" className="dropdown-item">US Visa & OCI </a>
                            </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="/staffing-solutions" className="nav-link" data-bs-toggle="dropdown"><span className="dropdown-toggle">Staffing Solutions</span></a>
                            <div className="dropdown-menu m-0">
                                <a href="local-recruitment" className="dropdown-item">Local Recruitment</a>
                                <a href="temporary-foriegn-worker" className="dropdown-item">Temporary Foreign Worker</a>
                            </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a href="" className="nav-link" data-bs-toggle="dropdown"><span className="dropdown-toggle">Immigration News</span></a>
                            <div className="dropdown-menu m-0">
                                <a href="/latest-news" className="dropdown-item">Immigration Newsletter</a>
                                <a href="/blogs" className="dropdown-item">Blogs</a>
                            </div>
                    </div>
                    <a href="/about" className="nav-item nav-link">About</a>
                    <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
                <a href="https://book.squareup.com/appointments/khg9bqtfjxfazj/location/SK6MBAW63XB7V/services" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0" target="_blank" >Book Appointment</a>
            </div>
        </nav>
    </div>
  );
};

export default Header;