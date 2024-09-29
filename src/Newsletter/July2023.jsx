import React, { useRef } from "react";

const July2023 = () => {
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>Canada held its first draw for STEM Category</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="/img/Newsletter/stem-category-immigration-draw.jpg"
                  alt="immigration-policies-uncertainity-news"
                  style={{
                    marginTop: "30px",
                    maxHeight: "400px",
                    maxWidth: "80%",
                  }}
                />
              </div>
              <div className="details-text">
                <h2>NEWSLETTER HIGHLIGHTS:</h2>
                <ul>
                  <li>
                    Trudeau announced Marc Miller as New Immigration Minister
                  </li>
                  <li>AAIP new guidelines</li>
                  <li>
                    Work Permit holders in Canada now have more time to study
                  </li>
                  <li>
                    Alberta's Rural Program &amp; its Benefit to Employers
                  </li>
                </ul>

                <section className="article-section">
                  <h2>
                    <span>Canada held its first draw for STEM Category</span>
                  </h2>
                  <p>
                    Starting September 30, 2024, the AAIP will launch a new
                    system to streamline immigration by selecting candidates
                    based on specific criteria. As a result, the remaining 2024
                    application intake dates are canceled. This shift aims to
                    improve efficiency and better match applicants with
                    Alberta’s labor market needs.
                  </p>
                </section>

                <section className="article-section">
                  <h2>
                    <span>
                      Marc Miller succeeds Sean Frases as Canada's Immigration
                      Minister
                    </span>
                  </h2>
                  <p>
                    Canada now has a new Minister of Immigration, Refugees, and
                    Citizenship. Miller ascends from his position as Minister of
                    Crown-Indigenous Relations to succeed Sean Fraser, who has
                    held the office since 2021. Fraser has been appointed as the
                    next Minister of Housing, Infrastructure, and Communities.
                  </p>
                </section>

                <section className="article-section">
                  <h2>
                    <span>
                      Public Policy allowing some work permit holders to study
                      without a study permit
                    </span>
                  </h2>
                  <p>
                    Sean Fraser, former Minister of IRCC, announced a new
                    temporary policy on June 27, 2023. One may be eligible to
                    study without a study permit while working. They must be
                    authorized to work in Canada with a valid work permit that
                    was issued on or before June 2023, or a letter authorizing
                    them to work while the work permit extension application is
                    being processed.
                  </p>
                </section>

                <section className="article-section">
                  <h2>
                    <span>
                      How Alberta’s Rural Areas are Inviting Workforce
                    </span>
                  </h2>
                  <p>
                    The Canadian government is working closely with rural areas
                    to enhance current investments and find ways to enhance
                    programs, policies, and upcoming investments that will
                    benefit rural communities.
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

export default July2023;
