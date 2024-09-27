import React from "react";
import './About.css';

const About = () => {
    const teamMemberData = [
        {
          id: 1,
          imgSrc: "img/puneet-team-member.jpg",
          name: "Puneet Othi (RCIC)",
          desc1: "Puneet Kaur Othi is the Director at VisaPrime Consultancy and also is a Regulated Canadian Immigration Consultant registered with ICCRC with membership ID R530311. She has completed the Immigration Consultant Diploma with Honours from Ashton College, carries certification from Canadian Course for Educational Agents and is a Commissioner of Oaths in and for Alberta.",
          desc2: "Puneet herself came as an international student to Canada; therefore, she understands the needs, requirements and hurdles of an immigrant very well. With a decade of hands-on experience, Puneet helps new clients understand their options for migrating to Canada and can be reached to discuss the service solutions available as per your criteria. She gives every client individual and personal attention to their immigration application needs. Leading a dedicated team of associates in Canada & India she strives to deliver the best timely results.",
          phone: "+1 (825) 777-4222",
          email: "puneet@visaprime.ca",
          sclass:true
        },
        {
            id: 2,
            imgSrc: "img/kulwinder-team-member.jpg",
            name: "Kulwinderjit Singh",
            desc1: "Our Managing Director – VisaPrime Immigration, Mr. Kulwinderjit Singh, is a mature, well educated, multi field experienced individual, for whom challenges are a passion. Being a UK resident previously and traveling to Canada every year, he has a vast experience in managing businesses in the UK and India.  He takes care of the document collection and consultancy operations in India. His core strengths incorporate a solution-oriented approach in his work and building strong and professional relationships with clients.",
            desc2: "His technical skills provide a stable setup in infrastructure which helps in prompt processing of applications and keeping the client information secured. He manages the IELTS Operations – Online & In-person classes along with assisting clients with their queries regarding Immigration to Canada as a student, worker or for Permanent Residency.",
            phone: "+91 89682-87915",
            email: "india@visaprime.ca",
            sclass:true
        },
        {
            id: 3,
            imgSrc: "img/natasa-team-member.jpg",
            name: "Natasa Bizic",
            desc1: "One of our experienced consultants, Natasa Bizic, is originally from Serbia and brings a unique perspective to our team. With her years of experience working in an immigration firm, she has a deep understanding of the complexities of the immigration process.",
            desc2: "Through her experience, Natasa gained a vast knowledge of the immigration process, which inspired her to become an Immigration Consultant. She has completed the Immigration Consultant Diploma with Honours from Ashton College, and brings her expertise and personal experience to help our clients achieve their goals.  In addition to her work with our firm, Natasa also works with Service Canada.",
            phone: "+1 (825) 777-4222",
            email: "info@visaprime.ca",
            sclass:true
        },
        {
            id: 4,
            imgSrc: "img/ketan-team-member.jpg",
            name: "Ketan Khaira",
            desc1: "Ketanjit graduated from McMaster University and Humber College.His career path brought him to the exciting world of Oilsands engineering, wherein he gained an incredible amount of knowledge and insights over the years.With vast experience in managing employment agencies and construction firms in Toronto, world of entrepreneurship became his playground. From groundbreaking strategies to fostering strong client relationships, he has always believed in the power of connection and creativity.",
            desc2: "Ketan has been a vital part of the VisaPrime family since 2018, bringing his unique ideas to fuel our growth and success. Building lasting relationships is his forte, whether with new faces or long-term partners.",
            phone: "+1 (825) 777-4222",
            email: "ketan@visaprime.ca",
            sclass:false
        },
      ];
    return (
        <div>
            <div className="container-fluid bg-breadcrumb about-us-page">
                <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h3>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row gx-3 h-100">
                                <div className="col-6 align-self-start">
                                    <img className="img-fluid" src="img/about-us-img-2.jpg" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid" src="img/about-us-img-1.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-5 mb-4">We Are Leader In Immigration Solution</h1>
                            <p className="mb-4">Dedicated to helping individuals and families navigate the complex process of Canadian immigration. With years of experience and a deep understanding of the latest immigration policies, our expert team provides personalized guidance.Our commitment is to make your immigration journey smooth, transparent, and successful.</p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 bg-primary p-4">
                                    <h1 className="display-2" style={{color: "white"}}>10</h1>
                                    <h5 className="text-white">Years of</h5>
                                    <h5 className="text-white">Experience</h5>
                                </div>
                                <div className="ms-4">
                                    <p><i className="fa fa-check text-primary me-2"></i>Work Permit</p>
                                    <p><i className="fa fa-check text-primary me-2"></i>Study Permit</p>
                                    <p><i className="fa fa-check text-primary me-2"></i>Permanent Resident</p>
                                    <p><i className="fa fa-check text-primary me-2"></i>Visitor Visa</p>
                                    <p className="mb-0"><i className="fa fa-check text-primary me-2"></i>LMIA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="story">
                <div className="container-fluid">
                    <div className="section-header">
                        <h2>Our Story</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium ornare velit non</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="story-container">
                                <div className="story-end">
                                    <p>Now</p>
                                </div>
                                <div className="story-continue">

                                    <div className="row story-right">
                                        <div className="col-md-6">
                                            <p className="story-date">
                                                01 Jun 2020
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="story-box">
                                                <div className="story-icon">
                                                    <i className="fa fa-gift"></i>
                                                </div>
                                                <div className="story-text">
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row story-left">
                                        <div className="col-md-6 d-md-none d-block">
                                            <p className="story-date">
                                                01 Jan 2020
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="story-box">
                                                <div className="story-icon d-md-none d-block">
                                                    <i className="fa fa-business-time"></i>
                                                </div>
                                                <div className="story-text">
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                                                </div>
                                                <div className="story-icon d-md-block d-none">
                                                    <i className="fa fa-business-time"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-block d-none">
                                            <p className="story-date">
                                                01 Jan 2020
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="story-year">
                                                <p>2020</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row story-right">
                                        <div className="col-md-6">
                                            <p className="story-date">
                                                01 Dec 2019
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="story-box">
                                                <div className="story-icon">
                                                    <i className="fa fa-briefcase"></i>
                                                </div>
                                                <div className="story-text">
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row story-left">
                                        <div className="col-md-6 d-md-none d-block">
                                            <p className="story-date">
                                                01 Sep  2019
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="story-box">
                                                <div className="story-icon d-md-none d-block">
                                                    <i className="fa fa-cogs"></i>
                                                </div>
                                                <div className="story-text">
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                                                </div>
                                                <div className="story-icon d-md-block d-none">
                                                    <i className="fa fa-cogs"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-block d-none">
                                            <p className="story-date">
                                                01 Sep  2019
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row story-right">
                                        <div className="col-md-6">
                                            <p className="story-date">
                                                01 Jun 2019
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="story-box">
                                                <div className="story-icon">
                                                    <i className="fa fa-running"></i>
                                                </div>
                                                <div className="story-text">
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row story-left">
                                        <div className="col-md-6 d-md-none d-block">
                                            <p className="story-date">
                                                01 Mar 2019
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="story-box">
                                                <div className="story-icon d-md-none d-block">
                                                    <i className="fa fa-home"></i>
                                                </div>
                                                <div className="story-text">
                                                    <h3>Lorem ipsum dolor</h3>
                                                    <p>Lorem ipsum dolor sit amet elit ornare velit non</p>
                                                </div>
                                                <div className="story-icon d-md-block d-none">
                                                    <i className="fa fa-home"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-block d-none">
                                            <p className="story-date">
                                                01 Mar 2019
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="story-start">
                                    <p>Launch</p>
                                </div>
                                <div className="story-launch">
                                    <div className="story-box">
                                        <div className="story-text">
                                            <h3>Launched our company on 01 Jan 2019</h3>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="office pt-5">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">Team Members</h5>
                    </div>
                    <h1 className="display-5 mb-4">Meet Our Team</h1>
                    <p className="mb-0">Get to know the dedicated professionals behind our success. Our experienced team of immigration consultants and specialists is committed to providing expert guidance and personalized solutions to help you achieve your immigration goals. Meet the people who are here to support you every step of the way.</p>
                </div>
            </div>
            {teamMemberData.map((member) => (
                <div className="container-fluid py-2" key={member.id}>
                    <div className={member.sclass ? "container space-margin-200" : "container space-margin-50"}>
                        <div className="row g-5">
                            <div className="col-xl-5">
                                <div className="bg-light rounded">
                                    <img src={member.imgSrc} className="img-fluid w-100 team-member-image" alt="Image"/>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <h5 className="display-6 mb-4">{member.name}</h5>
                                <p className="mb-4 team-member-description">
                                    {member.desc1}
                                </p>
                                <p className="team-member-description">
                                    {member.desc2}
                                </p>
                                <div className="d-flex flex-wrap">
                                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-3">
                                        <a className="position-relative wow tada" data-wow-delay=".9s">
                                            <i className="fa fa-phone-alt text-primary fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center me-5">
                                        <span className="text-secondary fw-bold fs-5" style={{letterSpacing: "2px"}}>{member.phone}</span>
                                    </div>
                                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-3">
                                        <a className="position-relative wow tada" data-wow-delay=".9s">
                                            <i className="fa fa-envelope text-primary fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <span className="text-secondary fw-bold fs-5" style={{letterSpacing: "2px"}}>{member.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
} 

export default About;