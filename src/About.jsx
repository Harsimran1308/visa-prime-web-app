import React from "react";
import "./About.css";
import ClientReviews from "./ClientReviews";

const About = () => {
  const teamMemberData = [
    {
      id: 1,
      imgSrc: "img/puneet-team-member.jpg",
      name: "Puneet Othi",
      desc: `
        <h5>Director at VisaPrime Consultancy</h5>
        <h5>Regulated Canadian Immigration Consultant (RCIC)</h5>
        <h5><strong>Membership ID:</strong> R530311 (CICC)</h5>
        <p>Puneet Kaur Othi is a highly experienced immigration consultant and the Director of VisaPrime Consultancy. As a Regulated Canadian Immigration Consultant (RCIC) registered with the College of Immigration and Citizenship Consultants (CICC), Puneet has a deep understanding of immigration laws and processes, offering personalized solutions to her clients. She holds an Honours Diploma in Immigration Consulting from Ashton College.</p>
        
        <h4>A Journey Rooted in Personal Experience</h4>
        <p>Having immigrated to Canada herself as an international student, Puneet is intimately familiar with the challenges, obstacles, and uncertainties that come with the immigration process. This personal experience enables her to relate to her clients on a deeper level, offering not just professional guidance, but empathy and support as they navigate their immigration journey.</p>

        <h4>A Decade of Expertise</h4>
        <p>With over a decade of hands-on experience, Puneet has successfully guided hundreds of clients through complex immigration procedures. Her areas of expertise include:</p>
        <ul>
        <li><strong>Temporary Visas:</strong> Visitor visas, work permits, and student visas</li>
        <li><strong>Permanent Residency:</strong> Express Entry, PNP, family sponsorship</li>
        <li><strong>LMIA Services:</strong> Assisting employers in meeting their staffing needs</li>
        <li><strong>Business Immigration:</strong> Supporting business owners and entrepreneurs</li>
        </ul>
        <p>Puneet is committed to helping clients understand their options for migrating to Canada, and she gives each one individual and personal attention to ensure their unique needs are met.</p>

        <h4>Helping Employers Succeed</h4>
        <p>Puneet also leads a dedicated team focused on helping Canadian employers address their recruitment needs through comprehensive immigration and LMIA services. Whether sourcing skilled talent from abroad or navigating the complex requirements of the Temporary Foreign Worker Program (TFWP), her expertise ensures that businesses can meet their staffing challenges efficiently.</p>

        <h4>Get in Touch</h4>
        <p>If you’re looking for expert immigration advice, reach out to Puneet for a personalized consultation tailored to your needs.</p>
    `,
      email: "puneet@visaprime.ca",
      sclass: true,
    },
    {
      id: 2,
      imgSrc: "img/ketan-team-member.jpg",
      name: "Ketan Khaira",
      desc: 
      `
      <p>Ketanjit is a dynamic professional whose educational journey began at McMaster
      University and Humber College. His career initially led him to the Oilsands
      engineering industry, where he accumulated a wealth of knowledge and technical
      expertise.</p>
      <p>Over the years, Ketanjit ventured into managing employment agencies and
      construction firms in Toronto, further honing his leadership and entrepreneurial
      skills. His passion for innovation and creativity in the business world has always
      driven him to explore groundbreaking strategies and nurture strong client
      relationships.</p>
      <p>Since joining VisaPrime Consultancy in 2018, Ketanjit has played a pivotal role in
      shaping the company&#39;s growth and success. Known for his ability to foster
      lasting partnerships, he is dedicated to connecting with both new and long-
      standing clients, ensuring their needs are met with care and attention.</p>
      `,
      email: "ketan@visaprime.ca",
      sclass: true,
    },
    {
      id: 3,
      imgSrc: "img/mary-anne-team-member.jpg",
      name: "Mary Anne",
      desc: `
      <p>Meet Mary Anne, a dedicated professional with a unique blend of expertise in
      both technology and healthcare. She holds degrees in Computer Programming
      and Food Technology from the Philippines, which provided her with essential
      technical skills. Mary Anne&#39;s career spans over 16 years, including six years in
      Taiwan and a decade as a Medical Insurance Coordinator at Burjeel Hospital in
      Abu Dhabi. In this role, she honed her administrative skills while delivering
      friendly and knowledgeable assistance to patients and staff alike. Her diverse
      experiences and strong educational background have equipped her to tackle
      future challenges with confidence and proficiency.</p>
      `,
      email: "maryanne@visaprime.ca",
      sclass: true,
    },
    {
      id: 4,
      imgSrc: "img/natasa-team-member.jpg",
      name: "Natasa Simin",
      desc: `
      <p>Natasa Simin is a highly skilled RCIC,R708102,  with a unique perspective, having
      originally come from Serbia. With years of experience in the immigration field,
      Natasa brings a deep understanding of the complexities involved in the
      immigration process.</p>
      <p>Natasa’s extensive experience inspired her to pursue a career as an Immigration
      Consultant. She completed her Immigration Consultant Diploma with Honours
      from Ashton College, and since then, she has been dedicated to using her
      knowledge to guide clients through the often-challenging immigration landscape.
      In addition to her work with our firm, Natasa also contributes her skills at Service
      Canada, further expanding her insight into immigration and governmental
      processes.</p>
      <p>Natasa's ability to communicate fluently in multiple languages enhances her
      ability to serve clients from diverse backgrounds. She speaks, English, Croatian,
      Bosnian, Serbian &amp; basic Spanish</p>
      `,
      email: "edm@visaprime.ca",
      sclass: true,
    },
    {
      id: 5,
      imgSrc: "img/kulwinder-team-member.jpg",
      name: "Kulwinderjit Singh",
      desc: `
      <p>Mr. Kulwinderjit Singh is a seasoned professional with a diverse background
      spanning multiple industries and countries. Having lived in the UK and traveled to
      Canada frequently, he brings a wealth of experience in managing businesses
      across both the UK and India. His passion for overcoming challenges drives his
      success as a Business Development Manager in Edmonton.</p>
      <p>Kulwinderjit oversees document collection and bookkeeping, providing essential
      support for the company’s immigration services. His expertise in these areas
      ensures the accuracy and organization of client records, facilitating efficient
      processing of applications.</p>
      `,
      email: "kulwinder@visaprime.ca",
      sclass: false,
    },
  ];
  return (
    <div>
      <div className="container-fluid bg-breadcrumb about-us-page">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h3>
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
              <h1 className="display-5 mb-4">
                We Are Leader In Immigration Solution
              </h1>
              <p className="mb-4">
                Dedicated to helping individuals and families navigate the
                complex process of Canadian immigration. With years of
                experience and a deep understanding of the latest immigration
                policies, our expert team provides personalized guidance.Our
                commitment is to make your immigration journey smooth,
                transparent, and successful.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0 bg-primary p-4">
                  <h1 className="display-2" style={{ color: "white" }}>
                    10
                  </h1>
                  <h5 className="text-white">Years of</h5>
                  <h5 className="text-white">Experience</h5>
                </div>
                <div className="ms-4">
                  <p>
                    <i className="fa fa-check text-primary me-2"></i>Work Permit
                  </p>
                  <p>
                    <i className="fa fa-check text-primary me-2"></i>Study
                    Permit
                  </p>
                  <p>
                    <i className="fa fa-check text-primary me-2"></i>Permanent
                    Resident
                  </p>
                  <p>
                    <i className="fa fa-check text-primary me-2"></i>Visitor
                    Visa
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>LMIA
                  </p>
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
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">Team Members</h5>
          </div>
          <h1 className="display-5 mb-4">Meet Our Team</h1>
          <p className="mb-0">
            Get to know the dedicated professionals behind our success. Our
            experienced team of immigration consultants and specialists is
            committed to providing expert guidance and personalized solutions to
            help you achieve your immigration goals. Meet the people who are
            here to support you every step of the way.
          </p>
        </div>
      </div>
      {teamMemberData.map((member) => (
        <div className="container-fluid py-2" key={member.id}>
          <div
            className={
              member.sclass
                ? "container space-margin-200"
                : "container space-margin-50"
            }
          >
            <div className="row g-5">
              <div className="col-xl-5">
                <div className="bg-light rounded">
                  <img
                    src={member.imgSrc}
                    className="img-fluid w-100 team-member-image"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-xl-7">
                <h5 className="display-6 mb-4">{member.name}</h5>
                <div className="mb-4 team-member-description" dangerouslySetInnerHTML={{ __html: member.desc}}></div>
                <div className="d-flex flex-wrap">
                  <div
                    id="phone-tada"
                    className="d-flex align-items-center justify-content-center me-3"
                  >
                    <a
                      className="position-relative wow tada"
                      data-wow-delay=".9s"
                    >
                      <i className="fa fa-envelope text-primary fa-2x"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <span
                      className="text-secondary fw-bold fs-5"
                      style={{ letterSpacing: "2px" }}
                    >
                      {member.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="google-review-about-us">
        <ClientReviews></ClientReviews>
      </div>
    </div>
  );
};

export default About;
