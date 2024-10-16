import React, { useRef } from "react";
import ClientReviews from "../ClientReviews";
import EmployerAssesmentForm from "../EmployerAssesmentForm";

const LocalRecruitment = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };
  // Function to handle scrolling
  const scrollToSection = (section) => {
    const offset = 100; // Adjust this value to move the scroll position

    if (sectionRefs[section].current) {
      const top =
        sectionRefs[section].current.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>
              Local Recruitment Services in Edmonton, Fort McMurray, and
              Surrounding Rural Areas
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/admin-office-clerk.jpg"
                  alt="Image"
                  style={{
                    marginTop: "30px",
                    maxHeight: "400px",
                    maxWidth: "80%",
                  }}
                />
              </div>
              <div className="details-text">
                <p>
                  <span>
                    At <strong>VisaPrime Consultancy</strong>, we specialize in
                    connecting employers with top local talent in Edmonton, Fort
                    McMurray, and surrounding rural areas. As the best
                    immigration consultancy firm in the region, we understand
                    the unique needs of local businesses and deliver tailored
                    recruitment solutions that help you find the right
                    candidates quickly and efficiently.
                  </span>
                </p>
                <p>
                  <h2>
                    <strong>
                      <span>Article Navigation</span>
                    </strong>
                  </h2>
                </p>
                <ul>
                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section1`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section1");
                      }}
                    >
                      Why Choose Local Recruitment?
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section2`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section2");
                      }}
                    >
                      Our Local Recruitment Process
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section3`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section3");
                      }}
                    >
                      Why Choose VisaPrime Consultancy?
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section4`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section4");
                      }}
                    >
                      Industries We Serve
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section5`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section5");
                      }}
                    >
                      Optimize Your Local Hiring with VisaPrime Consultancy
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>Why Choose Local Recruitment?</h2>
                  <p>
                    Local recruitment offers significant advantages for
                    employers looking to fill positions without the additional
                    complexities associated with hiring from abroad. Here are
                    some key benefits:
                  </p>
                  <ul>
                    <li>
                      <strong>Quick Hiring Process:</strong> Reduce hiring time
                      with access to a pool of qualified, locally available
                      candidates.
                    </li>
                    <li>
                      <strong>Cost Savings:</strong> Avoid expenses associated
                      with international relocation and work permits.
                    </li>
                    <li>
                      <strong>Immediate Availability:</strong> Candidates based
                      in the area can start work sooner, helping you meet your
                      business needs without delay.
                    </li>
                    <li>
                      <strong>Community Connection:</strong> Hiring local talent
                      strengthens your ties with the community and contributes
                      to the local economy.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>Our Local Recruitment Process</h2>
                  <ol>
                    <li>
                      <strong>Understanding Your Needs:</strong> We start by
                      consulting with you to understand your specific
                      requirements, including job roles, skills, experience
                      levels, and company culture. This allows us to identify
                      candidates who are a perfect fit for your business.
                    </li>
                    <li>
                      <strong>Candidate Sourcing and Screening:</strong> We
                      utilize our extensive network and advanced recruitment
                      tools to source qualified candidates from Edmonton, Fort
                      McMurray, and nearby rural areas. Our team thoroughly
                      screens candidates, verifying credentials and conducting
                      interviews to ensure only the best are recommended for
                      your open positions.
                    </li>
                    <li>
                      <strong>Interview Coordination and Support:</strong> We
                      help arrange interviews and provide guidance on effective
                      hiring practices. Our support extends to offering insights
                      into competitive compensation, market trends, and best
                      practices for onboarding.
                    </li>
                    <li>
                      <strong>Onboarding Assistance:</strong> Once you’ve
                      selected a candidate, we assist with the onboarding
                      process, ensuring a smooth transition for the new
                      employee. This may include helping with paperwork,
                      employee orientation, and providing resources for settling
                      into their new role.
                    </li>
                    <li>
                      <strong>Ongoing Follow-Up:</strong> We stay in touch with
                      both employers and employees to ensure successful
                      integration and address any concerns that may arise during
                      the initial employment period.
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>Why Choose VisaPrime Consultancy?</h2>
                  <ul>
                    <li>
                      <strong>Experienced Recruitment Team:</strong> With years
                      of experience in the local job market, we understand the
                      challenges and opportunities in Edmonton, Fort McMurray,
                      and the surrounding rural areas.
                    </li>
                    <li>
                      <strong>Tailored Solutions:</strong> Our recruitment
                      strategies are customized to meet your specific business
                      needs, ensuring you get the best fit for your team.
                    </li>
                    <li>
                      <strong>Extensive Network:</strong> Leverage our strong
                      connections within the local community to access a wide
                      range of skilled candidates.
                    </li>
                    <li>
                      <strong>High Success Rate:</strong> Our approach ensures
                      that you not only find a suitable candidate but one who is
                      committed to long-term success with your company.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>Industries We Serve</h2>
                  <p>
                    We have experience recruiting for a wide range of
                    industries, including but not limited to:
                  </p>
                  <ul>
                    <li>Construction and Trades</li>
                    <li>Healthcare and Nursing</li>
                    <li>Hospitality and Food Services</li>
                    <li>Administrative and Clerical Roles</li>
                    <li>Manufacturing and Warehousing</li>
                    <li>Retail and Sales</li>
                    <li>Oil & Gas</li>
                    <li>Security</li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-5"
                  ref={sectionRefs.section5}
                >
                  <h2>Optimize Your Local Hiring with VisaPrime Consultancy</h2>
                  <p>
                    Let us help you fill your job vacancies with top local
                    talent quickly and efficiently. Whether you're in Edmonton,
                    Fort McMurray, or nearby rural areas, our expert recruitment
                    services are designed to meet the demands of your business.
                  </p>
                  <p>
                    <strong>Contact VisaPrime Consultancy today </strong>to
                    learn more about our local recruitment services and start
                    finding the perfect candidates for your team.
                  </p>
                </section>
              </div>
              <div className="reviews">
                <ClientReviews></ClientReviews>
              </div>
              <div className="employee-form">
                <EmployerAssesmentForm></EmployerAssesmentForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalRecruitment;
