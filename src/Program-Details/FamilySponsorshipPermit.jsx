import React, { useRef } from "react";
import ClientAssesmentForm from "../ClientAssesmentForm";

const FamilySponsorshipPermit = () => {
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
              Everything You Need to Know About Family Sponsorship in Canada: A
              Complete Guide to Bringing Your Loved Ones Home
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="img/family-sponsorship.jpg"
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
                      What is Family Sponsorship?
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
                      Overview of Canadian Family Sponsorship Program
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
                      Who Can Be a Sponsor?
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
                      Types of Spousal or Common-Law Sponsorship Applications
                    </a>
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
                          Inland Sponsorship
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
                          Outland Sponsorship
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="navigation-points">
                    <a
                      className="article-navigation-link"
                      href={`#section6`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection("section7");
                      }}
                    >
                      Sponsorship Income Requirements
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
                      What is a Sponsorship Undertaking?
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
                      Steps to Apply for Family Sponsorship
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
                      Sponsorship Categories
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
                          Sponsor Your Spouse, Partner, or Common-Law Partner
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
                          Sponsor Your Dependent Children
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
                          Sponsor Your Parents or Grandparents
                        </a>
                      </li>
                    </ul>
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
                      Minimum Necessary Income (MNI) Requirements for the
                      Parents and Grandparents Program Sponsorship in Canada
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
                      FAQs About Family Sponsorship
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
                      Contact Us for Family Sponsorship Assistance
                    </a>
                  </li>
                </ul>

                <section
                  className="article-section"
                  id="section-1"
                  ref={sectionRefs.section1}
                >
                  <h2>What is Family Sponsorship?</h2>
                  <p>
                    <strong>Family Sponsorship</strong>, also known as the{" "}
                    <strong>Family Class Sponsorship Program</strong>, is a
                    Canadian immigration program designed to help Canadian
                    citizens, permanent residents, and Registered Indians
                    reunite with their close family members. Through this
                    program, individuals in these categories can sponsor their
                    eligible family members to come to Canada and gain permanent
                    residency.
                  </p>
                  <p>
                    Simply put, if you are a Canadian citizen, permanent
                    resident, or a Registered Indian, you can sponsor your
                    spouse, common-law partner, conjugal partner, or dependent
                    children to live with you in Canada. The program prioritizes{" "}
                    <strong>family reunification</strong>, one of the core
                    pillars of Canada's immigration system.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-2"
                  ref={sectionRefs.section2}
                >
                  <h2>Overview of Canadian Family Sponsorship Program</h2>
                  <p>
                    <strong>Family reunification</strong> is one of the key
                    pillars of Canada's immigration system. Since World War II,
                    Canada has prioritized bringing families together,
                    strengthening its economy, and offering humanitarian and
                    compassionate immigration pathways. Under Canada's{" "}
                    <strong>Immigration Levels Plan</strong>, family sponsorship
                    is the second-largest category of immigrants welcomed each
                    year.
                  </p>
                  <p>
                    The{" "}
                    <strong>
                      Department of Immigration, Refugees, and Citizenship
                      Canada (IRCC)
                    </strong>{" "}
                    manages the family sponsorship program by establishing
                    guidelines, processing applications, and issuing permanent
                    and temporary resident visas to eligible family members.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-3"
                  ref={sectionRefs.section3}
                >
                  <h2>Who Can Be a Sponsor?</h2>
                  <p>
                    To sponsor a family member, you must meet the following
                    criteria:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        Be a Canadian citizen or permanent resident.
                      </strong>
                    </li>
                    <li>
                      <strong>Be at least 18 years old.</strong>
                    </li>
                    <li>
                      <strong>
                        Have the financial capacity to support the sponsored
                        person for several years.
                      </strong>
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-4"
                  ref={sectionRefs.section4}
                >
                  <h2>
                    Types of Spousal or Common-Law Sponsorship Applications
                  </h2>
                  <p>
                    When sponsoring a spouse or common-law partner, there are
                    two main application pathways:
                  </p>

                  <h3 id="section-5" ref={sectionRefs.section5}>
                    Inland Sponsorship
                  </h3>
                  <p>
                    This option is for sponsors whose spouse or partner is
                    already residing in Canada. Key features of inland
                    sponsorship include:
                  </p>
                  <ul>
                    <li>
                      <strong>Living in Canada:</strong> The sponsored person
                      can remain in Canada while the permanent residence (PR)
                      application is processed.
                    </li>
                    <li>
                      <strong>Open Work Permit:</strong> The sponsored spouse or
                      partner can apply for an open work permit, allowing them
                      to work for any employer in Canada during the application
                      process.
                    </li>
                  </ul>
                  <p>
                    If the sponsored person is not already in Canada, they may
                    first apply for a Temporary Resident Visa (TRV) to enter the
                    country before starting the inland sponsorship process.
                  </p>

                  <h3 id="section-6" ref={sectionRefs.section6}>
                    Outland Sponsorship
                  </h3>
                  <p>
                    Outland sponsorship is available for individuals living
                    outside of Canada. In this case:
                  </p>
                  <ul>
                    <li>
                      <strong>Application Processed Abroad:</strong> The
                      sponsorship application is processed through a Canadian
                      Embassy or Consulate in the sponsored person’s country of
                      residence.
                    </li>
                    <li>
                      <strong>Waiting Outside Canada:</strong> The sponsored
                      person usually remains outside Canada while waiting for
                      the PR application to be approved, though they may visit
                      Canada temporarily during this period, depending on their
                      visa status.
                    </li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-7"
                  ref={sectionRefs.section7}
                >
                  <h2>Sponsorship Income Requirements</h2>
                  <p>
                    Sponsors must commit to supporting the basic needs of the
                    sponsored family member, including food, shelter, clothing,
                    and non-covered health services. You may also need to meet
                    the Low Income Cut-off (LICO) if you’re sponsoring:
                  </p>
                  <ul>
                    <li>
                      <strong>
                        A spouse or partner with dependent children
                      </strong>
                    </li>
                    <li>
                      <strong>
                        A dependent child with their own dependents
                      </strong>
                    </li>
                    <li>
                      <strong>A parent or grandparent</strong>
                    </li>
                  </ul>
                  <p>
                    In Quebec, you must meet additional provincial requirements
                    and demonstrate financial ability as assessed by Quebec's
                    immigration ministry.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-8"
                  ref={sectionRefs.section8}
                >
                  <h2>What is a Sponsorship Undertaking?</h2>
                  <p>
                    A sponsorship undertaking is a legal commitment you make to
                    provide financial support for the family member you are
                    sponsoring. This remains in effect even if the sponsored
                    family member becomes a Canadian citizen or your
                    relationship changes (e.g., separation, divorce). The
                    duration of the undertaking varies depending on the
                    relationship and the age of the sponsored person.
                  </p>
                  <p>Duration of Sponsorship Undertaking (outside Quebec):</p>
                  <ul>
                    <li> Spouse/Common-law/Conjugal Partner: 3 years</li>
                    <li>
                      {" "}
                      Dependent Child (under 22 years): 10 years or until age
                      25, whichever comes first
                    </li>
                    <li> Dependent Child (22 years or older): 3 years</li>
                    <li> Parents/Grandparents: 20 years</li>
                    <li> Orphans and Other Relatives: 10 years</li>
                  </ul>
                </section>
                <section
                  className="article-section"
                  id="section-9"
                  ref={sectionRefs.section9}
                >
                  <h2>Steps to Apply for Family Sponsorship</h2>
                  <ol>
                    <li>
                      <strong>Eligibility Check:</strong> Ensure you and the
                      relatives you wish to sponsor meet all eligibility
                      criteria.
                    </li>
                    <li>
                      <strong>Submit Application:</strong> Complete and submit
                      the sponsorship application and your relative’s permanent
                      residence application together.
                    </li>
                    <li>
                      <strong>Pay Fees:</strong> The application fee must be
                      paid during submission.
                    </li>
                    <li>
                      <strong>Submit to IRCC:</strong> Ensure the application is
                      sent to the correct address, which can be found in the
                      official sponsorship guide on the government website.
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-10"
                  ref={sectionRefs.section10}
                >
                  <h2>Sponsorship Categories</h2>

                  <h3 id="section-11" ref={sectionRefs.section11}>
                    Sponsor Your Spouse, Partner, or Common-Law Partner
                  </h3>
                  <p>
                    As a Canadian citizen or permanent resident, you can
                    sponsor:
                  </p>
                  <ul>
                    <li>
                      <strong>Your spouse</strong> (legally married),
                    </li>
                    <li>
                      <strong>Your common-law partner</strong> (cohabitating for
                      at least 12 months),
                    </li>
                    <li>
                      <strong>Your conjugal partner</strong> (in a committed
                      relationship for at least 12 months but unable to
                      cohabit).
                    </li>
                  </ul>
                  <h4>Eligibility requirements:</h4>
                  <ul>
                    <li>
                      Be at least 18 years old and a Canadian citizen or
                      permanent resident,
                    </li>
                    <li>
                      Prove you can provide for your spouse or partner's basic
                      needs,
                    </li>
                    <li>
                      Demonstrate the authenticity of your relationship with
                      supporting documentation.
                    </li>
                  </ul>

                  <h3 id="section-12" ref={sectionRefs.section12}>
                    Sponsor Your Dependent Children
                  </h3>
                  <p>
                    You can sponsor your biological or adopted children, who
                    must meet the definition of a dependent:
                  </p>
                  <ul>
                    <li>
                      Under 22 years of age, unmarried, and not in a common-law
                      relationship,
                    </li>
                    <li>
                      Over 22 years old if financially dependent due to physical
                      or mental conditions.
                    </li>
                  </ul>

                  <h3 id="section-13" ref={sectionRefs.section11}>
                    Sponsor Your Parents or Grandparents
                  </h3>
                  <p>
                    The Parent and Grandparent Sponsorship Program (PGP) allows
                    Canadian citizens and permanent residents to bring their
                    parents and grandparents to Canada. Sponsors must:
                  </p>
                  <ul>
                    <li>Be at least 18 years old,</li>
                    <li>
                      Meet the Minimum Necessary Income (MNI) requirement for
                      their family size,
                    </li>
                    <li>
                      Commit to financially supporting the sponsored individual
                      for 20 years.
                    </li>
                  </ul>
                  <p>
                    Alternatively, the <strong>Super Visa Program</strong>{" "}
                    provides a long-term, multiple-entry visa for parents and
                    grandparents.
                  </p>
                </section>
                <section
                  className="article-section"
                  id="section-14"
                  ref={sectionRefs.section14}
                >
                  <h2>
                    Minimum Necessary Income (MNI) Requirements for the Parents
                    and Grandparents Program Sponsorship in Canada
                  </h2>
                  <p>
                    When sponsoring parents or grandparents to immigrate to
                    Canada, sponsors must meet specific Minimum Necessary Income
                    (MNI) requirements. This ensures that sponsors can
                    financially support their relatives and manage the
                    responsibilities associated with their care, especially for
                    elderly family members.
                  </p>

                  <h3>MNI for Parents and Grandparents Program (2024)</h3>
                  <p>
                    In 2024, sponsors must demonstrate that their income exceeds
                    the MNI for three consecutive taxation years, as outlined by
                    Immigration, Refugees and Citizenship Canada (IRCC). The
                    following table provides the MNI figures for individuals
                    living in Canada (excluding Quebec):
                  </p>

                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "50%",
                      border: "1px solid black",
                      borderRadius: "8px", // Adding border-radius for the table
                      overflow: "hidden", // This ensures that border radius applies to the entire table
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            border: "1px solid black",
                            padding: "8px",
                            backgroundColor: "#f2f2f2", // Adding background color for the header
                            borderRadius: "0px", // Resetting border radius in cells
                          }}
                        >
                          Size of Family Unit
                        </th>
                        <th
                          style={{
                            border: "1px solid black",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            borderRadius: "0px",
                          }}
                        >
                          MNI 2024
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          2 persons
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $44,530
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          3 persons
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $54,743
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          4 persons
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $66,466
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          5 persons
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $75,384
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          6 persons
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $85,020
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          7 persons
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $94,568
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          Each additional person
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          $9,636
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                <section
                  className="article-section"
                  id="section-15"
                  ref={sectionRefs.section15}
                >
                  <h2>FAQs About Family Sponsorship</h2>
                  <ol>
                    <li>
                      <strong>
                        Can I sponsor a sibling under the Family Sponsorship
                        program?
                      </strong>
                      <p>
                        Yes, under specific circumstances such as when you have
                        no other immediate family members to sponsor.
                      </p>
                    </li>
                    <li>
                      <strong>
                        What are the financial obligations of a sponsor?
                      </strong>
                      <p>
                        Sponsors must meet financial requirements and provide
                        for the sponsored family member’s basic needs, including
                        housing, food, and healthcare.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Can I sponsor my spouse if they are living outside
                        Canada?
                      </strong>
                      <p>
                        Yes, you can apply for outland spousal sponsorship from
                        abroad.
                      </p>
                    </li>
                    <li>
                      <strong>
                        How long does the sponsorship process take?
                      </strong>
                      <p>
                        The processing time varies based on the application
                        type. On average, spousal applications take about 12
                        months, while parents and grandparents can take 20-24
                        months.
                      </p>
                    </li>
                    <li>
                      <strong>
                        What happens if my application is refused?
                      </strong>
                      <p>
                        If your sponsorship application is refused, you may have
                        the option to appeal the decision or reapply, depending
                        on the reasons for the refusal. It's best to consult an
                        immigration lawyer for guidance.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Can I apply for Family Sponsorship if I have a criminal
                        record?
                      </strong>
                      <p>
                        A criminal record may affect your eligibility to sponsor
                        someone. However, it depends on the nature of the crime
                        and how long ago it occurred. Consult with an
                        immigration consultant or lawyer for specific advice.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Can I apply for Family Sponsorship if I am receiving
                        social assistance?
                      </strong>
                      <p>
                        Generally, you must demonstrate that you have the
                        financial capacity to support the sponsored individual.
                        Receiving social assistance could impact your ability to
                        meet the financial requirements.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Do I need to provide proof of relationship?
                      </strong>
                      <p>
                        Yes, you will need to submit documentation to prove the
                        authenticity of your relationship with the sponsored
                        family member, such as photographs, correspondence, and
                        joint financial commitments.
                      </p>
                    </li>
                    <li>
                      <strong>
                        What if my sponsored family member is in Canada
                        illegally?
                      </strong>
                      <p>
                        If your family member is in Canada without legal status,
                        you may still be able to sponsor them, but specific
                        rules and conditions apply. Consult with an immigration
                        professional for tailored advice.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Are there any age restrictions for sponsored family
                        members?
                      </strong>
                      <p>
                        Yes, there are specific age requirements depending on
                        the relationship. For instance, dependent children must
                        be under 22 years old and unmarried, while parents and
                        grandparents can be of any age.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Can I withdraw my sponsorship application?
                      </strong>
                      <p>
                        Yes, you can withdraw your application at any time
                        before a decision is made. However, you may need to
                        submit a written request to IRCC to formally withdraw.
                      </p>
                    </li>
                    <li>
                      <strong>
                        What is the difference between a conjugal partner and a
                        common-law partner?
                      </strong>
                      <p>
                        A common-law partner is someone you have lived with for
                        at least 12 consecutive months. A conjugal partner is
                        someone you have a committed relationship with but
                        cannot live together due to legal or immigration
                        reasons.
                      </p>
                    </li>
                  </ol>
                </section>
                <section
                  className="article-section"
                  id="section-16"
                  ref={sectionRefs.section16}
                >
                  <h2>Contact Us</h2>
                  <p>
                    Contact VisaPrime Consultancy to know more about Family
                    Sponsorship
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

export default FamilySponsorshipPermit;
