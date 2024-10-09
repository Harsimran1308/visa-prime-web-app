import React, { useRef } from "react";

const Citizenship = () => {
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
              Everything You Need to Know About Obtaining Canadian Citizenship:
              A Step-by-Step Guide
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/citizenship.jpg"
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
                      Introduction
                    </a>
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
                         Overview of Canadian Citizenship Benefits
                        </a>
                      </li>
                    </ul>
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
                      What Are the Requirements for Becoming a Canadian Citizen in 2024?
                    </a>
                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section3`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section3");
                          }}
                        >
                         Hold Permanent Residency
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
                         Residency Duration
                        </a>
                      </li>
                    </ul>
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
                     Expert Citizenship Consultants in Edmonton, Alberta
                    </a>
                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section6`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section6");
                          }}
                        >
                         Expert Document Preparation
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
                         Timely Submission of Documents
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
                         Consistent Application Tracking and Updates
                        </a>
                      </li>
                    </ul>
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
                    Understanding Permanent Resident Status
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
                    Time Lived in Canada
                    </a>
                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section11`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section11");
                          }}
                        >
                         How to Accurately Count Your Time in Canada
                        </a>
                      </li>
                    </ul>
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
                    Filing Income Taxes
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>
                    <span>Expert Citizenship Consultants in Edmonton, Alberta</span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                    Becoming a Canadian citizen offers numerous advantages, including the opportunity to live permanently in one of the world’s most prosperous nations, engage in the democratic process, and hold one of the most powerful passports globally. Canada aims to welcome over 430,000 new permanent residents each year, with many of these newcomers aspiring to become proud Canadian citizens. Upon completing this journey, they take an oath of loyalty, affirming their commitment to the rights and responsibilities that come with citizenship.
                    </span>
                  </p>
                  <p className="NormalWeb">
                    <span>
                    This page is designed to guide you through the Canadian citizenship process, providing essential information and support to help you achieve your goal of becoming a Canadian citizen.
                    </span>
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>
                    <span>What Are the Requirements for Becoming a Canadian Citizen in 2024 ?</span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                    If you’re considering making Edmonton or Alberta your permanent home and are interested in obtaining Canadian citizenship, you must meet several essential requirements. Here’s what you need to know:
                    </span>
                  </p>
                  <ol>
                    <li  id="section-3"
                  ref={sectionRefs.section3}>
                        <strong>Hold Permanent Residency</strong>
                        <p>
                        To apply for Canadian citizenship, you must be a permanent resident of Canada. This status demonstrates your long-term commitment to living in the country.
                        </p>
                    </li>
                    <li  id="section-4"
                  ref={sectionRefs.section4}>
                        <strong>Residency Duration</strong>
                        <p>
                        You must have physically resided in Canada for a minimum of 3 out of the last 5 years before submitting your citizenship application. This residency requirement ensures that you have established a genuine connection to Canadian society,
                        </p>
                    </li>

                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-5"
                  ref={sectionRefs.section5}
                >
                  <h2>
                    <span>Expert Citizenship Consultants in Edmonton, Alberta</span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                    Navigating the complexities of Canadian immigration law can be daunting. With
frequently changing requirements, overwhelming paperwork, and strict deadlines, many
applicants find the process confusing. While some individuals may consider a DIY
approach, hiring a certified immigration consultant is often the most efficient route to
take. Here’s why choosing VisaPrime Consultancy for your citizenship application is a
smart decision that can save you time and money:
                    </span>
                  </p>
                  <ol>
                    <li  id="section-6"
                  ref={sectionRefs.section6}>
                        <strong>Expert Document Preparation</strong>
                        <p>
                        Our team specializes in accurately filling out application forms that include a wide range
of questions. Incomplete or incorrectly filled forms can lead to significant delays in
processing. Providing truthful information is crucial, as misrepresentation—intentional or
accidental—can jeopardize your application. At VisaPrime Consultancy, we ensure
that all your documentation is meticulously prepared to meet Canadian immigration
standards.
                        </p>
                    </li>
                    <li  id="section-7"
                  ref={sectionRefs.section7}>
                        <strong>Timely Submission of Documents</strong>
                        <p>
                        Canadian immigration authorities often require additional documentation to proceed with
your application. Meeting these deadlines is critical, as you may only have 30 days—or
even less—to submit the necessary information. Our consultants guarantee that all your
documents are submitted promptly, preventing any unnecessary delays in your
citizenship application process.
                        </p>
                    </li>
                    <li  id="section-8"
                  ref={sectionRefs.section8}>
                        <strong>Consistent Application Tracking and Updates</strong>
                        <p>
                        We prioritize keeping you informed about the status of your application. The immigration
process can be stressful, and we understand how vital it is to stay updated. Our
commitment ensures that you remain involved at every stage of your application,
reducing uncertainty and anxiety.
                        </p>
                    </li>

                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-9"
                  ref={sectionRefs.section9}
                >
                  <h2>
                    <span>Understanding Permanent Resident Status</span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                    Once you achieve <strong>permanent resident (PR) </strong>status and receive your PR card, the time begins to count toward your citizenship eligibility. Before filing your application, it’s essential to confirm that your PR status is valid and that you meet the residency requirement. Remember, the entire citizenship application process can take years, and a single mistake can significantly extend this timeline.
                    </span>
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-10"
                  ref={sectionRefs.section10}
                >
                  <h2>
                    <span>Time Lived in Canada</span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                    To qualify for Canadian citizenship, you must have physically resided in Canada for <strong>at least 3 years (1,095 days) </strong>before signing your application. The Canadian Citizenship and Immigration Department encourages applicants to apply with more than 3 years of residency to account for any discrepancies in your calculation. You can also include time spent in Canada as a temporary resident.
                    </span>
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-11"
                  ref={sectionRefs.section11}
                >
                  <h2>
                    <span>How to Accurately Count Your Time in Canada</span>
                  </h2>
                  <p className="NormalWeb">
                    <ul>
                        <li>
                            <strong>Track your physical presence:</strong>Count only the days you were physically present in Canada; international trips and vacations do not count.
                        </li>
                        <li>
                            <strong>Maintain records: </strong>Keep detailed records of your days spent in Canada versus days outside for greater accuracy.
                        </li>
                    </ul>
                  </p>
                  <p><strong>Pro Tip:</strong>Utilize stamps in your passport, flight tickets, or a travel journal to help calculate your physical presence in Canada accurately.</p>
                </section>
                <section
                  className="article-section"
                  id="section-12"
                  ref={sectionRefs.section12}
                >
                  <h2>
                    <span>Filing Income Taxes</span>
                  </h2>
                  <p className="NormalWeb">
                  Filing taxes is another essential requirement for Canadian citizenship. You must file taxes in Canada for at least <strong>3 years</strong> before your citizenship application date. You should receive either a <strong>T4 or T5 tax assessment form </strong> from your employer by January or February following the end of the tax year.
                  </p>
                  
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citizenship;
