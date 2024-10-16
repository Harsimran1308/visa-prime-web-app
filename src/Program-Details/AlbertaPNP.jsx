import React, { useRef } from "react";
import ClientAssesmentForm from "../ClientAssesmentForm";

const AlbertaPNP = () => {
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
    section14: useRef(null),
    section15: useRef(null),
    section16: useRef(null),
    section17: useRef(null),
    section18: useRef(null),
    section19: useRef(null),
    section20: useRef(null),
    section21: useRef(null),
    section22: useRef(null),
    section23: useRef(null),
    section24: useRef(null),
    section25: useRef(null),
    section26: useRef(null),
    section27: useRef(null),
    section28: useRef(null),
    section29: useRef(null),
    section30: useRef(null),
    section31: useRef(null),
    section32: useRef(null),
    section33: useRef(null),
    section34: useRef(null),
    section35: useRef(null),
    section36: useRef(null),
    section37: useRef(null),
    section38: useRef(null),
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
              Alberta PNP (AAIP): Your Pathway to Permanent Residency in Alberta
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/pnp-immigration.jpg"
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
                      Introduction to the Alberta Advantage Immigration Program
                      (AAIP)
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
                      Immigration Streams under AAIP
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
                      Alberta Immigration Streams for Workers
                    </a>
                  </li>

                  <ul>
                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section4`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section4");
                        }}
                      >
                        Alberta Opportunity Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section5`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section5");
                          }}
                        >
                          Key Eligibility Requirements
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
                          What Qualifies as a Valid Work Permit?
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
                          Who Cannot Apply?
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
                          Occupation Criteria (Eligible and Ineligible
                          Occupations)
                        </a>
                      </li>
                    </ul>

                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section9`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section9");
                        }}
                      >
                        Alberta Express Entry Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section10`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section10");
                          }}
                        >
                          Application Process and Fee
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
                          Eligibility Requirements
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
                          Selection Criteria
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
                          Improving Chances for Nomination
                        </a>
                      </li>
                    </ul>

                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section14`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section14");
                        }}
                      >
                        Alberta Accelerated Tech Pathway
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section15`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section15");
                          }}
                        >
                          Application Process and Fee
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section16`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section16");
                          }}
                        >
                          Eligibility Requirements
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section17`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section17");
                          }}
                        >
                          Eligible Tech Occupations
                        </a>
                      </li>
                    </ul>

                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section18`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section18");
                        }}
                      >
                        Rural Renewal Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section19`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section19");
                          }}
                        >
                          Application Process and Fee
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section20`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section20");
                          }}
                        >
                          Eligibility Requirements
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section21`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section21");
                          }}
                        >
                          How to Get Started
                        </a>
                      </li>
                    </ul>
                  </ul>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section22`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section22");
                      }}
                    >
                      Alberta Immigration Streams for Entrepreneurs
                    </a>
                  </li>

                  <ul>
                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section23`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section23");
                        }}
                      >
                        Farm Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section24`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section24");
                          }}
                        >
                          Application Process and Fee
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section25`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section25");
                          }}
                        >
                          Eligibility Requirements
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section26`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section26");
                          }}
                        >
                          Improving Chances for Nomination
                        </a>
                      </li>
                    </ul>
                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section27`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section27");
                        }}
                      >
                        Graduate Entrepreneur Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section28`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section28");
                          }}
                        >
                          Application Process and Fee
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section29`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section29");
                          }}
                        >
                          Eligibility Requirements
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section30`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section30");
                          }}
                        >
                          Improving Chances for Nomination
                        </a>
                      </li>
                    </ul>

                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section31`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section31");
                        }}
                      >
                        Foreign Graduate Entrepreneur Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section32`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section32");
                          }}
                        >
                          Application Process and Fee
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section33`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section33");
                          }}
                        >
                          Eligibility Requirements
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section34`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section34");
                          }}
                        >
                          Benefits of the Stream
                        </a>
                      </li>
                    </ul>

                    <li className="navigation-points">
                      <a
                        className="article-navigation-link"
                        href={`#section35`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          scrollToSection("section35");
                        }}
                      >
                        Rural Entrepreneur Stream
                      </a>
                    </li>

                    <ul>
                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section36`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section36");
                          }}
                        >
                          Application Process and Fee
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section37`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section37");
                          }}
                        >
                          Eligibility Requirements
                        </a>
                      </li>

                      <li className="navigation-points">
                        <a
                          className="article-navigation-link"
                          href={`#section38`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection("section38");
                          }}
                        >
                          Improving Chances for Nomination
                        </a>
                      </li>
                    </ul>
                  </ul>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>
                    What is the Alberta Advantage Immigration Program (AAIP)?
                  </h2>
                  <p>
                    The AAIP, formerly known as the Alberta Immigrant Nominee
                    Program (AINP), is a pathway for skilled workers and
                    entrepreneurs to settle in Alberta, Canada. The program aims
                    to attract individuals with skills and work experience
                    needed by the province.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>
                    What are the main immigration streams available under the
                    AAIP?
                  </h2>
                  <p>
                    There are eight immigration streams available for
                    prospective immigrants. The streams are divided into worker
                    & entrepreneurs.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>Alberta Immigration Streams for Workers</h2>
                  <p>
                    There are eight immigration streams available for
                    prospective immigrants. The streams are divided into worker
                    & entrepreneurs.
                  </p>
                  <ol>
                    <li>
                      <a
                        className="article-navigation-link"
                        href="https://www.alberta.ca/aaip-alberta-opportunity-stream"
                        target="_blank"
                      >
                        <strong>Alberta Opportunity Stream</strong>
                      </a>
                      <p>
                        Designed for skilled workers currently employed in
                        eligible occupations in Alberta, this stream allows you
                        to apply for a provincial nomination to enhance your
                        immigration prospects.
                      </p>
                    </li>
                    <li>
                      <a
                        className="article-navigation-link"
                        href="https://www.alberta.ca/aaip-alberta-express-entry-stream"
                        target="_blank"
                      >
                        <strong>Alberta Express Entry Stream</strong>
                      </a>
                      <p>
                        This stream targets candidates in the federal Express
                        Entry (EE) system who possess a Comprehensive Ranking
                        System (CRS) score of at least 300. It’s ideal for those
                        already working in an eligible occupation in Alberta.
                      </p>
                    </li>
                    <li>
                      <a
                        className="article-navigation-link"
                        href="https://www.alberta.ca/aaip-alberta-express-entry-stream"
                        target="_blank"
                      >
                        <strong>Alberta Accelerated Tech Pathway</strong>
                      </a>
                      <p>
                        A part of the Express Entry framework, this pathway is
                        tailored for individuals employed in Alberta’s tech
                        industry or those who have received job offers in one of
                        the 38 designated tech occupations.
                      </p>
                    </li>
                    <li>
                      <a
                        className="article-navigation-link"
                        href="https://www.alberta.ca/aaip-rural-renewal-stream"
                        target="_blank"
                      >
                        <strong>Rural Renewal Stream</strong>
                      </a>
                      <p>
                        This stream is specifically for candidates with a job
                        offer from an Alberta employer to work in rural
                        communities. It supports the growth and sustainability
                        of rural areas by attracting skilled labor.
                      </p>
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>Alberta Opportunity Stream</h2>
                  <p>
                    The Alberta Opportunity Stream is designed for qualified
                    candidates who reside and work in Alberta, holding a valid
                    job offer from their employer for full-time employment in
                    the province. This stream facilitates a pathway to permanent
                    residency for individuals who meet specific criteria.
                  </p>
                  <h3 id="section-5" ref={sectionRefs.section5}>
                    Key Eligibility Requirements:
                  </h3>
                  <ul>
                    <li>
                      <strong>Employment Offer:</strong> Candidates must have a
                      genuine job offer from an Alberta employer to continue
                      working full-time.
                    </li>
                    <li>
                      <strong>Work Experience:</strong> Applicants need to
                      demonstrate relevant work experience in an eligible
                      occupation.
                    </li>
                    <li>
                      <strong>Language Proficiency:</strong> A minimum level of
                      language proficiency is required, typically measured by
                      Canadian Language Benchmark (CLB) scores.
                    </li>
                    <li>
                      <strong>Educational Background:</strong> Candidates must
                      meet specific educational qualifications, typically at
                      least a high school diploma equivalent.
                    </li>
                  </ul>
                  <p>
                    This stream provides an excellent opportunity for
                    individuals to solidify their careers and secure permanent
                    residency in Alberta.
                  </p>
                  <h3>
                    Valid Temporary Foreign Worker Permit or Residency Status
                  </h3>
                  <p>
                    When applying for the Alberta Opportunity Stream, it is
                    crucial to have a valid temporary foreign worker permit or
                    residency status. Please be aware that your work permit
                    cannot be in "maintained during processing" (implied status)
                    or "restoration status"—it must be a current and active
                    permit.
                  </p>
                  <h3 id="section-6" ref={sectionRefs.section6}>
                    What Qualifies as a Valid Work Permit?
                  </h3>
                  <p>
                    A valid work permit is defined by one of the following
                    conditions:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        Positive Labour Market Impact Assessment (LMIA):
                      </strong>{" "}
                      Your employer must obtain a positive LMIA to support your
                      application.
                    </li>
                    <li>
                      <strong>LMIA Exemptions:</strong> These exemptions may
                      include:
                      <ul>
                        <li>International Trade Agreements</li>
                        <li>Intra-Company Transfers</li>
                        <li>International Experience Canada</li>
                        <li>Mobilité Francophone</li>
                        <li>Religious Work (R205(d))</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Open Work Permits:</strong> This category includes
                      permits issued by IRCC to:
                      <ul>
                        <li>
                          Vulnerable workers at risk of or experiencing abuse
                          (under the Vulnerable Workers Open Work Permit
                          exemption).
                        </li>
                        <li>Family members of vulnerable workers.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Post-Graduation Work Permit (PGWP):</strong> Must
                      be held by graduates of publicly funded post-secondary
                      institutions in Alberta, with specific occupation,
                      education, and work experience requirements.
                    </li>
                    <li>
                      <strong>IRCC’s Open Work Permit Policies:</strong> This
                      encompasses recent temporary policies affecting PGWP for
                      graduates from Alberta institutions and other open work
                      permits related to Hong Kong graduates or under
                      Canada-Ukraine immigration measures.
                    </li>
                  </ul>
                  <p>
                    If your work permit does not fit any of these categories,
                    you are ineligible to apply.
                  </p>
                  <h3 id="section-7" ref={sectionRefs.section7}>
                    Who Cannot Apply?
                  </h3>
                  <p>
                    The following individuals are not eligible to apply or be
                    nominated under the Alberta Opportunity Stream:
                  </p>
                  <ul>
                    <li>
                      Refugee claimants or individuals involved in federal
                      appeals or removal processes. The AAIP does not intervene
                      in these situations.
                    </li>
                    <li>
                      Temporary residents living or working in provinces or
                      territories outside of Alberta.
                    </li>
                    <li>
                      Foreign nationals residing or working in Canada without
                      valid temporary resident status.
                    </li>
                  </ul>
                  <h3 id="section-8" ref={sectionRefs.section8}>
                    Occupation Criteria
                  </h3>
                  <p>
                    Your current occupation, defined as the job you hold at the
                    time of application submission and assessment, must be in an
                    eligible category. Occupation requirements apply to both
                    your work experience and job offer.
                  </p>
                  <h3>Eligible Occupations</h3>
                  <p>
                    Most occupations under{" "}
                    <a
                      className="article-navigation-link"
                      href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-national-occupation-code.html"
                      target="_blank"
                    ></a>
                    NOC TEER Categories 0, 1, 2, 3, 4, and 5 qualify for the
                    AAIP. To confirm your occupation's eligibility, you can use
                    the IRCC’s Find your NOC TEER Category tool or consult with
                    our team of Registered Canadian Immigration Consultants in
                    Edmonton and Fort McMurray.
                  </p>
                  <h3>Ineligible Occupations</h3>
                  <p>
                    If you work in any of the following occupations at the time
                    of application submission or assessment, you will be
                    ineligible for the Alberta Opportunity Stream:
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>NOC Code</th>
                        <th>TEER Category</th>
                        <th>Occupation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>00010</td>
                        <td>0</td>
                        <td>Legislators</td>
                      </tr>
                      <tr>
                        <td>40021</td>
                        <td>0</td>
                        <td>
                          School Principals and Administrators of Elementary and
                          Secondary Education
                        </td>
                      </tr>
                      <tr>
                        <td>40030</td>
                        <td>0</td>
                        <td>
                          Managers in Social, Community, and Correctional
                          Services
                        </td>
                      </tr>
                      <tr>
                        <td>40041</td>
                        <td>0</td>
                        <td>Fire Chiefs and Senior Firefighting Officers</td>
                      </tr>
                      <tr>
                        <td>60040*</td>
                        <td>0</td>
                        <td>
                          Escort Agency Managers, Massage Parlour Managers
                        </td>
                      </tr>
                      <tr>
                        <td>41100</td>
                        <td>1</td>
                        <td>Judges</td>
                      </tr>
                      <tr>
                        <td>41220</td>
                        <td>1</td>
                        <td>Secondary School Teachers</td>
                      </tr>
                      <tr>
                        <td>41221</td>
                        <td>1</td>
                        <td>Elementary School and Kindergarten Teachers</td>
                      </tr>
                      <tr>
                        <td>51111</td>
                        <td>1</td>
                        <td>Authors and Writers (Except Technical)</td>
                      </tr>
                      <tr>
                        <td>51122</td>
                        <td>1</td>
                        <td>Musicians and Singers</td>
                      </tr>
                      <tr>
                        <td>42200*</td>
                        <td>2</td>
                        <td>Justices of the Peace</td>
                      </tr>
                      <tr>
                        <td>42202*</td>
                        <td>2</td>
                        <td>
                          Early Childhood Educators without Alberta
                          Certification
                        </td>
                      </tr>
                      <tr>
                        <td>43100</td>
                        <td>3</td>
                        <td>
                          Elementary and Secondary School Teacher Assistants
                        </td>
                      </tr>
                      <tr>
                        <td>43109</td>
                        <td>3</td>
                        <td>Other Instructors</td>
                      </tr>
                      <tr>
                        <td>53121</td>
                        <td>3</td>
                        <td>Actors, Comedians, and Circus Performers</td>
                      </tr>
                      <tr>
                        <td>53122</td>
                        <td>3</td>
                        <td>Painters, Sculptors, and Other Visual Artists</td>
                      </tr>
                      <tr>
                        <td>53124</td>
                        <td>3</td>
                        <td>Artisans and Craftspersons</td>
                      </tr>
                      <tr>
                        <td>53200</td>
                        <td>3</td>
                        <td>Athletes</td>
                      </tr>
                      <tr>
                        <td>63101</td>
                        <td>3</td>
                        <td>Real Estate Agents and Salespersons</td>
                      </tr>
                      <tr>
                        <td>33100*</td>
                        <td>3</td>
                        <td>Dental Laboratory Assistants/Bench Workers</td>
                      </tr>
                      <tr>
                        <td>44100</td>
                        <td>4</td>
                        <td>Home Child Care Providers</td>
                      </tr>
                      <tr>
                        <td>44101</td>
                        <td>4</td>
                        <td>Home Support Workers and Caregivers</td>
                      </tr>
                      <tr>
                        <td>64321</td>
                        <td>4</td>
                        <td>Casino Occupations</td>
                      </tr>
                      <tr>
                        <td>55109</td>
                        <td>5</td>
                        <td>Other Performers</td>
                      </tr>
                      <tr>
                        <td>65109</td>
                        <td>5</td>
                        <td>Other Sales-Related Occupations</td>
                      </tr>
                      <tr>
                        <td>65211</td>
                        <td>5</td>
                        <td>
                          Operators and Attendants in Amusement, Recreation, and
                          Sport
                        </td>
                      </tr>
                      <tr>
                        <td>65229</td>
                        <td>5</td>
                        <td>Other Support Occupations in Personal Services</td>
                      </tr>
                      <tr>
                        <td>65329</td>
                        <td>5</td>
                        <td>Other Service Support Occupations</td>
                      </tr>
                      <tr>
                        <td>75200</td>
                        <td>5</td>
                        <td>Taxi and Limousine Drivers and Chauffeurs</td>
                      </tr>
                      <tr>
                        <td>85101</td>
                        <td>5</td>
                        <td>Harvesting Labourers</td>
                      </tr>
                      <tr>
                        <td>85102</td>
                        <td>5</td>
                        <td>Aquaculture and Marine Harvest Labourers</td>
                      </tr>
                      <tr>
                        <td>85104</td>
                        <td>5</td>
                        <td>Trappers and Hunters</td>
                      </tr>
                      <tr>
                        <td>85110</td>
                        <td>5</td>
                        <td>Mine Labourers</td>
                      </tr>
                      <tr>
                        <td>85121</td>
                        <td>5</td>
                        <td>Landscaping and Grounds Maintenance Labourers</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                <section
                  className="article-section"
                  id="section-9"
                  ref={sectionRefs.section9}
                >
                  <h2>Alberta Express Entry Stream</h2>
                  <p>
                    The Alberta Express Entry Stream is an immigration pathway
                    designed for individuals who have active profiles in the
                    federal Express Entry system. This stream allows Alberta to
                    nominate candidates who meet specific criteria that align
                    with the province's economic needs and priorities.
                  </p>

                  <h3 id="section-10" ref={sectionRefs.section10}>
                    What is the application fee for the Alberta Express Entry
                    Stream?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $840
                  </p>

                  <h3>How does the Alberta Express Entry Stream work?</h3>
                  <p>
                    Candidates with a profile in the Express Entry pool may
                    receive a Notification of Interest (NOI) from the Alberta
                    government.
                  </p>
                  <p>
                    If selected, candidates are invited to apply for a
                    provincial nomination by submitting their application
                    through the AAIP online portal.
                  </p>
                  <p>
                    Receiving a provincial nomination grants candidates an
                    additional 600 CRS points, significantly enhancing their
                    chances of receiving an invitation to apply for permanent
                    residence.
                  </p>

                  <h3 id="section-11" ref={sectionRefs.section11}>
                    What are the eligibility requirements for the Alberta
                    Express Entry Stream?
                  </h3>
                  <p>
                    To qualify for this stream, applicants must meet the
                    following criteria:
                  </p>
                  <ul>
                    <li>
                      <strong>Active Express Entry Profile:</strong> Candidates
                      must have an active profile in the federal Express Entry
                      system.
                    </li>
                    <li>
                      <strong>Expressed Intent to Immigrate:</strong> Must
                      indicate a genuine interest in immigrating to Alberta
                      permanently.
                    </li>
                    <li>
                      <strong>Employment Alignment:</strong> Must be working in
                      an occupation that supports Alberta’s economic growth and
                      diversification.
                    </li>
                    <li>
                      <strong>Minimum CRS Score:</strong> A minimum{" "}
                      <a
                        className="article-navigation-link"
                        href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp"
                        target="_blank"
                      >
                        {" "}
                        CRS score{" "}
                      </a>
                      of 300 is required.
                    </li>
                    <li>
                      <strong>Family Connection or Job Offer:</strong>{" "}
                      Candidates may also qualify based on having a family
                      member living in Alberta or a job offer from an Alberta
                      employer.
                    </li>
                  </ul>

                  <h3 id="section-12" ref={sectionRefs.section12}>
                    Who is selected for the Alberta Express Entry Stream?
                  </h3>
                  <p>
                    Candidates may receive an NOI based on various factors,
                    including:
                  </p>
                  <ul>
                    <li>Experience in an in-demand occupation.</li>
                    <li>
                      A job offer from an Alberta employer in key sectors, such
                      as healthcare or technology.
                    </li>
                    <li>An immediate family connection in Alberta.</li>
                  </ul>

                  <h3 id="section-13" ref={sectionRefs.section13}>
                    How can I improve my chances of being nominated under the
                    Alberta Express Entry Stream?
                  </h3>
                  <p>
                    To maximize your chances of receiving an NOI, consider the
                    following strategies:
                  </p>
                  <ul>
                    <li>Obtain a valid job offer from an Alberta employer.</li>
                    <li>
                      Enhance your language proficiency to meet or exceed the
                      minimum requirements.
                    </li>
                    <li>
                      Ensure your Express Entry profile is complete and
                      up-to-date.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-14"
                  ref={sectionRefs.section14}
                >
                  <h2>Alberta Accelerated Tech Pathway</h2>
                  <p>
                    The Alberta Accelerated Tech Pathway is an immigration
                    program tailored for tech professionals aiming to relocate
                    to Alberta. This pathway facilitates the immigration process
                    for individuals working in Alberta's technology sector or
                    those who have received a job offer from an eligible
                    employer in the tech industry.
                  </p>

                  <h3 id="section-15" ref={sectionRefs.section15}>
                    What is the application fee for the Alberta Accelerated Tech
                    Pathway?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $840
                  </p>

                  <h3>How does the Alberta Accelerated Tech Pathway work?</h3>
                  <ul>
                    <li>
                      Candidates must first have a profile in the Express Entry
                      system and express their interest in immigrating to
                      Alberta.
                    </li>
                    <li>
                      If eligible, candidates working full-time in an eligible
                      tech occupation in Alberta, or those with a job offer from
                      a qualifying tech employer, can submit an application
                      through the AAIP online portal.
                    </li>
                    <li>
                      Successful candidates will receive an invitation to apply
                      for provincial nomination from the AAIP.
                    </li>
                  </ul>

                  <h3 id="section-16" ref={sectionRefs.section16}>
                    What are the eligibility requirements for the Alberta
                    Accelerated Tech Pathway?
                  </h3>
                  <ul>
                    <li>
                      <strong>Express Entry Profile:</strong> Candidates must
                      have an active profile in the federal Express Entry pool.
                    </li>
                    <li>
                      <strong>Intent to Immigrate:</strong> Must express a
                      genuine intention to immigrate permanently to Alberta.
                    </li>
                    <li>
                      <strong>CRS Score:</strong> A minimum Comprehensive
                      Ranking System (CRS) score of 300 is required.
                    </li>
                    <li>
                      <strong>Employment Requirements:</strong> Candidates must
                      be currently employed in an eligible tech occupation in
                      Alberta or have a valid job offer from an Alberta employer
                      in the tech sector.
                    </li>
                  </ul>

                  <h3 id="section-17" ref={sectionRefs.section17}>
                    Who is eligible for the Accelerated Tech Pathway?
                  </h3>
                  <ul>
                    <li>
                      Technology roles in software development, information
                      technology, and other high-demand tech occupations
                      identified by the AAIP.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-18"
                  ref={sectionRefs.section18}
                >
                  <h2>Rural Renewal Stream</h2>
                  <p>
                    The Rural Renewal Stream is a program designed for
                    individuals who have secured a job offer from an employer
                    located in rural Alberta. This initiative aims to attract
                    skilled workers to support local{" "}
                    <a
                      className="article-navigation-link"
                      href="https://www.alberta.ca/aaip-rural-renewal-stream-community-designation"
                      target="_blank"
                    >
                      rural communities.
                    </a>
                  </p>

                  <h3 id="section-19" ref={sectionRefs.section19}>
                    What is the application fee for the Rural Renewal Stream?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $840
                  </p>

                  <h3>How does the Rural Renewal Stream process work?</h3>
                  <ul>
                    <li>
                      This program is community-driven, meaning candidates must
                      first gain support from a designated rural community in
                      Alberta.
                    </li>
                    <li>
                      Participating communities collaborate with local employers
                      to extend job offers to foreign nationals.
                    </li>
                    <li>
                      Once a candidate receives a letter of support from the
                      community, they can proceed to submit their application to
                      the Alberta Advantage Immigration Program (AAIP).
                    </li>
                  </ul>

                  <h3 id="section-20" ref={sectionRefs.section20}>
                    What are the eligibility requirements for the Rural Renewal
                    Stream?
                  </h3>
                  <ul>
                    <li>
                      <strong>Valid Job Offer:</strong> A full-time{" "}
                      <a
                        className="article-navigation-link"
                        href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment.html#s1"
                        target="_blank"
                      >
                        job offer
                      </a>{" "}
                      or employment contract from an Alberta employer in an
                      eligible occupation within a designated rural community.
                    </li>
                    <li>
                      <strong>Work Experience:</strong> At least 12 months of
                      full-time work experience in an eligible occupation within
                      the 18 months prior to applying. This experience can be
                      accumulated in Alberta, elsewhere in Canada, or abroad.
                    </li>
                    <li>
                      <strong>Language Proficiency:</strong> Candidates must
                      meet the{" "}
                      <a
                        className="article-navigation-link"
                        href="https://www.alberta.ca/aaip-alberta-opportunity-stream-eligibility"
                        target="_blank"
                      >
                        minimum language requirements
                      </a>{" "}
                      as specified by the AAIP.
                    </li>
                    <li>
                      <strong>Educational Qualifications:</strong> A minimum of
                      a high school education that is equivalent to Canadian
                      standards.
                    </li>
                    <li>
                      <strong>Financial Resources:</strong> Sufficient funds to
                      support themselves and any family members relocating to
                      the designated community.
                    </li>
                  </ul>

                  <h3 id="section-21" ref={sectionRefs.section21}>
                    How to get started with the Rural Renewal Stream?
                  </h3>
                  <p>
                    If you’re interested in applying for the Rural Renewal
                    Stream or need assistance with your application, reach out
                    to our team of Registered Canadian Immigration Consultants
                    in Edmonton & Fort McMurray for expert guidance.
                  </p>
                  <p>
                    Candidates with a job offer from an Alberta employer to work
                    in rural communities.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-22"
                  ref={sectionRefs.section22}
                >
                  <h2>Alberta Immigration Streams for Entrepreneurs</h2>
                  <p>
                    Alberta offers various immigration streams tailored for
                    entrepreneurs looking to establish or expand their
                    businesses in the province. Here’s an overview of the key
                    options available:
                  </p>
                  <ol>
                    <li>
                      <strong>
                        <a
                          className="article-navigation-link"
                          href="https://www.alberta.ca/aaip-farm-stream"
                          target="_blank"
                        >
                          Farm Stream
                        </a>
                      </strong>
                    </li>
                    <p>
                      This stream is designed for individuals interested in
                      operating a farming business in Alberta. It provides
                      pathways for those who wish to contribute to the
                      agricultural sector and rural economy.
                    </p>
                    <li>
                      <strong>
                        <a
                          className="article-navigation-link"
                          href="https://alberta.ca/aaip-graduate-entrepreneur-stream"
                          target="_blank"
                        >
                          Graduate Entrepreneur Stream
                        </a>
                      </strong>
                    </li>
                    <p>
                      Ideal for international graduates from designated
                      post-secondary institutions in Alberta, this stream
                      supports those looking to start a business in the province
                      after completing their education.
                    </p>
                    <li>
                      <strong>
                        <a
                          className="article-navigation-link"
                          href="https://www.alberta.ca/aaip-foreign-graduate-entrepreneur-stream"
                          target="_blank"
                        >
                          Foreign Graduate Entrepreneur Stream
                        </a>
                      </strong>
                    </li>
                    <p>
                      This option is available for foreign nationals who have
                      graduated from institutions outside Canada and wish to
                      launch a business in Alberta. It offers a pathway to
                      permanent residency through entrepreneurial ventures.
                    </p>
                    <li>
                      <strong>
                        <a
                          className="article-navigation-link"
                          href="https://www.alberta.ca/aaip-rural-entrepreneur-stream"
                          target="_blank"
                        >
                          Rural Entrepreneur Stream
                        </a>
                      </strong>
                    </li>
                    <p>
                      Tailored for entrepreneurs aiming to establish or acquire
                      a business in rural Alberta communities, this stream
                      encourages economic development and job creation in less
                      populated areas.
                    </p>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-23"
                  ref={sectionRefs.section23}
                >
                  <h2>Farm Stream</h2>
                  <p>
                    The Farm Stream is an immigration pathway under the Alberta
                    Advantage Immigration Program (AAIP) specifically designed
                    for individuals who wish to immigrate to Alberta to purchase
                    or start a farming business. This stream supports Alberta's
                    agricultural sector by attracting skilled farmers.
                  </p>

                  <h3 id="section-24" ref={sectionRefs.section24}>
                    What is the application fee for the Farm Stream?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $500
                  </p>

                  <h3>How does the Farm Stream work?</h3>
                  <ul>
                    <li>
                      Interested candidates must first submit a detailed
                      business plan to the Alberta government.
                    </li>
                    <li>
                      The Alberta government will review the plan in
                      consultation with Alberta Agriculture and Forestry to
                      ensure its feasibility and alignment with Alberta’s
                      agricultural needs.
                    </li>
                    <li>
                      Upon receiving a positive decision, candidates must gather
                      the necessary documents and complete both Alberta and
                      Immigration, Refugees and Citizenship Canada (IRCC)
                      application forms.
                    </li>
                  </ul>

                  <h3 id="section-25" ref={sectionRefs.section25}>
                    What are the eligibility requirements for the Farm Stream?
                  </h3>
                  <ul>
                    <li>
                      <strong>Farm Management Skills:</strong> Demonstrate
                      relevant skills in managing a farming operation.
                    </li>
                    <li>
                      <strong>Financial Resources:</strong> A minimum investment
                      of CAD $500,000 is required.
                    </li>
                    <li>
                      <strong>Feasibility of Business Plan:</strong> Submit a
                      viable business plan detailing the intended farming
                      operation.
                    </li>
                  </ul>

                  <h3>What are the benefits of the Farm Stream?</h3>
                  <ul>
                    <li>
                      Opportunity to contribute to Alberta’s agricultural
                      sector.
                    </li>
                    <li>
                      Potential for permanent residency in Canada for successful
                      applicants.
                    </li>
                    <li>
                      Ability to leverage Alberta's rich agricultural resources
                      and support systems.
                    </li>
                  </ul>

                  <h3 id="section-26" ref={sectionRefs.section26}>
                    How can I improve my chances of being nominated under the
                    Farm Stream?
                  </h3>
                  <ul>
                    <li>
                      Prepare a comprehensive and realistic business plan that
                      outlines your farming goals and strategies.
                    </li>
                    <li>
                      Ensure you have adequate financial backing to meet the
                      minimum investment requirement.
                    </li>
                    <li>
                      Demonstrate your farming experience and skills clearly in
                      your application.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-27"
                  ref={sectionRefs.section27}
                >
                  <h2>Graduate Entrepreneur Stream</h2>
                  <p>
                    The Graduate Entrepreneur Stream is a unique immigration
                    pathway designed for international graduates from Alberta’s
                    approved post-secondary institutions who wish to establish
                    or operate a business in the province. This stream aims to
                    harness the entrepreneurial spirit of graduates and support
                    Alberta's economic growth.
                  </p>

                  <h3 id="section-28" ref={sectionRefs.section28}>
                    What is the application fee for the Graduate Entrepreneur
                    Stream?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $3,500
                  </p>

                  <h3>How does the Graduate Entrepreneur Stream work?</h3>
                  <ul>
                    <li>
                      Candidates must submit an Expression of Interest (EOI)
                      through the AAIP online portal.
                    </li>
                    <li>
                      Within 30 days, candidates will receive an EOI score;
                      those with the highest scores will be invited to submit a
                      Business Application.
                    </li>
                    <li>
                      Candidates must complete the Business Application within
                      90 days of receiving the invitation and provide all
                      required documentation.
                    </li>
                  </ul>

                  <h3 id="section-29" ref={sectionRefs.section29}>
                    What are the eligibility requirements for the Graduate
                    Entrepreneur Stream?
                  </h3>
                  <ul>
                    <li>
                      <strong>Education:</strong> Have completed at least two
                      years of full-time education at an approved Alberta
                      post-secondary institution.
                    </li>
                    <li>
                      <strong>Work Permit:</strong> Hold a valid Post-Graduate
                      Work Permit (PGWP) at the time of application.
                    </li>
                    <li>
                      <strong>Language Proficiency:</strong> Achieve a minimum
                      Canadian Language Benchmark (CLB) level of 7.
                    </li>
                    <li>
                      <strong>Business Ownership:</strong> Establish a new
                      business or operate an existing business with at least 34%
                      ownership.
                    </li>
                  </ul>

                  <h3>
                    What are the benefits of the Graduate Entrepreneur Stream?
                  </h3>
                  <ul>
                    <li>
                      A pathway to permanent residency for international
                      graduates with entrepreneurial ambitions.
                    </li>
                    <li>
                      Access to Alberta's vibrant business ecosystem and support
                      networks.
                    </li>
                    <li>
                      Opportunity to contribute to the local economy and create
                      job opportunities.
                    </li>
                  </ul>

                  <h3 id="section-30" ref={sectionRefs.section30}>
                    How can I improve my chances of being nominated under the
                    Graduate Entrepreneur Stream?
                  </h3>
                  <ul>
                    <li>
                      Develop a strong, detailed business plan that clearly
                      outlines your business model, target market, and financial
                      projections.
                    </li>
                    <li>
                      Ensure your business aligns with Alberta's economic
                      priorities and community needs.
                    </li>
                    <li>
                      Demonstrate your commitment and capability to run a
                      successful business in Alberta.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-31"
                  ref={sectionRefs.section31}
                >
                  <h2>Foreign Graduate Entrepreneur Stream</h2>
                  <p>
                    The Foreign Graduate Entrepreneur Stream is an immigration
                    pathway tailored for international graduates who have
                    completed their studies outside Canada and wish to launch a
                    startup business in Alberta. This stream aims to attract
                    talented entrepreneurs who can contribute to Alberta’s
                    economic growth and innovation.
                  </p>

                  <h3 id="section-32" ref={sectionRefs.section32}>
                    What is the application fee for the Foreign Graduate
                    Entrepreneur Stream?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $3,500
                  </p>

                  <h3>
                    How does the Foreign Graduate Entrepreneur Stream work?
                  </h3>
                  <ul>
                    <li>
                      Interested candidates must collaborate with an approved
                      designated agency to receive a letter of recommendation,
                      confirming their eligibility.
                    </li>
                    <li>
                      Candidates submit their Expression of Interest (EOI)
                      through the AAIP portal, along with the letter of
                      recommendation.
                    </li>
                    <li>
                      The designated agency will provide a written report
                      assessing the proposed business plan, which must also be
                      included in the application.
                    </li>
                  </ul>

                  <h3 id="section-33" ref={sectionRefs.section33}>
                    What are the eligibility requirements for the Foreign
                    Graduate Entrepreneur Stream?
                  </h3>
                  <ul>
                    <li>
                      <strong>Work Experience:</strong> Have a minimum of six
                      months of full-time work experience managing and/or owning
                      a business.
                    </li>
                    <li>
                      <strong>Business Plan:</strong> Submit a detailed business
                      plan with projected financials.
                    </li>
                    <li>
                      <strong>Education:</strong> Hold a post-secondary degree
                      from a recognized foreign institution, completed within
                      the last ten years, and provide an Educational Credential
                      Assessment (ECA).
                    </li>
                    <li>
                      <strong>Language Proficiency:</strong> Achieve a minimum
                      Canadian Language Benchmark (CLB) level of 5.
                    </li>
                    <li>
                      <strong>Ownership:</strong> Have at least 34% ownership of
                      the business if located in an urban center, or at least
                      51% ownership if outside Calgary or Edmonton.
                    </li>
                    <li>
                      <strong>Investment:</strong> Make a minimum investment of
                      CAD $100,000 for an urban center, or CAD $50,000 for a
                      regional area.
                    </li>
                  </ul>

                  <h3 id="section-34" ref={sectionRefs.section34}>
                    What are the benefits of the Foreign Graduate Entrepreneur
                    Stream?
                  </h3>
                  <ul>
                    <li>
                      A direct route to permanent residency for international
                      graduates aiming to start a business in Alberta.
                    </li>
                    <li>
                      Access to Alberta's dynamic business landscape and
                      networking opportunities.
                    </li>
                    <li>
                      The chance to make a significant impact on local
                      communities through job creation and economic development.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-35"
                  ref={sectionRefs.section35}
                >
                  <h2>Rural Entrepreneur Stream</h2>
                  <p>
                    The Rural Entrepreneur Stream is designed for aspiring
                    business owners who wish to establish or expand their
                    businesses in rural communities across Alberta. This stream
                    aims to attract entrepreneurs who can drive economic growth
                    and create job opportunities in less populated areas.
                  </p>

                  <h3 id="section-36"
                  ref={sectionRefs.section36}>
                    What is the application fee for the Rural Entrepreneur
                    Stream?
                  </h3>
                  <p>
                    <strong>Application Fee:</strong> CAD $3,500
                  </p>

                  <h3>How does the Rural Entrepreneur Stream work?</h3>
                  <ul>
                    <li>
                      Entrepreneurs must first connect with a participating
                      rural community and conduct an exploratory visit to assess
                      business opportunities.
                    </li>
                    <li>
                      After the visit, candidates are required to submit a
                      comprehensive business proposal that outlines their
                      business idea and its potential benefits to the community.
                    </li>
                    <li>
                      If the community supports the proposal, a Community
                      Support Letter is issued, which the entrepreneur includes
                      in their application to the AAIP.
                    </li>
                  </ul>

                  <h3  id="section-37"
                  ref={sectionRefs.section37}>
                    What are the eligibility requirements for the Rural
                    Entrepreneur Stream?
                  </h3>
                  <ul>
                    <li>
                      <strong>Experience:</strong> Have a minimum of three years
                      as an active business owner/manager or four years as a
                      senior manager in the past ten years.
                    </li>
                    <li>
                      <strong>Education:</strong> Hold a minimum educational
                      qualification equivalent to the Canadian high school
                      standard, validated by an Educational Credential
                      Assessment (ECA).
                    </li>
                    <li>
                      <strong>Language Proficiency:</strong> Achieve a minimum
                      Canadian Language Benchmark (CLB) level of 4 for each
                      English language skill or Niveaux de compétence
                      linguistique canadiens (NCLC) of 4 for each French
                      language skill.
                    </li>
                    <li>
                      <strong>Net Worth:</strong> Maintain a minimum net worth
                      of CAD $300,000.
                    </li>
                    <li>
                      <strong>Investment:</strong> Make a minimum investment of
                      CAD $200,000 from personal or partner equity.
                    </li>
                  </ul>

                  <h3>
                    What are the benefits of the Rural Entrepreneur Stream?
                  </h3>
                  <ul>
                    <li>
                      Access to Alberta’s vibrant rural business environment,
                      providing opportunities for growth and community
                      engagement.
                    </li>
                    <li>
                      Support from local communities eager to welcome and assist
                      new businesses.
                    </li>
                    <li>
                      A pathway to permanent residency for entrepreneurs
                      committed to contributing to rural Alberta’s economy.
                    </li>
                  </ul>

                  <h3 id="section-38"
                  ref={sectionRefs.section38}>
                    How can I improve my chances of being nominated under the
                    Rural Entrepreneur Stream?
                  </h3>
                  <p>To enhance your chances of success, consider the following strategies:</p>
                  <ul>
                    <li>
                      Prepare a detailed business proposal that highlights the
                      economic and social benefits of your business to the
                      community.
                    </li>
                    <li>
                      Build relationships with local community leaders and
                      stakeholders to garner support for your venture.
                    </li>
                    <li>
                      Ensure that you meet all eligibility requirements and
                      demonstrate your ability to thrive in Alberta’s rural
                      business landscape.
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

export default AlbertaPNP;
