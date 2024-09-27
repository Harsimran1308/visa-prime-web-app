import React, { useRef } from "react";

const Eapr = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
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
            <h1>Electronic Application for Permanent Residence (eAPR)</h1>
            <p style={{ color: "var(--bs-primary)" }}>
              The electronic Application for Permanent Residence (eAPR) is the
              final step in the Express Entry process. It involves submitting
              key documents that validate the information provided in your
              initial Express Entry profile.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-text">
                <p>
                  <h2>
                    <strong>
                      <span>Key Questions</span>
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
                      What documents are required for the eAPR?
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
                      How much does the eAPR cost?
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
                      Need assistance with your eAPR?
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
                      Find out if you qualify for Express Entry
                    </a>
                  </li>
                </ul>
                <section
                  className="article-section"
                  id="section1"
                  ref={sectionRefs.section1}
                >
                  <h2>What Documents Are Needed for the eAPR?</h2>
                  <p>
                    The documents required for your eAPR support the
                    qualifications claimed in your Express Entry profile and
                    prove you are not inadmissible to Canada. If you're unable
                    to provide a specific document, submit a letter of
                    explanation detailing why it’s unavailable and your efforts
                    to obtain it, along with potential alternatives.
                  </p>
                  <p>
                    All documents must be submitted in either English or French.
                    For documents in other languages, certified translations
                    must be included.
                  </p>
                  <p>
                    Hiring a Canadian immigration lawyer can help ensure that
                    your documents meet immigration standards and are clearly
                    presented. If you need expert guidance, contact us for a
                    free consultation.
                  </p>

                  <ol>
                    <li>
                      <strong>Identity and Civil Status Documents:</strong>
                      <ul>
                        <li>
                          Passports: Provide a copy of the biographical page of
                          your passport or travel document for yourself and all
                          accompanying family members.
                        </li>
                        <li>
                          Birth Certificates: Submit birth certificates for all
                          applicants. If your country doesn’t issue birth
                          certificates, you can provide a document confirming
                          your birth details and at least one parent's name.
                          Include a letter of explanation if the official birth
                          certificate isn’t available.
                        </li>
                        <li>
                          Adoption Certificates: Required for adopted children.
                        </li>
                        <li>
                          Marital Status Documents:
                          <ul>
                            <li>Single: No documents typically required.</li>
                            <li>Married: Provide a marriage certificate.</li>
                            <li>
                              Common-law/Conjugal: Show evidence of the
                              relationship.
                            </li>
                            <li>
                              Divorced: Submit a divorce certificate for each
                              divorce.
                            </li>
                            <li>
                              Widowed: Provide both the marriage and death
                              certificates.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Language Test Results:</strong> Include a copy of
                      your language test results if required. Even if the
                      Immigration, Refugees and Citizenship Canada (IRCC) has
                      access to them, providing a copy with your application can
                      prevent potential delays. Include your spouse's test
                      results if applicable.
                    </li>
                    <li>
                      <strong>Work Experience Documents:</strong>
                      <ul>
                        <li>Reference Letters</li>
                        <li>Employment Contracts</li>
                        <li>Paystubs (if available)</li>
                        <li>
                          For Canadian work experience, submit:
                          <ul>
                            <li>T4 Tax Slips</li>
                            <li>Notice of Assessment</li>
                            <li>Work Permits</li>
                          </ul>
                        </li>
                        <li>
                          Your reference letters should detail your job title,
                          salary, hours worked, job duties, and employment
                          dates. These are crucial for verifying the National
                          Occupational Classification (NOC) codes.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Education Documents:</strong> Submit copies of:
                      <ul>
                        <li>
                          Certificates, Diplomas, or Degrees for each
                          post-secondary program you’ve claimed points for.
                        </li>
                        <li>
                          Transcripts for both secondary and post-secondary
                          studies.
                        </li>
                        <li>
                          Educational Credential Assessment (ECA) report (if
                          applicable).
                        </li>
                        <li>Proof of Canadian education (if applicable).</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Proof of Funds:</strong> Provide proof of funds to
                      show that you have enough money to support your move to
                      Canada. The required amount depends on your family size.
                      If you have a valid job offer, this requirement is waived.
                      <p>
                        Settlement Funds (as of May 2024):
                        <ul>
                          <li>1 person: $14,690</li>
                          <li>2 people: $18,288</li>
                          <li>3 people: $22,483</li>
                          <li>4 people: $27,297</li>
                          <li>5 people: $30,690</li>
                          <li>6 people: $34,917</li>
                          <li>7 people: $38,875</li>
                          <li>
                            For each additional family member, add $3,958.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <strong>Medical Examination Confirmation:</strong> Include
                      electronic copies of your medical exam results.
                    </li>
                    <li>
                      <strong>Police Clearance Certificates:</strong> Submit
                      police certificates for yourself and family members from
                      every country lived in for six months or more since age
                      18. These certificates are only valid for 12 months, so
                      apply for them after receiving your Invitation to Apply
                      (ITA). If they aren’t available in time, provide proof
                      that you’ve requested them.
                    </li>
                    <li>
                      <strong>Photos:</strong> Submit two digital photos for
                      each applicant, spouse, and dependent child.
                    </li>
                    <li>
                      <strong>Government Processing Fees:</strong>
                      <ul>
                        <li>Principal Applicant: $1,325</li>
                        <li>Spouse: $1,325</li>
                        <li>Dependent Child: $225/child</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Provincial Nomination:</strong> If you claimed
                      points for a provincial nomination, include a copy of the
                      nomination document.
                    </li>
                    <li>
                      <strong>Proof of Relative in Canada:</strong> If you’ve
                      claimed points for having a relative in Canada, provide:
                      <ul>
                        <li>
                          Proof of your relative’s Canadian citizenship or
                          permanent resident status.
                        </li>
                        <li>
                          Proof your relative resides in Canada, like utility
                          bills, tax documents, or bank statements.
                        </li>
                        <li>
                          Proof of your familial relationship with the relative.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Job Offer in Canada:</strong> While a job offer
                      isn’t required, if you claimed points for one, submit
                      proof of its validity by including:
                      <ul>
                        <li>A letter from the employer offering the job.</li>
                        <li>
                          Labour Market Impact Assessment (LMIA) number, if
                          applicable.
                        </li>
                        <li>
                          The letter should include your start date, job title,
                          responsibilities, hours, and salary, and be on company
                          letterhead with the employer's signature.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section2"
                  ref={sectionRefs.section2}
                >
                  <h2>How Long Does It Take to Process an eAPR?</h2>
                  <p>
                    IRCC aims to process 80% of eAPR applications within six
                    months of submission. Once approved, applicants receive
                    visas to travel to Canada and complete their permanent
                    residency process at a Port of Entry.
                  </p>
                  <p>
                    After becoming a Canadian permanent resident, it’s essential
                    to stay informed about your PR requirements to ensure you
                    remain eligible for renewing your permanent residence card
                    or applying for Canadian citizenship.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section3"
                  ref={sectionRefs.section3}
                >
                  <h2>Can My Family Be Included in an eAPR Application?</h2>
                  <p>
                    Eligible family members, including your spouse and dependent
                    children under 22, can be included in your eAPR. Children
                    over 22 who are financially dependent due to a mental or
                    physical condition may also qualify.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section4"
                  ref={sectionRefs.section4}
                >
                  <h2>What Are the eAPR Costs?</h2>
                  <p>
                    The cost of submitting an eAPR depends on family size,
                    countries lived in, and document translation needs.
                  </p>
                  <ul>
                    <li>
                      <strong>Principal Applicant:</strong> $1,325
                    </li>
                    <li>
                      <strong>Spouse:</strong> $1,325
                    </li>
                    <li>
                      <strong>Dependent Child:</strong> $225 per child
                    </li>
                    <li>
                      <strong>Biometrics:</strong> $85 per person
                    </li>
                    <li>
                      <strong>Medical Exam Fees:</strong> Average $450 per adult
                      and $250 per child
                    </li>
                    <li>
                      <strong>Police Certificates:</strong> Around $100 per
                      country
                    </li>
                  </ul>
                  <p>
                    For the latest processing times, check IRCC’s tool for
                    real-time updates.
                  </p>
                </section>
                <section className="article-section">
                  <h2>Need Help with Your eAPR?</h2>
                  <p>
                    Navigating the eAPR process can be challenging. If you need
                    assistance, get in touch with our team of immigration
                    experts for a <strong><a href="" target="_blank" className="article-navigation-link">free consultation.</a></strong>
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

export default Eapr;
