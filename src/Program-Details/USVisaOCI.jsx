import React, { useRef } from "react";
import ClientAssesmentForm from "../ClientAssesmentForm";

const USVisaOCI = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
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
            <h1>U.S. Visitor Visa from Canada</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/united-states-visa.jpg"
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
                    Planning a trip to the U.S. from Canada? Whether it’s for
                    tourism, business, or visiting family and friends, obtaining
                    a U.S. Visitor Visa (B-1/B-2) is essential for most
                    non-Canadian citizens residing in Canada. This visa allows
                    you to temporarily enter the U.S. for up to six months,
                    depending on the purpose of your visit.
                  </span>
                </p>
                <p>
                  <span>
                    At VisaPrime Consultancy, we offer expert assistance to help
                    you navigate the U.S. Visitor Visa application process with
                    ease. From preparing the necessary documents to scheduling
                    your visa interview, we ensure you’re well-prepared to meet
                    the U.S. consulate’s requirements.
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
                      Types of U.S. Visitor Visas:
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
                      How We Can Help:
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
                      Eligibility Requirements:
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
                      Apply for Indian OCI, Visitor Visa, and Passport Renewal
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
                      Overseas Citizenship of India (OCI)
                    </a>
                  </li>
                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section6`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section6");
                      }}
                    >
                      Indian Visitor Visa
                    </a>
                  </li>
                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section7`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section7");
                      }}
                    >
                      Indian Passport Renewal
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>Types of U.S. Visitor Visas:</h2>
                  <ul>
                    <li>
                      <strong>B-1 Visa:</strong> For business purposes, such as
                      attending meetings or conferences.
                    </li>
                    <li>
                      <strong>B-2 Visa:</strong> For tourism, vacation, medical
                      treatment, or visiting family and friends.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>How We Can Help</h2>
                  <ul>
                    <li>
                      <strong>Document Preparation:</strong> We assist in
                      gathering and organizing the required documentation.
                    </li>
                    <li>
                      <strong>Application Submission:</strong> Complete your
                      visa application accurately and submit it on time.
                    </li>
                    <li>
                      <strong>Interview Support:</strong> Guidance on preparing
                      for your interview at the U.S. Consulate.
                    </li>
                    <li>
                      <strong>Follow-up:</strong> Stay updated on the status of
                      your application.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>Eligibility Requirements:</h2>
                  <ul>
                    <li>Valid passport</li>
                    <li>
                      Proof of strong ties to Canada (employment, family, etc.)
                    </li>
                    <li>Evidence of funds to support your stay</li>
                    <li>Clear purpose of travel</li>
                  </ul>
                  <p>
                    Let us help you secure your U.S. Visitor Visa so you can
                    travel with peace of mind. Contact us today to start your
                    application!
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>
                    Apply for Indian OCI, Visitor Visa, and Passport Renewal
                  </h2>
                  <p>
                    If you’re a non-resident Indian or foreign national with
                    ties to India, VisaPrime Consultancy is here to help you
                    navigate the process of applying for Indian Overseas
                    Citizenship (OCI), an Indian Visitor Visa, or renewing your
                    Indian Passport. Our team of experts ensures that you meet
                    all the requirements and helps streamline your application,
                    saving you time and effort.
                  </p>
                  <h4 id="section-5" ref={sectionRefs.section5}>
                    1. Overseas Citizenship of India (OCI)
                  </h4>
                  <p>
                    The OCI card grants foreign nationals of Indian origin a
                    lifelong visa to India, allowing you to visit, reside, and
                    work in India without time restrictions. It’s perfect for
                    those who want to maintain strong ties with India.
                  </p>

                  <h5>Benefits of OCI:</h5>
                  <ul>
                    <li>Lifelong visa to India</li>
                    <li>No need for a visitor visa for each trip</li>
                    <li>
                      Access to certain economic and financial benefits in India
                    </li>
                  </ul>

                  <h5>How We Can Help:</h5>
                  <ul>
                    <li>
                      Guidance on eligibility (Indian ancestry, former Indian
                      citizenship, etc.)
                    </li>
                    <li>Assistance with filling out the application form</li>
                    <li>
                      Document preparation (proof of Indian origin, current
                      nationality, etc.)
                    </li>
                    <li>Submission and follow-up with relevant authorities</li>
                  </ul>

                  <h4 id="section-6" ref={sectionRefs.section6}>
                    2. Indian Visitor Visa
                  </h4>
                  <p>
                    If you're not eligible for OCI, the Indian Visitor Visa
                    allows you to travel to India for tourism, family visits, or
                    business purposes for a limited time.
                  </p>

                  <h5>What We Offer:</h5>
                  <ul>
                    <li>
                      Complete support in filling out the visa application
                    </li>
                    <li>Assistance with collecting required documentation</li>
                    <li>Scheduling visa appointments</li>
                    <li>
                      Guidance through the consular process and interview
                      preparation
                    </li>
                  </ul>

                  <h4 id="section-7" ref={sectionRefs.section7}>
                    3. Indian Passport Renewal
                  </h4>
                  <p>
                    Indian citizens residing in Canada may need to renew their
                    Indian Passport when it expires or in the event of name
                    changes or lost passports. Keeping your passport valid is
                    essential for travel and legal status.
                  </p>

                  <h5>Renewal Services Include:</h5>
                  <ul>
                    <li>Application form assistance</li>
                    <li>
                      Document collection (proof of citizenship, photos, etc.)
                    </li>
                    <li>Submission and tracking of your application</li>
                    <li>
                      Handling any passport reissue cases (lost, damaged, etc.)
                    </li>
                  </ul>
                </section>
              </div>
              <div className="client-assesment-form" style={{marginTop:"30px",marginBottom:"50px"}}>
                <ClientAssesmentForm></ClientAssesmentForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USVisaOCI;
