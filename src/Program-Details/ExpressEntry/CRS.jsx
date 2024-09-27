import React, { useRef } from "react";

const CRS = () => {
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>Comprehensive Ranking System</h1>
            <p>
              The Comprehensive Ranking System (CRS) is an essential tool used
              to evaluate and rank candidates in Canada&#39;s Express Entry
              immigration system. This scoring mechanism determines which
              candidates receive an{" "}
              <strong>
                <a
                  href="/invitation-to-apply"
                  target="_blank"
                  className="article-navigation-link"
                >
                  Invitation to Apply (ITA){" "}
                </a>
              </strong>
              for permanent residency based on their scores.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-text">
                <section className="article-section">
                  <h2>What is the CRS Score?</h2>
                  <p>
                    The CRS score is a points-based system developed by the
                    Canadian government to assess immigration candidates. Each
                    individual in the Express Entry pool is awarded a score out
                    of 1200 points, reflecting their qualifications across
                    various factors, including:
                  </p>
                  <ul>
                    <li>
                      <strong>Age</strong>
                    </li>
                    <li>
                      <strong>Education Level</strong>
                    </li>
                    <li>
                      <strong>Work Experience</strong>
                    </li>
                    <li>
                      <strong>Language Proficiency</strong>
                    </li>
                  </ul>
                  <p>Express Entry covers three main immigration programs:</p>
                  <ul>
                    <li>
                      <strong>
                        <a
                          href="/federal-skilled-worker"
                          target="_blank"
                          className="article-navigation-link"
                        >
                          Federal Skilled Worker Program
                        </a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a
                          href="/federal-skill-trades-program"
                          target="_blank"
                          className="article-navigation-link"
                        >
                          Federal Skilled Trades Program
                        </a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a
                          href="/canadian-experience-class"
                          target="_blank"
                          className="article-navigation-link"
                        >
                          Canadian Experience Class
                        </a>
                      </strong>
                    </li>
                  </ul>
                  <p>
                    The Canadian government holds draws approximately every two
                    weeks, during which top-ranking candidates are invited to
                    apply for permanent residency. It’s important to note that
                    the government does not disclose details about upcoming
                    draws, including the date, number of invitations issued, or
                    the minimum CRS score required in advance.
                  </p>
                </section>
                <section className="article-section">
                  <h2>How to Increase Your CRS Score</h2>
                  <p>
                    <strong>
                      <a
                        href="/express-entry#section-16"
                        target="_blank"
                        className="article-navigation-link"
                      >
                        Improving your CRS score{" "}
                      </a>
                    </strong>{" "}
                    can enhance your chances of receiving an ITA. Key factors
                    contributing to your score include language abilities,
                    education credentials, work experience, and age. Additional
                    points can be obtained for factors such as:
                    <ul>
                      <li>Having a sibling residing in Canada</li>
                      <li>High proficiency in French</li>
                      <li>Securing a job offer from a Canadian employer</li>
                      <li>
                        Receiving a nomination through a Provincial Nominee
                        Program (PNP)
                      </li>
                    </ul>
                  </p>
                  <p>
                    Securing these additional points can significantly improve
                    your prospects in future Express Entry draws.
                  </p>
                </section>
                <section className="article-section">
                  <h2>The Role of Provincial Nominee Programs (PNP)</h2>
                  <p>
                    <strong>
                      <a
                        href="/pnp"
                        target="_blank"
                        className="article-navigation-link"
                      >
                        Provincial Nominee Programs (PNP)
                      </a>
                    </strong>{" "}
                    offer vital pathways to permanent residency for candidates
                    with lower CRS scores. A nomination from a province can
                    provide an impressive boost of 600 points to your CRS score,
                    virtually guaranteeing an ITA.
                  </p>
                  <p>
                    Each province has its own criteria for nominations, often
                    seeking candidates who can fill specific labor market needs
                    or have connections to the province. Candidates nominated
                    through a PNP are expected to settle in the respective
                    province.
                  </p>
                </section>
                <section className="article-section">
                  <h2>Minimum CRS Score for PNPs</h2>
                  <p>
                    Minimum CRS scores for Provincial Nominee Programs vary by
                    province. While many use their own criteria, some PNPs take
                    into account a candidate’s CRS score. For example:
                    <ul>
                      <li>
                        Ontario&#39;s Human Capital Priorities stream does not
                        issue invitations to candidates with a CRS score below
                        400.
                      </li>
                      <li>
                        Alberta&#39;s Express Entry stream considers candidates
                        with a minimum CRS score of 300.
                      </li>
                    </ul>
                  </p>
                  <p>
                    Stay informed about the latest PNP requirements by tracking
                    updates through our dedicated Provincial Nominee Program
                    Updates Tracker.
                  </p>
                </section>
                <section className="article-section">
                  <h2>Spouse Points in CRS Calculation</h2>
                  <p>
                    The CRS awards points differently based on marital status.
                    If your spouse or common- law partner is not accompanying
                    you in your application or is already a Canadian citizen or
                    permanent resident, you will be assessed as a single
                    applicant.
                  </p>
                  <p>
                    If you are married and your spouse is accompanying you, they
                    will need to provide language test results and an{" "}
                    <strong>
                      <a
                        href="/https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessed.html"
                        target="_blank"
                        className="article-navigation-link"
                      >
                        Educational Credential Assessment (ECA)
                      </a>
                    </strong>{" "}
                    for their education. This can help you maximize the points
                    you earn in your application, enhancing your overall CRS
                    score.
                  </p>
                </section>
                <section className="article-section">
                  <h2>Ready to Estimate Your CRS Score?</h2>
                  <p>
                    If you&#39;re curious about your potential CRS score,
                    utilize our handy CRS score calculator to assess your
                    eligibility and improve your chances for a successful
                    Express Entry application.
                  </p>
                  <p>
                    <strong>
                      <a
                        href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp"
                        target="_blank"
                        className="article-navigation-link"
                      >
                        Calculate my CRS score
                      </a>
                    </strong>{" "}
                  </p>
                </section>
                <section className="article-section">
                  <h2>CRS Score Breakdown Table</h2>
                  <p>
                    The tables below explain how many points Express Entry
                    candidates may receive for each factor under the
                    Comprehensive Ranking System.
                  </p>
                  <div class="mwsgeneric-base-html parbase section">
                    <div class="table-responsive">
                      <table class="table">
                        <caption>
                          <h3 id="summarya">A. Core / human capital factors</h3>
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <b>Factors</b>
                            </th>
                            <th class="text-center" scope="col">
                              <b>
                                Points per factor - With a spouse or common-law
                                partner
                              </b>
                            </th>
                            <th class="text-center" scope="col">
                              <b>
                                Points per factor - Without a spouse or
                                common-law partner
                              </b>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Age&nbsp;</td>
                            <td class="text-center">100</td>
                            <td class="text-center">110</td>
                          </tr>
                          <tr>
                            <td>Level of education&nbsp;</td>
                            <td class="text-center">140</td>
                            <td class="text-center">150</td>
                          </tr>
                          <tr>
                            <td>Official languages proficiency&nbsp;</td>
                            <td class="text-center">150</td>
                            <td class="text-center">160</td>
                          </tr>
                          <tr>
                            <td>Canadian work experience&nbsp;</td>
                            <td class="text-center">70</td>
                            <td class="text-center">80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <caption>
                          <h3 id="summaryb">
                            B. Spouse or common-law partner factors
                          </h3>
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <b>Factors</b>
                            </th>
                            <th class="text-center" scope="col">
                              <b>Points per factor</b>
                              <br />
                              <span class="small">
                                (Maximum 40&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Level of education&nbsp;</td>
                            <td class="text-center">10</td>
                          </tr>
                          <tr>
                            <td>Official language proficiency&nbsp;</td>
                            <td class="text-center">20</td>
                          </tr>
                          <tr>
                            <td>Canadian Work Experience&nbsp;</td>
                            <td class="text-center">10</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        A.&nbsp;Core/human capital + B.&nbsp;Spouse or
                        common-law partner factors = Maximum 500&nbsp;points
                        (with OR without a spouse or common-law partner)
                      </strong>
                    </p>
                    <div class="table-responsive">
                      <table class="table ">
                        <caption>
                          <h3 id="summaryc">
                            C. Skill Transferability factors{" "}
                            <span class="small">(Maximum 100&nbsp;points)</span>
                          </h3>
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <b>Education</b>
                            </th>
                            <th class="text-center" scope="col">
                              <b>Points per factor</b>
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              With good/strong official languages proficiency{" "}
                              <b>and</b> a post-secondary degree
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              With Canadian work experience <b>and</b> a
                              post-secondary degree
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <strong>Foreign work experience</strong>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>Points per factor</strong>
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              With good/strong official languages
                              proficiency&nbsp;(Canadian Language Benchmark
                              [CLB] level 7 or higher) <strong>and</strong>{" "}
                              foreign work experience
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              With Canadian work experience <strong>and</strong>{" "}
                              foreign work experience
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <strong>
                                Certificate of qualification (for people in
                                trade occupations)
                              </strong>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>Points per factor</strong>
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              With good/strong official languages proficiency
                              and a certificate of qualification
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        A.&nbsp;Core/human capital + B.&nbsp;Spouse or
                        common-law partner + C.&nbsp;Transferability factors =
                        Maximum 600&nbsp;points
                      </strong>
                    </p>
                    <div class="table-responsive">
                      <table class="table ">
                        <caption>
                          <h3 id="summaryd">
                            D.&nbsp;Additional&nbsp;points{" "}
                            <span class="small">(Maximum 600&nbsp;points)</span>
                          </h3>
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <strong>Factor</strong>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>Maximum points per factor</strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Brother or sister living in Canada (citizen or
                              permanent resident)
                            </td>
                            <td class="text-center">15</td>
                          </tr>
                          <tr>
                            <td>French language skills</td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>Post-secondary education in&nbsp;Canada</td>
                            <td class="text-center">30</td>
                          </tr>
                          <tr>
                            <td>Arranged employment - TEER 0 Major group 00</td>
                            <td class="text-center">200</td>
                          </tr>
                          <tr>
                            <td>
                              Arranged employment –NOC TEER 1, 2 or 3, or any
                              TEER 0 other than Major group 00
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>PN nomination</td>
                            <td class="text-center">600</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        A.&nbsp;Core/human capital + B.&nbsp;Spouse or
                        common-law partner factors + C.&nbsp;Transferability
                        factors + D.&nbsp;Additional points = Grand total –
                        Maximum 1,200&nbsp;points
                      </strong>
                    </p>
                    <h2 class="page-header" id="points">
                      Points breakdown, section by section
                    </h2>
                    <h3 id="pointsA">
                      CRS – A.&nbsp;Core / human capital factors{" "}
                    </h3>
                    <ul>
                      <li>
                        With a spouse or common-law partner: Maximum
                        460&nbsp;points total for all factors.
                      </li>
                      <li>
                        Without a spouse or common-law partner: Maximum
                        500&nbsp;points total for all factors.
                      </li>
                    </ul>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Age</th>
                            <th class="text-center" scope="col">
                              With a spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 100&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Without a spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 110&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>17 years of age or less</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>18 years of age</td>
                            <td class="text-center">90</td>
                            <td class="text-center">99</td>
                          </tr>
                          <tr>
                            <td>19 years of age</td>
                            <td class="text-center">95</td>
                            <td class="text-center">105</td>
                          </tr>
                          <tr>
                            <td>20 to 29 years of age</td>
                            <td class="text-center">100</td>
                            <td class="text-center">110</td>
                          </tr>
                          <tr>
                            <td>30 years of age</td>
                            <td class="text-center">95</td>
                            <td class="text-center">105</td>
                          </tr>
                          <tr>
                            <td>31 years of age</td>
                            <td class="text-center">90</td>
                            <td class="text-center">99</td>
                          </tr>
                          <tr>
                            <td>32 years of age</td>
                            <td class="text-center">85</td>
                            <td class="text-center">94</td>
                          </tr>
                          <tr>
                            <td>33 years of age</td>
                            <td class="text-center">80</td>
                            <td class="text-center">88</td>
                          </tr>
                          <tr>
                            <td>34 years of age</td>
                            <td class="text-center">75</td>
                            <td class="text-center">83</td>
                          </tr>
                          <tr>
                            <td>35 years of age</td>
                            <td class="text-center">70</td>
                            <td class="text-center">77</td>
                          </tr>
                          <tr>
                            <td>36 years of age</td>
                            <td class="text-center">65</td>
                            <td class="text-center">72</td>
                          </tr>
                          <tr>
                            <td>37 years of age</td>
                            <td class="text-center">60</td>
                            <td class="text-center">66</td>
                          </tr>
                          <tr>
                            <td>38 years of age</td>
                            <td class="text-center">55</td>
                            <td class="text-center">61</td>
                          </tr>
                          <tr>
                            <td>39 years of age</td>
                            <td class="text-center">50</td>
                            <td class="text-center">55</td>
                          </tr>
                          <tr>
                            <td>40 years of age</td>
                            <td class="text-center">45</td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>41 years of age</td>
                            <td class="text-center">35</td>
                            <td class="text-center">39</td>
                          </tr>
                          <tr>
                            <td>42 years of age</td>
                            <td class="text-center">25</td>
                            <td class="text-center">28</td>
                          </tr>
                          <tr>
                            <td>43 years of age</td>
                            <td class="text-center">15</td>
                            <td class="text-center">17</td>
                          </tr>
                          <tr>
                            <td>44 years of age</td>
                            <td class="text-center">5</td>
                            <td class="text-center">6</td>
                          </tr>
                          <tr>
                            <td>45 years of age or more</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Level of Education</th>
                            <th class="text-center" scope="col">
                              With a spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 140&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Without a spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 150&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Less than secondary school (high school)</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>Secondary diploma (high school graduation)</td>
                            <td class="text-center">28</td>
                            <td class="text-center">30</td>
                          </tr>
                          <tr>
                            <td>
                              One-year degree, diploma or certificate from
                              &nbsp;a university, college, trade or technical
                              school, or other institute
                            </td>
                            <td class="text-center">84</td>
                            <td class="text-center">90</td>
                          </tr>
                          <tr>
                            <td>
                              Two-year program at a university, college, trade
                              or technical school, or other institute
                            </td>
                            <td class="text-center">91</td>
                            <td class="text-center">98</td>
                          </tr>
                          <tr>
                            <td>
                              Bachelor's degree OR&nbsp; a three or more year
                              program at a university, college, trade or
                              technical school, or other institute
                            </td>
                            <td class="text-center">112</td>
                            <td class="text-center">120</td>
                          </tr>
                          <tr>
                            <td>
                              Two or more certificates, diplomas, or degrees.
                              One must be for a program of three or more years
                            </td>
                            <td class="text-center">119</td>
                            <td class="text-center">128</td>
                          </tr>
                          <tr>
                            <td>
                              Master's degree, OR professional degree needed to
                              practice in a licensed profession (For
                              “professional degree,” the degree program must
                              have been in: medicine, veterinary medicine,
                              dentistry, optometry, law, chiropractic medicine,
                              or pharmacy.)
                            </td>
                            <td class="text-center">126</td>
                            <td class="text-center">135</td>
                          </tr>
                          <tr>
                            <td>Doctoral level university degree (Ph.D.)</td>
                            <td class="text-center">140</td>
                            <td class="text-center">150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h4>
                      Official languages proficiency - first official language
                    </h4>
                    <p>
                      Maximum&nbsp;points for each ability (reading, writing,
                      speaking and listening):
                    </p>
                    <ul>
                      <li>32 with a spouse or common-law partner</li>
                      <li>34 without a spouse or common-law partner</li>
                    </ul>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              Canadian Language Benchmark (CLB) level per
                              ability{" "}
                            </th>
                            <th class="text-center" scope="col">
                              With a spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 128&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Without a spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 136&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Less than CLB&nbsp;4</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;4 or 5</td>
                            <td class="text-center">6</td>
                            <td class="text-center">6</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;6</td>
                            <td class="text-center">8</td>
                            <td class="text-center">9</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;7</td>
                            <td class="text-center">16</td>
                            <td class="text-center">17</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;8</td>
                            <td class="text-center">22</td>
                            <td class="text-center">23</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;9</td>
                            <td class="text-center">29</td>
                            <td class="text-center">31</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;10 or more</td>
                            <td class="text-center">32</td>
                            <td class="text-center">34</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h4>
                      Official languages proficiency - second official language
                    </h4>
                    <p>
                      Maximum points for each ability (reading, writing,
                      speaking and listening):
                    </p>
                    <ul>
                      <li>
                        6 with a spouse or common-law partner (up to a combined
                        maximum of 22&nbsp;points)
                      </li>
                      <li>
                        6 without a spouse or common-law partner (up to a
                        combined maximum of 24&nbsp;points){" "}
                      </li>
                    </ul>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <strong>
                                Canadian Language Benchmark (CLB) level per
                                ability
                              </strong>{" "}
                            </th>
                            <th class="text-center" scope="col">
                              <strong>
                                With a spouse or common-law partner
                              </strong>{" "}
                              <br />
                              <span class="small">
                                (Maximum 22&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>
                                Without a spouse or common-law partner
                              </strong>{" "}
                              <br />
                              <span class="small">
                                (Maximum 24&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CLB&nbsp;4 or less</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;5 or 6</td>
                            <td class="text-center">1</td>
                            <td class="text-center">1</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;7 or 8</td>
                            <td class="text-center">3</td>
                            <td class="text-center">3</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;9 or more</td>
                            <td class="text-center">6</td>
                            <td class="text-center">6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <strong>Canadian work experience</strong>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>
                                With a spouse or common-law partner
                              </strong>{" "}
                              <br />
                              <span class="small">
                                (Maximum 70&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>
                                Without a spouse or common-law partner
                              </strong>{" "}
                              <br />
                              <span class="small">
                                (Maximum 80&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>None or less than a year</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>1 year</td>
                            <td class="text-center">35</td>
                            <td class="text-center">40</td>
                          </tr>
                          <tr>
                            <td>2 years</td>
                            <td class="text-center">46</td>
                            <td class="text-center">53</td>
                          </tr>
                          <tr>
                            <td>3 years</td>
                            <td class="text-center">56</td>
                            <td class="text-center">64</td>
                          </tr>
                          <tr>
                            <td>4 years</td>
                            <td class="text-center">63</td>
                            <td class="text-center">72</td>
                          </tr>
                          <tr>
                            <td>5 years or more</td>
                            <td class="text-center">70</td>
                            <td class="text-center">80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        Subtotal: A.&nbsp;Core / human capital factors{" "}
                      </strong>
                    </p>
                    <ul>
                      <li>
                        With a spouse or common-law partner – Maximum
                        460&nbsp;points
                      </li>
                      <li>
                        Without a spouse or common-law partner&nbsp;– Maximum
                        500&nbsp;points
                      </li>
                    </ul>
                    <h3 id="pointsB">
                      CRS – B.&nbsp;Spouse or common-law partner factors (if
                      applicable)
                    </h3>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              Spouse’s or common-law partner’s level of
                              education
                            </th>
                            <th class="text-center" scope="col">
                              With spouse or common-law partner
                              <br />
                              <span class="small">
                                (Maximum 10&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Without spouse or common-law partner
                              <br />
                              <span class="small">(Does not apply)</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Less than secondary school (high school)</td>
                            <td class="text-center">0</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>
                              Secondary school (high school&nbsp;graduation)
                            </td>
                            <td class="text-center">2</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>
                              One-year program at a university, college, trade
                              or technical school, or other institute
                            </td>
                            <td class="text-center">6</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>
                              Two-year program at a university, college, trade
                              or technical in school, or other institute
                            </td>
                            <td class="text-center">7</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>
                              Bachelor's degree OR&nbsp; a three or more year
                              program at a university, college, trade or
                              technical school, or other institute
                            </td>
                            <td class="text-center">8</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>
                              Two or more certificates, diplomas, or degrees.
                              One must be for a program of three or more years
                            </td>
                            <td class="text-center">9</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>
                              Master's degree, or professional degree needed to
                              practice in a licensed profession (For
                              “professional degree”, the degree program must
                              have been in: medicine, veterinary medicine,
                              dentistry, optometry, law, chiropractic medicine,
                              or pharmacy.)
                            </td>
                            <td class="text-center">10</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>Doctoral level university degree (PhD)</td>
                            <td class="text-center">10</td>
                            <td class="text-center">n/a</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Note: (n/a) means that this factor does not apply in this
                      case.
                    </p>
                    <h4>
                      Spouse's or common-law partner's official languages
                      proficiency - first official language
                    </h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <strong>
                                Canadian Language Benchmark (CLB) level per
                                ability (reading, writing, speaking and
                                listening )
                              </strong>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>
                                Maximum 20&nbsp;points for section
                                <br />
                                Maximum 5&nbsp;points per ability
                              </strong>
                            </th>
                            <th class="text-center" scope="col">
                              <strong>
                                Without spouse or common-law partner
                              </strong>{" "}
                              <br />
                              (Does not apply)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>CLB&nbsp;4 or less</td>
                            <td class="text-center">0</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;5 or 6</td>
                            <td class="text-center">1</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;7 or 8</td>
                            <td class="text-center">3</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>CLB&nbsp;9 or more</td>
                            <td class="text-center">5</td>
                            <td class="text-center">n/a</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Note: (n/a) means that this factor does not apply in this
                      case.{" "}
                    </p>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              Spouse's Canadian work experience
                            </th>
                            <th class="text-center" scope="col">
                              Maximum 10&nbsp;points
                            </th>
                            <th class="text-center" scope="col">
                              Without spouse or common-law partner <br />
                              (Does not apply)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>None or less than a year</td>
                            <td class="text-center">0</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>1 year</td>
                            <td class="text-center">5</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>2 years</td>
                            <td class="text-center">7</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>3 years</td>
                            <td class="text-center">8</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>4 years</td>
                            <td class="text-center">9</td>
                            <td class="text-center">n/a</td>
                          </tr>
                          <tr>
                            <td>5 years or more</td>
                            <td class="text-center">10</td>
                            <td class="text-center">n/a</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Note: (n/a) means that this factor does not apply in this
                      case.
                    </p>
                    <p>
                      <strong>
                        Subtotal : A.&nbsp;Core / human capital + B.&nbsp;Spouse
                        or common-law partner factors = Maximum 500&nbsp;points
                      </strong>
                    </p>
                    <h3 id="pointsC">
                      CRS – C.&nbsp;Skill transferability factors{" "}
                      <span class="small">
                        (Maximum 100&nbsp;points for this section)
                      </span>
                    </h3>
                    <h4>Education</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              With good official language proficiency (Canadian
                              Language Benchmark Level [CLB]&nbsp;7 or higher)
                              and a post-secondary degree
                            </th>
                            <th class="text-center" scope="col">
                              Points for CLB&nbsp;7 or more on all first
                              official language abilities, with one or more
                              under CLB&nbsp;9
                              <br />
                              <span class="small">
                                (Maximum 25&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Points for CLB&nbsp;9 or more on all four first
                              official language abilities
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Secondary school (high school) credential or less
                            </td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>
                              Post-secondary program credential of one year or
                              longer
                            </td>
                            <td class="text-center">13</td>
                            <td class="text-center">25</td>
                          </tr>
                          <tr>
                            <td>
                              Two or more post-secondary program credentials AND
                              at least one of these credentials was issued on
                              completion of a post-secondary program of three
                              years or longer
                            </td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              A university-level credential at the master’s
                              level or at the level of an entry-to-practice
                              professional degree for an occupation listed in
                              the National Occupational Classification matrix at
                              Skill Level A for which licensing by a provincial
                              regulatory body is required
                            </td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              A university-level credential at the doctoral
                              level
                            </td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table ">
                        <thead>
                          <tr>
                            <th scope="col">
                              <b>
                                With Canadian work experience and a
                                post-secondary degree
                              </b>
                            </th>
                            <th class="text-center" scope="col">
                              <b>
                                Points for education +&nbsp;1&nbsp;year of
                                Canadian work experience
                              </b>
                              <br />
                              <span class="small">
                                (Maximum 25&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              <b>
                                Points for education +&nbsp;2&nbsp;years or more
                                of Canadian work experience
                              </b>
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Secondary school (high school) credential or less
                            </td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>
                              Post-secondary program credential of one year or
                              longer
                            </td>
                            <td class="text-center">13</td>
                            <td class="text-center">25</td>
                          </tr>
                          <tr>
                            <td>
                              Two or more post-secondary program credentials AND
                              at least one of these credentials was issued on
                              completion of a post-secondary program of three
                              years or longer
                            </td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              A university-level credential at the master’s
                              level or at the level of an entry-to-practice
                              professional degree for an occupation listed in
                              the National Occupational Classification matrix at
                              Skill Level A for which licensing by a provincial
                              regulatory body is required
                            </td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              A university-level credential at the doctoral
                              level
                            </td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h4>
                      Foreign work experience – With good official language
                      proficiency (Canadian Language Benchmark Level
                      [CLB]&nbsp;7 or higher)
                    </h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Years of experience</th>
                            <th class="text-center" scope="col">
                              Points for foreign work experience + CLB&nbsp;7 or
                              more on all first official language abilities, one
                              or more under&nbsp;9
                              <br />
                              <span class="small">
                                (Maximum 25&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Points for foreign work experience + CLB&nbsp;9 or
                              more on all four first official language abilities
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No foreign work experience</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>1 or 2 years of foreign work experience</td>
                            <td class="text-center">13</td>
                            <td class="text-center">25</td>
                          </tr>
                          <tr>
                            <td>3 years or more of foreign work experience</td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h4>
                      Foreign work experience – With Canadian work experience
                    </h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Years of experience</th>
                            <th class="text-center" scope="col">
                              Points for foreign work experience
                              +&nbsp;1&nbsp;year of Canadian work experience
                              <br />
                              <span class="small">
                                (Maximum 25&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Points for foreign work experience
                              +&nbsp;2&nbsp;years or more of Canadian work
                              experience
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No foreign work experience</td>
                            <td class="text-center">0</td>
                            <td class="text-center">0</td>
                          </tr>
                          <tr>
                            <td>1 or 2 years of foreign work experience</td>
                            <td class="text-center">13</td>
                            <td class="text-center">25</td>
                          </tr>
                          <tr>
                            <td>3 years or more of foreign work experience</td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">
                              Certificate of qualification (trade occupations) –
                              With good official language proficiency (Canadian
                              Language Benchmark Level [CLB]&nbsp;5 or higher)
                            </th>
                            <th class="text-center" scope="col">
                              Points for certificate of qualification +
                              CLB&nbsp;5 or more on all first official language
                              abilities, one or more under&nbsp;7
                              <br />
                              <span class="small">
                                (Maximum 25&nbsp;points)
                              </span>
                            </th>
                            <th class="text-center" scope="col">
                              Points for certificate of qualification +
                              CLB&nbsp;7 or more on all four first official
                              language abilities
                              <br />
                              <span class="small">
                                (Maximum 50&nbsp;points)
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>With a certificate of qualification</td>
                            <td class="text-center">25</td>
                            <td class="text-center">50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        Subtotal: A.&nbsp;Core / human capital + B.&nbsp;Spouse
                        or common-law partner + C.&nbsp;Skill transferability
                        factors - Maximum 600&nbsp;points
                      </strong>
                    </p>
                    <h3 id="pointsD">
                      CRS – D.&nbsp;Additional points{" "}
                      <span class="small">(Maximum 600&nbsp;points)</span>
                    </h3>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" id="french-skills">
                              Additional points
                            </th>
                            <th class="text-center" scope="col">
                              Maximum 600 points
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Brother or sister living in Canada who is a
                              citizen or permanent resident of Canada
                            </td>
                            <td class="text-center">15</td>
                          </tr>
                          <tr>
                            <td>
                              Scored NCLC 7 or higher on all four French
                              language skills and scored CLB 4 or lower in
                              English (or didn’t take an English test)
                            </td>
                            <td class="text-center">25</td>
                          </tr>
                          <tr>
                            <td>
                              Scored NCLC 7 or higher on all four French
                              language skills and scored CLB 5 or higher on all
                              four English skills
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>
                              Post-secondary education in Canada - credential of
                              one or two years
                            </td>
                            <td class="text-center">15</td>
                          </tr>
                          <tr>
                            <td>
                              Post-secondary education in Canada - credential
                              three years or longer
                            </td>
                            <td class="text-center">30</td>
                          </tr>
                          <tr>
                            <td>
                              Arranged employment – NOC TEER 0 Major group 00
                            </td>
                            <td class="text-center">200</td>
                          </tr>
                          <tr>
                            <td>
                              Arranged employment – NOC TEER 1, 2 or 3, or any
                              TEER 0 other than Major group 00
                            </td>
                            <td class="text-center">50</td>
                          </tr>
                          <tr>
                            <td>Provincial or territorial nomination</td>
                            <td class="text-center">600</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        Subtotal: D.&nbsp;Additional points – Maximum
                        600&nbsp;points
                      </strong>
                    </p>
                    <p>
                      <strong>
                        Grand total: A.&nbsp;Core / human capital +
                        B.&nbsp;Spouse or common-law partner + C.&nbsp;Skill
                        transferability factors + D.&nbsp;Additional&nbsp;points
                        = Maximum 1,200&nbsp;points
                      </strong>
                    </p>
                  </div>
                </section>
                <section className="article-section">
                    <h2>Ready to start ?</h2>
                    <p><strong>
                      <a
                        href=""
                        target="_blank"
                        className="article-navigation-link"
                      >
                       Check out our free immigration assessment form
                      </a>
                    </strong></p>
                    <p><strong>
                      <a
                        href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp"
                        target="_blank"
                        className="article-navigation-link"
                      >
                       CRS Calculator
                      </a>
                    </strong></p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRS;
