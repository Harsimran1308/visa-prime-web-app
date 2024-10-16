import React, { useRef } from "react";
import ClientAssesmentForm from "../ClientAssesmentForm";

const VisitorPermit = () => {
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
            <h1>Visitor Visa for Canada: Your Comprehensive Guide</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/visitor-visa.jpg"
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
                      What Is a Visitor Visa for Canada?
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
                      What Is a Temporary Resident Permit (TRP)?
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
                      Does a Visitor Visa Ensure Entry into Canada?
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
                      Why Does Canada Deny Travelers Who Have a DUI?
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
                      Reasons for Being Inadmissible
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
                      What Types of Visitor Visas Are Available in Canada?
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
                      How Long Can I Stay in Canada with a Visitor Visa?
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
                      Can I Extend My Visitor Visa?
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
                      What Is a Visitor Record in Canada?
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
                      What Are the Fees for Visitor Visa Extensions?
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
                      How Long Does It Take to Process a Visitor Visa Extension?
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
                      Why Would You Want to Extend Your Visitor Visa in Canada?
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
                      How Can I Apply for a Visitor Visa Extension?
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section14`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section14");
                      }}
                    >
                      What If My Visitor Status Expires While I’m in Canada?
                    </a>
                  </li>

                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section15`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section15");
                      }}
                    >
                      Can I Get Assistance with My Visa Application or
                      Extension?
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>What Is a Visitor Visa for Canada?</h2>
                  <p>
                    A visitor visa, also known as a temporary resident visa
                    (TRV), is an official document issued by Canadian
                    immigration authorities that permits you to enter Canada.
                    This visa is affixed as a counterfoil in your passport,
                    which you must present upon arrival at a Canadian border
                    entry point.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>What Is a Temporary Resident Permit (TRP)?</h2>
                  <p>
                    A Temporary Resident Permit (TRP) may be issued to
                    individuals who would otherwise be inadmissible to Canada
                    due to health or criminal issues. It allows them to enter or
                    remain in Canada when compelling circumstances justify the
                    request.
                  </p>
                  <p>
                    A TRP grants legal entry to Canada for a specified period
                    and can be applied for at any time. Unlike criminal
                    rehabilitation, a TRP does not have to adhere to a specific
                    time frame related to the completion of a sentence. This
                    means that an individual may receive a TRP even while still
                    serving part of their sentence, depending on the
                    circumstances.
                  </p>
                  <p>
                    TRPs are typically issued for the duration of your stay in
                    Canada, with a maximum validity of up to three years, and
                    can be extended from within Canada.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>Does a Visitor Visa Ensure Entry into Canada?</h2>
                  <p>
                    Not necessarily. While a visitor visa allows you to travel
                    to Canada, the ultimate decision regarding entry is made by
                    an officer from the Canadian Border Services Agency (CBSA)
                    at the port of entry. They must determine that you have the
                    intent and means to leave Canada after your visit. Entry
                    denial is uncommon but can occur if requirements are not
                    satisfied.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>Why Does Canada Deny Travelers Who Have a DUI?</h2>
                  <p>
                    To protect the safety and well-being of Canada and its
                    citizens, travelers with a past charge or conviction, such
                    as a Driving Under the Influence (DUI) offense, may be
                    deemed criminally inadmissible to the country. For U.S.
                    travelers, even minor offenses in some states, including a
                    DUI, can create admissibility issues at the Canadian border.
                  </p>
                  <p>
                    As of 2018, a DUI can now be prosecuted by up to 10 years in
                    prison, classifying it as a serious crime in Canada.
                    Criminal inadmissibility is assessed based on the
                    equivalency of a foreign criminal offense to Canadian law.
                    Therefore, understanding how a DUI or any criminal offense
                    committed in the United States translates under Canadian law
                    is crucial. Given that DUIs are considered serious
                    criminality in Canada, individuals with past offenses should
                    be cautious and address potential admissibility issues prior
                    to traveling.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-5"
                  ref={sectionRefs.section5}
                >
                  <h2>Reasons for Being Inadmissible</h2>
                  <p>
                    Foreign nationals may be deemed inadmissible to Canada for
                    various reasons, including:
                  </p>
                  <ul>
                    <li>
                      <strong>Having a criminal record</strong>
                    </li>
                    <li>
                      <strong>Being diagnosed with a contagious disease</strong>
                    </li>
                    <li>
                      <strong>
                        Violating the Immigration and Refugee Protection Act
                        (IRPA)
                      </strong>
                    </li>
                    <li>
                      <strong>Being deemed a security risk</strong>
                    </li>
                    <li>
                      <strong>
                        Misrepresenting information to gain entry or maintain
                        immigration status
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Failing to demonstrate financial self-sufficiency during
                        your stay in Canada
                      </strong>
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-6"
                  ref={sectionRefs.section6}
                >
                  <h2>What Types of Visitor Visas Are Available in Canada?</h2>
                  <p>Visitor visas are primarily categorized into two types:</p>
                  <ul>
                    <li>
                      <strong>Single Entry Visa:</strong> This allows a one-time
                      entry into Canada. After leaving, a new visa application
                      will be required for re-entry.
                    </li>
                    <li>
                      <strong>Multiple Entry Visa:</strong> This visa allows
                      multiple entries into Canada over its validity period,
                      which can be up to 10 years. However, it is limited by the
                      expiration date of your passport, typically expiring one
                      month before your passport's validity ends.
                    </li>
                  </ul>
                </section>

                <section
                  className="article-section"
                  id="section-7"
                  ref={sectionRefs.section7}
                >
                  <h2>How Long Can I Stay in Canada with a Visitor Visa?</h2>
                  <p>
                    Most visitors are permitted to stay in Canada for a maximum
                    of 6 months. However, parents applying under the Super Visa
                    program can remain in Canada for up to 5 years, which is an
                    increase from the previous limit of 2 years.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-8"
                  ref={sectionRefs.section8}
                >
                  <h2>Can I Extend My Visitor Visa?</h2>
                  <p>
                    Yes, extending your visitor visa is possible. A CBSA officer
                    may grant you permission to stay for a shorter or longer
                    period than 6 months. If no specific date is mentioned, you
                    must leave Canada by the expiration date of your visa or
                    within 6 months—whichever comes first.
                  </p>
                  <p>
                    To extend your visitor visa, you should submit your
                    extension application at least 30 days prior to your visa's
                    expiration date.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-9"
                  ref={sectionRefs.section9}
                >
                  <h2>What Is a Visitor Record in Canada?</h2>
                  <p>
                    A Visitor Record is an official document that allows you to
                    extend your stay in Canada. It specifies the new date by
                    which you are required to leave the country.
                  </p>
                </section>

                <section
                  className="article-section"
                  id="section-10"
                  ref={sectionRefs.section10}
                >
                  <h2>What Are the Fees for Visitor Visa Extensions?</h2>
                  <p>
                    To extend your stay and apply for a Visitor Record, the
                    application fee typically starts at $100.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-11"
                  ref={sectionRefs.section11}
                >
                  <h2>
                    How Long Does It Take to Process a Visitor Visa Extension?
                  </h2>
                  <p>
                    As of now, the average processing time for visitor visa
                    extensions is approximately 204 days, so it's important to
                    plan ahead.
                  </p>

                  <h3>
                    Why Would You Want to Extend Your Visitor Visa in Canada?
                  </h3>
                  <p>
                    You might consider extending your visitor visa for several
                    reasons, including:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        You wish to prolong your stay as a visitor.
                      </strong>
                    </li>
                    <li>
                      <strong>You need more time on your study permit.</strong>
                    </li>
                    <li>
                      <strong>You need to extend your work permit.</strong>
                    </li>
                  </ul>
                  <p>
                    In all cases, ensure to apply for a Visitor Record 30 days
                    before your current status expires.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-12"
                  ref={sectionRefs.section12}
                >
                  <h2>How Can I Apply for a Visitor Visa Extension?</h2>
                  <p>
                    The most efficient method to apply is electronically. Follow
                    these steps:
                  </p>
                  <ol>
                    <li>
                      <strong>Gather Documents:</strong> Ensure you have a
                      document scanner or camera to create electronic files, as
                      well as a valid credit or debit card.
                    </li>
                    <li>
                      <strong>Review Guidelines:</strong> Familiarize yourself
                      with the application process by reading the full guide
                      provided by IRCC.
                    </li>
                    <li>
                      <strong>Create an IRCC Account:</strong> Register on the
                      IRCC website and follow the application instructions.
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-13"
                  ref={sectionRefs.section13}
                >
                  <h2>
                    What If My Visitor Status Expires While I’m in Canada?
                  </h2>
                  <p>
                    If your visitor status expires while you are still in
                    Canada, this is considered a violation of temporary
                    residence rules. Ideally, you should exit Canada before your
                    status ends.
                  </p>
                  <p>
                    If it has been less than 90 days since your status expired,
                    you may be eligible to apply for restoration. In this case,
                    you must provide{" "}
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-14"
                  ref={sectionRefs.section14}
                >
                  <h2>
                    Can I Get Assistance with My Visa Application or Extension?
                  </h2>
                  <p>
                    Absolutely! At VisaPrime Consultancy, we offer expert
                    assistance with your visa application and can help you
                    extend your stay in Canada, whether as a temporary visitor,
                    student, or worker. Our team of regulated immigration
                    consultants is dedicated to providing comprehensive visa
                    services.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-15"
                  ref={sectionRefs.section15}
                >
                  <h2>Contact Us Today for a Consultation!</h2>
                  <p>
                    To begin your journey, fill out our initial assessment form
                    so we can understand your specific situation.
                  </p>
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

export default VisitorPermit;
