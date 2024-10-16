import React, { useRef } from "react";
import ClientReviews from "../ClientReviews";
import EmployerAssesmentForm from "../EmployerAssesmentForm";

const TemporaryForeignWorker = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
    section11: useRef(null),
    section12: useRef(null),
    section13: useRef(null),
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
              Welcome to VisaPrime Consultancy – Your Trusted Partner for
              Temporary Foreign Worker (TFW) Solutions!
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/temporary-foriegn-worker.jpg"
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
                    At VisaPrime Consultancy, we specialize in helping employers
                    in Edmonton, Fort McMurray, and surrounding rural areas
                    navigate the Temporary Foreign Worker Program (TFWP).
                    Whether you&#39;re an employer seeking to fill critical
                    labor gaps or a foreign worker looking for temporary
                    employment, our team provides top-notch expertise and
                    tailored immigration services.
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
                      What is the Temporary Foreign Worker Program (TFWP)?
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
                      Benefits of Hiring Temporary Foreign Workers for Employers
                      in Edmonton and Fort McMurray
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
                      Understanding the LMIA Process: High-Wage and Low-Wage
                      Worker Categories
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
                      High-Wage Workers in Edmonton and Surrounding Areas
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
                      Median Hourly Wages for Alberta (Effective April 2, 2024)
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
                      Low-Wage Workers: Key Guidelines for Employers in Rural
                      Alberta
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
                      Expediting the LMIA Process: Fast-Track Solutions
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section8`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section8");
                      }}
                    >
                      Situations Where Expedited LMIA Processing is Available:
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section9`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section9");
                      }}
                    >
                      Advertising Requirements for Employers in Edmonton, Fort
                      McMurray, and Surrounding Areas
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section10`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section10");
                      }}
                    >
                      Quebec-Specific Exemptions and LMIA Variations
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section11`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section11");
                      }}
                    >
                      Rights and Protections for Temporary Foreign Workers in
                      Alberta
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section12`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section12");
                      }}
                    >
                      Pathways to Permanent Residency for TFWs in Edmonton and
                      Rural Alberta
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section13`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section13");
                      }}
                    >
                      VisaPrime Consultancy: The Best in Edmonton for
                      Immigration Services
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>What is the Temporary Foreign Worker Program (TFWP)</h2>
                  <p>
                    The TFWP allows employers in Alberta to hire foreign
                    nationals to address labor shortages when no qualified
                    Canadian workers are available. The process often requires a
                    Labour Market Impact Assessment (LMIA) to confirm that
                    hiring a foreign worker will benefit or have a neutral
                    impact on the Canadian labor market. VisaPrime Consultancy
                    helps businesses in Edmonton, Fort McMurray, and nearby
                    areas secure the necessary LMIAs to bring in temporary
                    workers quickly and efficiently.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>
                    Benefits of Hiring Temporary Foreign Workers for Employers
                    in Edmonton and Fort McMurray
                  </h2>
                  <p>
                    Hiring TFWs offers several advantages for local employers:
                  </p>
                  <ul>
                    <li>
                      <strong>Fill Labor Gaps:</strong> Address immediate labor
                      shortages, especially in industries like oil and gas,
                      construction, healthcare, and hospitality and Food &
                      Beverage.
                    </li>
                    <li>
                      <strong>Access Specialized Skills:</strong> Some positions
                      in Edmonton, Calgary, Fort McMurray & surrounding rural
                      areas require unique skills that are challenging to find
                      in the local labor market.
                    </li>
                    <li>
                      <strong>Boost Productivity:</strong> Skilled foreign
                      workers ensure that businesses can maintain productivity
                      levels during busy seasons or large projects.
                    </li>
                    <li>
                      <strong>Enhance Workforce Diversity:</strong> Hiring TFWs
                      can bring new perspectives and skills that drive
                      innovation and cultural growth.
                    </li>
                    <li>
                      <strong>Flexibility in Workforce Management:</strong>{" "}
                      Seasonal and project-based work can be managed more
                      effectively with temporary workers.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>
                    Understanding the LMIA Process: High-Wage and Low-Wage
                    Worker Categories
                  </h2>
                  <p>
                    The LMIA process varies depending on whether the position is
                    classified as high-wage or low-wage according to Alberta's
                    median hourly wage.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>High-Wage Workers in Edmonton and Surrounding Areas</h2>
                  <ul>
                    <li>
                      <strong>Transition Plans:</strong> Employers hiring
                      high-wage workers need to demonstrate efforts to
                      transition to a local workforce over time, such as
                      training Canadian workers or supporting TFWs in becoming
                      permanent residents.
                    </li>
                    <li>
                      <strong>Compliance Monitoring:</strong> Employers may face
                      inspections to ensure they meet the transition plans and
                      other TFWP requirements.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-5"
                  ref={sectionRefs.section5}
                >
                  <h2>
                    Median Hourly Wages for Alberta (Effective April 2, 2024)
                  </h2>
                  <p>
                    The median hourly wage in Alberta is $29.50. Positions
                    paying at or above this rate are considered high-wage, while
                    those below fall under the low-wage category.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-6"
                  ref={sectionRefs.section6}
                >
                  <h2>
                    Low-Wage Workers: Key Guidelines for Employers in Rural
                    Alberta
                  </h2>
                  <ul>
                    <li>
                      <strong>Different Requirements:</strong> Businesses hiring
                      low-wage workers must follow specific guidelines,
                      including a cap limiting the proportion of TFWs in the
                      workforce (10% for companies with 10 or more employees).
                    </li>
                    <li>
                      <strong>Additional Obligations:</strong>
                      <ul>
                        <li>Cover round-trip transportation for the worker.</li>
                        <li>Provide affordable housing options.</li>
                        <li>
                          Offer private health insurance until provincial health
                          coverage is available.
                        </li>
                        <li>
                          Register with the provincial workplace safety board.
                        </li>
                        <li>Establish a clear employer-employee contract.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Regional Limitations:</strong> LMIA applications
                      may not be processed in regions where the unemployment
                      rate exceeds 6%, but exceptions apply for specific areas
                      like Yellowknife.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-7"
                  ref={sectionRefs.section7}
                >
                  <h2>Expediting the LMIA Process: Fast-Track Solutions</h2>
                  <p>
                    VisaPrime Consultancy can assist employers in Edmonton, Fort
                    McMurray, and rural Alberta in expediting their LMIA
                    applications.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-8"
                  ref={sectionRefs.section8}
                >
                  <h2>
                    Situations Where Expedited LMIA Processing is Available
                  </h2>
                  <ul>
                    <li>
                      <strong>High-Demand Occupations:</strong> Skilled trades
                      and occupations that are crucial to infrastructure and
                      resource projects can be fast-tracked.
                    </li>
                    <li>
                      <strong>Top-Paid Workers:</strong> Positions offering
                      wages in the top 10% for Alberta qualify for expedited
                      processing.
                    </li>
                    <li>
                      <strong>Short-Term Roles (120 Days or Less):</strong>{" "}
                      Temporary jobs with durations of 120 days or less can
                      benefit from a quicker LMIA process.
                    </li>
                    <li>
                      <strong>Express Entry Support:</strong> LMIAs supporting a
                      worker's application for permanent residence under the
                      Express Entry system may be fast-tracked.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-9"
                  ref={sectionRefs.section9}
                >
                  <h2>
                    Advertising Requirements for Employers in Edmonton, Fort
                    McMurray, and Surrounding Areas
                  </h2>
                  <p>
                    To hire temporary foreign workers, local employers must meet
                    specific advertising requirements to demonstrate efforts to
                    hire Canadian workers first:
                  </p>
                  <ul>
                    <li>
                      <strong>Four-Week Job Advertising:</strong> Employers must
                      advertise the job across Canada for at least four weeks
                      before applying for an LMIA.
                    </li>
                    <li>
                      <strong>Multiple Recruitment Methods:</strong> Advertise
                      through at least two additional methods beyond the Canada
                      Job Bank, focusing on underrepresented groups like
                      Indigenous peoples and individuals with disabilities.
                    </li>
                    <li>
                      <strong>Language Limitations:</strong> Only English and
                      French can be job requirements unless another language is
                      essential for the position.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-10"
                  ref={sectionRefs.section10}
                >
                  <h2>Quebec-Specific Exemptions and LMIA Variations</h2>
                  <p>
                    Employers in Alberta hiring for positions in Quebec or with
                    ties to Quebec may encounter different requirements:
                  </p>
                  <ul>
                    <li>
                      <strong>Quebec Selection Certificate (CSQ):</strong>{" "}
                      Foreign workers holding a CSQ do not need an LMIA to work
                      in Quebec.
                    </li>
                    <li>
                      <strong>Facilitated LMIA List:</strong> High-demand
                      occupations in Quebec may qualify for a streamlined LMIA
                      process.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-11"
                  ref={sectionRefs.section11}
                >
                  <h2>
                    Rights and Protections for Temporary Foreign Workers in
                    Alberta
                  </h2>
                  <p>
                    TFWs in Alberta, including Edmonton and Fort McMurray, are
                    entitled to:
                  </p>
                  <ul>
                    <li>
                      <strong>Fair Compensation:</strong> Workers must receive
                      wages as outlined in their contracts, with no recruitment
                      fees charged.
                    </li>
                    <li>
                      <strong>Safe Workplaces:</strong> Employers must adhere to
                      health and safety standards.
                    </li>
                    <li>
                      <strong>Access to Health Care:</strong> Workers should be
                      covered by private insurance until provincial coverage is
                      available.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-12"
                  ref={sectionRefs.section12}
                >
                  <h2>
                    Pathways to Permanent Residency for TFWs in Edmonton and
                    Rural Alberta
                  </h2>
                  <p>
                    TFWs can explore pathways to permanent residency, including:
                  </p>
                  <ul>
                    <li>
                      <strong>Provincial Nominee Program (PNP)</strong>
                    </li>
                    <li>
                      <strong>Canadian Experience Class (CEC)</strong>
                    </li>
                    <li>
                      <strong>Federal Skilled Worker Program (FSWP)</strong>
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-13"
                  ref={sectionRefs.section13}
                >
                  <h2>
                    VisaPrime Consultancy: The Best in Edmonton for Immigration
                    Services
                  </h2>
                  <p>
                    As Edmonton's top immigration firm, VisaPrime Consultancy
                    has a decade of experience helping employers and workers
                    successfully navigate the TFWP and LMIA processes. Our deep
                    understanding of the local labor market, combined with
                    personalized service, makes us the go-to choice for
                    immigration services in Edmonton, Fort McMurray, Calgary &
                    rural areas.
                  </p>

                  <h3>Comprehensive Services Include:</h3>
                  <ol>
                    <li>
                      <strong>
                        Full-Service LMIA and Work Permit Support:
                      </strong>{" "}
                      We take care of the entire LMIA application and work
                      permit process, ensuring compliance with all government
                      requirements. Our team guides you through every step, from
                      submitting the application to approval.
                    </li>
                    <li>
                      <strong>Advertising and Recruitment:</strong> We manage
                      the advertising process to meet LMIA requirements,
                      including job postings on the Canada Job Bank and other
                      recruitment channels. We help you find the right candidate
                      while ensuring all regulations are met.
                    </li>
                    <li>
                      <strong>Pre-Landing Services for Candidates:</strong>
                      <ul>
                        <li>
                          <strong>
                            Orientation and Interview Preparation:
                          </strong>{" "}
                          We provide guidance and training to prepare your
                          chosen candidate for interviews and the Canadian job
                          market.
                        </li>
                        <li>
                          <strong>Document Assistance:</strong> Help with
                          gathering and organizing all necessary documents for
                          the candidate’s entry to Canada.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Landing and Settlement Services:</strong>
                      <ul>
                        <li>
                          <strong>Airport Pickup:</strong> Arranging
                          transportation from the airport to the candidate's
                          initial accommodation.
                        </li>
                        <li>
                          <strong>SIN and Bank Account Setup:</strong> Assisting
                          with Social Insurance Number registration and opening
                          a Canadian bank account, ensuring the candidate is
                          ready to start working as soon as possible.
                        </li>
                        <li>
                          <strong>
                            Orientation and Accommodation Assistance:
                          </strong>{" "}
                          We help the worker settle in by providing guidance on
                          housing options and local services.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Post-Arrival Integration:</strong>
                      <ul>
                        <li>
                          <strong>Onboarding Preparation:</strong> We make sure
                          your new employee is ready to start work on a specific
                          date, fully prepared to integrate into your team.
                        </li>
                        <li>
                          <strong>Ongoing Support:</strong> Continued support to
                          address any issues that may arise during the initial
                          employment period.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        Tailored Settlement Solutions for Employers in Alberta:
                      </strong>{" "}
                      We customize our services to the unique needs of your
                      industry and location, ensuring your Temporary Foreign
                      Worker is productive from day one.
                    </li>
                  </ol>
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

export default TemporaryForeignWorker;
