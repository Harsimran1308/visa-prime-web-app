import React, { useRef } from "react";

const StudyPermit = () => {
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
            <h1>
              How to Study in Canada: Your Complete Guide for International
              Students in Edmonton, Alberta
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/study-permit.jpg"
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
                      How to Study in Canada
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
                      What Are the Benefits of Studying in Canada?
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
                      About Canada’s Universities and Colleges
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
                      New Changes to Study Permit Allocations
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
                      Study Pathways to Permanent Residence
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
                      Frequently Asked Questions
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
                      Contact VisaPrime Consultancy for Assistance
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>How to Study in Canada</h2>
                  <p>
                    If you're considering studying in Canada and potentially
                    transitioning to permanent residence, follow these essential
                    steps:
                  </p>

                  <h3>Step 1 - Select a Program</h3>
                  <p>
                    Conduct thorough research to find the education program that
                    suits your interests and career goals in Canada.
                  </p>

                  <h3>
                    Step 2 - Apply to a Canadian Designated Learning Institution
                  </h3>
                  <p>
                    Once you have identified your preferred program, submit your
                    application to a designated learning institution (DLI) in
                    Alberta.
                  </p>

                  <h3>Step 3 - Apply for a Study Permit</h3>
                  <p>
                    After receiving a letter of acceptance and a provincial
                    attestation letter from Alberta, VisaPrime Consultancy can
                    assist you in submitting your application for a study permit
                    to the Government of Canada. This document is crucial for
                    legally residing in Canada as a student.
                  </p>

                  <h3>Step 4 (Optional) - Explore Your Immigration Options</h3>
                  <p>
                    Upon completing your studies, VisaPrime Consultancy can
                    guide you in exploring options to stay in Canada, gain
                    valuable work experience, and pursue permanent residence.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>What Are the Benefits of Studying in Canada?</h2>
                  <p>
                    Canada has become a top destination for international
                    students, attracting over 800,000 individuals from around
                    the globe. Here are some compelling reasons to study in
                    Canada:
                  </p>
                  <ul>
                    <li>
                      <strong>High-Quality Education:</strong> Canadian
                      institutions are renowned for their academic excellence.
                    </li>
                    <li>
                      <strong>Work Opportunities:</strong> International
                      students can work during their studies and may qualify for
                      post-graduation work permits.
                    </li>
                    <li>
                      <strong>Bilingual Environment:</strong> Opportunities to
                      study in English and/or French.
                    </li>
                    <li>
                      <strong>Safety and Security:</strong> Canada is considered
                      one of the safest countries in the world.
                    </li>
                    <li>
                      <strong>Multicultural Society:</strong> A welcoming
                      environment for students from diverse backgrounds.
                    </li>
                    <li>
                      <strong>Affordable Living Costs:</strong> Compared to
                      other popular study destinations, Canada offers lower
                      tuition fees and living costs.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>About Canada’s Universities and Colleges</h2>
                  <p>
                    Canada boasts over 1,500 universities, colleges, and
                    educational institutions recognized by{" "}
                    <strong>
                      Immigration, Refugees and Citizenship Canada (IRCC)
                    </strong>{" "}
                    as designated learning institutions (DLIs). This ensures
                    that international students can find quality programs that
                    meet their needs.
                  </p>
                  <p>
                    While Ontario and Quebec host the largest number of DLIs,
                    Alberta also offers excellent educational opportunities.
                    Canadian universities and colleges are known for their
                    commitment to providing high-quality education, with
                    programs designed to help students transition into the
                    workforce.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>New Changes to Study Permit Allocations</h2>
                  <p>
                    In 2024, the <strong>IRCC</strong> will limit the number of
                    study permits issued to 360,000. This cap will be
                    distributed among provinces and territories based on their
                    student populations. However, master’s and doctoral students
                    are exempt from this cap, along with elementary and
                    secondary education levels.
                  </p>
                  <p>
                    In 2025, the cap will increase to 437,000, including
                    master's and PhD students. These measures aim to ensure
                    sustainable levels of international students and improve
                    housing availability for them.
                  </p>
                  <p>
                    Starting January 22, 2024, all study permit applications
                    will require a provincial attestation letter, which
                    VisaPrime Consultancy can help you obtain.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-5"
                  ref={sectionRefs.section5}
                >
                  <h2>Study Pathways to Permanent Residence (PR)</h2>
                  <p>
                    Completing your post-secondary education in Canada can
                    significantly enhance your chances of obtaining permanent
                    residence. Here are some pathways available to international
                    students:
                  </p>

                  <h3>1. Express Entry</h3>
                  <p>
                    The Express Entry system manages applications for economic
                    class immigration. International students with Canadian
                    education and work experience may qualify for the{" "}
                    <strong>Canadian Experience Class (CEC)</strong> program.
                  </p>

                  <h3>2. Provincial Nominee Program (PNP)</h3>
                  <p>
                    Alberta's PNP stream is designed to meet local economic
                    needs and offers specific pathways for former international
                    students.
                  </p>

                  <h3>3. Other Federal Programs</h3>
                </section>
                <section
                  className="article-section"
                  id="section-6"
                  ref={sectionRefs.section6}
                >
                  <h2>Frequently Asked Questions</h2>
                  <ol>
                    <li>
                      <strong>Why should I study in Canada?</strong> Canada
                      offers high-quality education at an affordable cost within
                      a safe and multicultural society.
                    </li>
                    <li>
                      <strong>
                        How many international students are in Canada?
                      </strong>{" "}
                      Over 800,000 international students currently study in
                      Canada.
                    </li>
                    <li>
                      <strong>Can I work while studying in Canada?</strong> Yes,
                      international students can work on or off campus during
                      their studies.
                    </li>
                    <li>
                      <strong>Can I bring my family to Canada?</strong> Yes, you
                      can apply to bring your spouse or common-law partner and
                      dependent children while studying in Canada.
                    </li>
                    <li>
                      <strong>
                        How can I stay in Canada after my studies?
                      </strong>{" "}
                      You may be eligible for a Post-Graduation Work Permit
                      (PGWP), allowing you to gain work experience in Canada.
                    </li>
                    <li>
                      <strong>
                        What is a Post-Graduation Work Permit (PGWP)?
                      </strong>{" "}
                      A PGWP allows international students to work in Canada
                      after completing their studies for a duration based on
                      their program length.
                    </li>
                    <li>
                      <strong>
                        Do I need a language test to study in Canada?
                      </strong>{" "}
                      Language proficiency in English or French may be required
                      for admission to certain programs.
                    </li>
                    <li>
                      <strong>
                        How long does it take to get a study permit?
                      </strong>{" "}
                      Processing times vary; applicants should apply well in
                      advance of their intended study start date.
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-7"
                  ref={sectionRefs.section7}
                >
                  <h2>Contact VisaPrime Consultancy for Assistance</h2>
                  <p>
                    Do you need help navigating the process of studying in
                    Canada? <strong>VisaPrime Consultancy </strong> has the
                    expertise to guide you through every step. Contact us today
                    for a free consultation!
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

export default StudyPermit;
