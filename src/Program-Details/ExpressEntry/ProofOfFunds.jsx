import React, { useRef } from "react";

const ProofOfFunds = () => {
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>Proof Of Funds</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-text">
                <section className="article-section">
                  <h2>
                    <span>
                      What is proof of funds for Canadian immigration?
                    </span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                      Proof of funds is a requirement for many Express Entry
                      applicants, demonstrating that they have enough financial
                      resources to support themselves and their family when they
                      resettle in Canada. This financial evidence ensures
                      applicants can meet their basic needs without relying on
                      public assistance after arriving in the country.
                    </span>
                  </p>
                </section>
                <section className="article-section">
                  <h2>
                    <span>
                      Why does Canada require proof of funds for Express Entry
                      applications?
                    </span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                      Proof of funds is essential to show that applicants can
                      cover basic living costs like housing, food, and
                      transportation when they first arrive in Canada. This
                      requirement helps ensure that newcomers can integrate
                      smoothly into Canadian society and reduces the risk of
                      financial difficulties that may lead to dependence on
                      social services.
                    </span>
                  </p>
                </section>
                <section className="article-section">
                  <h2>
                    <span>
                      Which Express Entry applicants need to provide proof of
                      funds?
                    </span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                      Candidates applying under the Federal Skilled Worker
                      (FSW), Federal Skilled Trades (FST), and Provincial
                      Nominee Programs (PNP) must provide proof of funds.
                      However, applicants in the Canadian Experience Class (CEC)
                      and those applying through Quebec’s immigration programs
                      are exempt from this requirement. If you’re applying
                      through any economic immigration program, make sure to
                      review the specific financial support requirements.
                    </span>
                  </p>
                </section>
                <section className="article-section">
                  <h2>
                    <span>
                      How much money do I need to show for proof of funds?
                    </span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                      The amount of funds you need to show depends on your
                      family size. This includes yourself, your spouse or
                      common-law partner, and any dependent children. The
                      required amount is updated annually based on Canada&#39;s
                      Low Income Cut-Off (LICO). Here’s the current breakdown
                      for 2024:
                    </span>
                  </p>
                  <table
                    border="1"
                    cellpadding="10"
                    cellspacing="0"
                    className="article-detail-table"
                  >
                    <thead>
                      <tr>
                        <th>Number of Family Members</th>
                        <th>Funds Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>$14,690</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>$18,288</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>$22,483</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>$27,297</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>$30,690</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>$34,917</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>$38,875</td>
                      </tr>
                      <tr>
                        <td>
                          If more than 7 people, for each additional family
                          member
                        </td>
                        <td>$3,958</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                      Please note, these funds cannot be borrowed, and they must
                      be available throughout the application process.
                    </p>
                </section>
                <section className="article-section">
                  <h2>
                    <span>
                      What types of documents are accepted as proof of funds for
                      Express Entry?
                    </span>
                  </h2>
                  <p className="NormalWeb">
                    <span>
                      Proof of funds must be provided in the name of the
                      applicant or their spouse/common- law partner, and must be
                      accessible at the time of application. The funds cannot be
                      borrowed. Applicants need to submit a letter from their
                      financial institution that includes:
                    </span>
                  </p>
                  <p>
                    <ul>
                      <li>
                        The financial institution’s letterhead and contact
                        details
                      </li>
                      <li>The name of the applicant</li>
                      <li>Any outstanding debts or loans</li>
                      <li>
                        Information for each account, including:
                        <ul>
                          <li>Account numbers</li>
                          <li>Date of account opening</li>
                          <li>Current balance</li>
                          <li>Average balance for the past six months</li>
                        </ul>
                      </li>
                    </ul>
                  </p>
                  <p>
                    Any discrepancies or incomplete documentation may result in
                    the refusal of the application by immigration authorities.
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

export default ProofOfFunds;
