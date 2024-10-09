import React, { useRef } from "react";

const PermanentResidency = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null)
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
            <h1>Canada Immigration: Your Ultimate Guide to Moving to Canada</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/permanent-residence.jpg"
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
                      What Are Canada's Immigration Goals for 2025-2030?
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
                      How Does Immigration Support Canada’s Economy?
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
                      What Factors Contribute to High Public Support for
                      Immigration?
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
                      How Can Skilled Workers Immigrate to Canada?
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
                      How Can Business Professionals Immigrate to Canada?
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
                      What Are the Family Sponsorship Options in Canada?
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
                      What is the Best Pathway to Move to Canada for Skilled
                      Workers?
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
                      Which Pathway is Right for You?
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>What Are Canada's Immigration Goals for 2025-2030?</h2>
                  <p>
                    Canada aims to welcome 500,000 new immigrants every year by
                    2030. With one of the world's most open immigration systems,
                    Canada provides over 100 immigration pathways tailored to
                    skilled workers, business professionals, and families.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>How Does Immigration Support Canada’s Economy?</h2>
                  <p>Canada welcomes immigrants in three main classes:</p>
                  <ol>
                    <li>
                      <strong>Economic Class:</strong> Skilled workers are vital
                      to support economic growth, especially given Canada’s
                      aging population and low birth rate.
                    </li>
                    <li>
                      <strong>Family Class:</strong> Family sponsorship allows
                      citizens and permanent residents to reunite with loved
                      ones, strengthening the community.
                    </li>
                    <li>
                      <strong>Refugee and Humanitarian Class:</strong> Canada
                      has a moral obligation to provide refuge to those fleeing
                      persecution, showcasing its humanitarian leadership.
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>
                    What Factors Contribute to High Public Support for
                    Immigration?
                  </h2>
                  <p>
                    Around 80% of Canadians believe that immigration is
                    beneficial to the economy. Key factors include:
                  </p>
                  <ul>
                    <li>
                      <strong>Historical Context:</strong> Canada’s identity is
                      built on immigration, with most Canadians being
                      descendants of immigrants.
                    </li>
                    <li>
                      <strong>Geographical Advantages:</strong> Canada’s
                      controlled borders allow for effective screening of
                      potential immigrants.
                    </li>
                    <li>
                      <strong>Investment in Immigrants:</strong> The government
                      allocates billions for immigrant support services and
                      community integration.
                    </li>
                    <li>
                      <strong>Political Dynamics:</strong> High immigration
                      levels in major cities create a need for political support
                      from immigrant communities.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>How Can Skilled Workers Immigrate to Canada?</h2>
                  <p>
                    Canada plans to welcome over 400,000 immigrants annually,
                    with 60% being skilled workers. The primary pathways
                    include:
                  </p>

                  <h3>1. Express Entry:</h3>
                  <p>The main system for skilled workers, comprising:</p>
                  <ul>
                    <li>
                      <strong>Federal Skilled Worker Program (FSWP)</strong>
                    </li>
                    <li>
                      <strong>Canadian Experience Class (CEC)</strong>
                    </li>
                    <li>
                      <strong>Federal Skilled Trades Program (FSTP)</strong>
                    </li>
                  </ul>
                  <p>
                    Candidates create profiles and receive a{" "}
                    <strong>Comprehensive Ranking System (CRS)</strong> score.
                    Those with high scores are invited to apply for permanent
                    residence every two weeks.
                  </p>

                  <h3>2. Provincial Nominee Program (PNP):</h3>
                  <p>
                    Provinces can nominate individuals based on local labor
                    market needs. There are base streams (direct applications)
                    and enhanced streams (aligned with Express Entry).
                  </p>

                  <h3>3. Quebec Immigration:</h3>
                  <p>
                    Quebec operates its own immigration system with programs
                    like the <strong>Quebec Skilled Worker Program</strong> and{" "}
                    <strong>Quebec Experience Program</strong>.
                  </p>

                  <h3>4. Atlantic Immigration Program:</h3>
                  <p>
                    Designed for Atlantic Canada, this program allows employers
                    to sponsor foreign workers without needing a{" "}
                    <strong>Labour Market Impact Assessment (LMIA)</strong>.
                  </p>

                  <h3>5. Other Federal Programs:</h3>
                  <p>
                    Initiatives like the{" "}
                    <strong>Rural and Northern Immigration Pilot</strong>,{" "}
                    <strong>Agri-Food Immigration Pilot</strong>, and caregiver
                    programs cater to specific sectors.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-5"
                  ref={sectionRefs.section5}
                >
                  <h2>How Can Business Professionals Immigrate to Canada?</h2>
                  <p>
                    Business immigrants can utilize fast-track options such as
                    the <strong>Federal Start-Up Visa</strong> and the{" "}
                    <strong>Self-Employed Persons Program</strong>. Quebec also
                    has specialized business immigration pathways.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-6"
                  ref={sectionRefs.section6}
                >
                  <h2>What Are the Family Sponsorship Options in Canada?</h2>
                  <p>
                    The Canadian government prioritizes family reunification,
                    allowing citizens and permanent residents to sponsor:
                  </p>
                  <ul>
                    <li>
                      <strong>Spouses and Common-Law Partners</strong>
                    </li>
                    <li>
                      <strong>Dependent Children</strong>
                    </li>
                    <li>
                      <strong>Parents and Grandparents</strong> (via the{" "}
                      <strong>Super Visa</strong> program)
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-7"
                  ref={sectionRefs.section7}
                >
                  <h2>
                    What is the Best Pathway to Move to Canada for Skilled
                    Workers?
                  </h2>
                  <p>
                    Candidates are assessed based on education and work
                    experience, with points awarded for advanced degrees and
                    relevant experience.
                  </p>

                  <h3>1. Express Entry</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Skilled workers with work
                      experience in eligible occupations.
                    </li>
                    <li>
                      <strong>Description:</strong> This is the primary
                      immigration system for skilled workers. It consists of
                      three main programs:
                      <ul>
                        <li>
                          <strong>
                            Federal Skilled Worker Program (FSWP):
                          </strong>{" "}
                          For individuals with foreign work experience and
                          education.
                        </li>
                        <li>
                          <strong>Canadian Experience Class (CEC):</strong> For
                          those with work experience in Canada.
                        </li>
                        <li>
                          <strong>
                            Federal Skilled Trades Program (FSTP):
                          </strong>{" "}
                          For skilled tradespeople.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Process:</strong> Create an online profile,
                      receive a Comprehensive Ranking System (CRS) score, and be
                      invited to apply for permanent residence based on your
                      score.
                    </li>
                  </ul>

                  <h3>2. Provincial Nominee Program (PNP)</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Individuals who want to live in
                      a specific province and have skills in demand there.
                    </li>
                    <li>
                      <strong>Description:</strong> Each province and territory
                      (except Quebec) has its own PNP that allows them to
                      nominate immigrants based on local labor market needs.
                    </li>
                    <li>
                      <strong>Process:</strong> You can apply directly to a
                      province’s PNP or through an Express Entry-aligned stream,
                      which gives you an additional 600 CRS points if nominated.
                    </li>
                  </ul>

                  <h3>3. Quebec Immigration</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Individuals who wish to live in
                      Quebec and can meet the province’s specific criteria.
                    </li>
                    <li>
                      <strong>Description:</strong> Quebec has its own
                      immigration system and selects candidates based on its
                      unique criteria. Key programs include:
                      <ul>
                        <li>
                          <strong>Quebec Skilled Worker Program (QSWP):</strong>{" "}
                          For skilled workers.
                        </li>
                        <li>
                          <strong>Quebec Experience Program (PEQ):</strong> For
                          international students and temporary foreign workers
                          in Quebec.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Process:</strong> Applicants must apply for a
                      Quebec Selection Certificate (CSQ) before applying for
                      permanent residency.
                    </li>
                  </ul>

                  <h3>4. Atlantic Immigration Program (AIP)</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Individuals who want to live in
                      one of Canada’s Atlantic provinces (New Brunswick,
                      Newfoundland and Labrador, Nova Scotia, Prince Edward
                      Island).
                    </li>
                    <li>
                      <strong>Description:</strong> This program is
                      employer-driven and allows designated employers to hire
                      foreign workers.
                    </li>
                    <li>
                      <strong>Process:</strong> Obtain a job offer from a
                      designated employer in Atlantic Canada and work with a
                      designated organization to create a settlement plan.
                    </li>
                  </ul>

                  <h3>5. Family Class Sponsorship</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Canadian citizens or permanent
                      residents who want to bring family members to Canada.
                    </li>
                    <li>
                      <strong>Description:</strong> This allows you to sponsor
                      relatives such as spouses, common-law partners, children,
                      parents, and grandparents.
                    </li>
                    <li>
                      <strong>Process:</strong> You must demonstrate your
                      ability to support the sponsored individual financially
                      and sign an undertaking.
                    </li>
                  </ul>

                  <h3>6. Business Immigration</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Entrepreneurs and self-employed
                      individuals.
                    </li>
                    <li>
                      <strong>Description:</strong> Various options exist,
                      including the Start-Up Visa Program for innovative
                      entrepreneurs and the Self-Employed Persons Program for
                      those with relevant experience in cultural or athletic
                      activities.
                    </li>
                    <li>
                      <strong>Process:</strong> Each program has specific
                      requirements related to business plans, investment
                      amounts, and industry experience.
                    </li>
                  </ul>

                  <h3>7. Rural and Northern Immigration Pilot (RNIP)</h3>
                  <ul>
                    <li>
                      <strong>Best for:</strong> Those interested in living in
                      smaller, remote communities in Canada.
                    </li>
                    <li>
                      <strong>Description:</strong> This pilot program allows
                      smaller communities to attract foreign workers.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-8"
                  ref={sectionRefs.section8}
                >
                  <h2>Which Pathway is Right for You?</h2>
                  <p>To determine the best pathway:</p>
                  <ul>
                    <li>
                      <strong>Assess your skills and qualifications:</strong>{" "}
                      Consider your education, work experience, and language
                      proficiency.
                    </li>
                    <li>
                      <strong>Research provincial needs:</strong> If you’re open
                      to relocating, check which provinces have labor shortages
                      in your field.
                    </li>
                    <li>
                      <strong>Consider your family situation:</strong> If you
                      have family in Canada, family sponsorship may be a good
                      option.
                    </li>
                    <li>
                      <strong>Consult with an immigration expert:</strong>{" "}
                      Professional guidance can help you navigate your options
                      and increase your chances of success.
                    </li>
                  </ul>
                  <p>
                    Each pathway has its unique advantages, and the right choice
                    ultimately depends on your personal circumstances and goals.
                  </p>
                </section>
                <section
                  className="article-section"
                >
                  <h2>Get Started Today!</h2>
                  <p>To find out which pathway is right for you, fill out our <a className="article-navigation-link" href="https://book.squareup.com/appointments/khg9bqtfjxfazj/location/SK6MBAW63XB7V/services" target="_blank">assessment form. </a> This quick and easy form will help us understand your situation better and guide you toward the best immigration options available.</p>
                  <p>
                  <a className="article-navigation-link" href="https://thoughtleadership.rbc.com/a-growing-problem-how-to-align-canadas-immigration-with-the-future-economy/#:~:text=A%20steady%20stream%20of%20immigrants,be%20fueled%20entirely%20by%20immigration." target="_blank">A Growing Problem: How to align Canada’s immigration with the future economy - RBC Thought Leadership</a>
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

export default PermanentResidency;
