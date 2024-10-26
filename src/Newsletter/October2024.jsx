import React, { useRef } from "react";

const October2024 = () => {
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>
              Canada Announces Changes to Immigration Levels for 2025-2027
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="/img/Newsletter/immigration-changes-2024.jpg"
                  alt="immigration-changes"
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
                  <li>20% Reduction in immigration targets for 2025.</li>
                  <li>
                    Permanent Resident Admissions: Target decreases from 395,000
                    in 2025 to 365,000 by 2027.
                  </li>
                  <li>
                    Temporary Resident Arrivals: Significant cut from 673,650 in
                    2025 to 516,600 in 2026, followed by a slight increase in
                    2027.
                  </li>
                  <li>
                    Focus on economic immigration, family reunification, and
                    refugees.
                  </li>
                </ul>

                <section className="article-section">
                  <h2>Permanent Residency Targets</h2>
                  <p>
                    The government has established the following targets for
                    Permanent Resident (PR) admissions over the next three
                    years:
                  </p>

                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      margin: "0 auto",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          Immigration Category
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          2025
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          2026
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          2027
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Total PR Admissions
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          395,000 (367,000 - 436,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          380,000 (352,000 - 416,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          365,000 (338,000 - 401,000)
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          French-speaking Admissions Outside of Quebec
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          29,325 (8.5%)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          31,350 (9.5%)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          31,500 (10%)
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Economic Immigration
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          232,150 (215,000 - 256,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          229,750 (214,000 - 249,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          225,350 (207,000 - 246,000)
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Family Reunification
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          94,500 (88,500 - 102,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          88,000 (82,000 - 96,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          81,000 (77,000 - 89,000)
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Refugees & Others
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          68,350 (63,500 - 78,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          62,250 (56,000 - 71,000)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          58,650 (54,000 - 66,000)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                <section className="article-section">
                  <h2>
                    Year-Over-Year Changes for Permanent Residency Targets:
                  </h2>
                  <ul>
                    <li>
                      <strong>Total PR Admissions:</strong>
                      <ul>
                        <li>2025 to 2026: Decrease of 15,000 (3.8%)</li>
                        <li>2026 to 2027: Decrease of 15,000 (3.9%)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Economic Immigration:</strong>
                      <ul>
                        <li>2025 to 2026: Decrease of 2,400 (1.0%)</li>
                        <li>2026 to 2027: Decrease of 4,400 (1.9%)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Family Reunification:</strong>
                      <ul>
                        <li>2025 to 2026: Decrease of 6,500 (6.9%)</li>
                        <li>2026 to 2027: Decrease of 7,000 (8.0%)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Refugees & Others:</strong>
                      <ul>
                        <li>2025 to 2026: Decrease of 6,100 (8.9%)</li>
                        <li>2026 to 2027: Decrease of 3,600 (5.8%)</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section className="article-section">
                  <h2>Temporary Resident Targets</h2>
                  <p>
                    This year's Immigration Levels Plan also introduces targets
                    for Temporary Resident (TR) admissions, aiming to reduce the
                    proportion of temporary residents from 7% to 5% of Canada’s
                    overall population by the end of 2026.
                  </p>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      margin: "0 auto",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          Temporary Resident Category
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          2025
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          2026
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            backgroundColor: "#f2f2f2",
                            textAlign: "center",
                          }}
                        >
                          2027
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Total TR Arrivals
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          673,650 (604,900 - 742,400)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          516,600 (435,250 - 597,950)
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          543,600 (472,900 - 614,250)
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Workers
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          367,750
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          210,700
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          237,700
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Students
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          305,900
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          305,900
                        </td>
                        <td
                          style={{
                            border: "1px solid #ddd",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          305,900
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                <section className="article-section">
                  <h2>
                    Year-Over-Year Changes for Temporary Residency Targets:
                  </h2>
                  <ul>
                    <li>
                      <strong>Total TR Arrivals:</strong>
                      <ul>
                        <li>2025 to 2026: Decrease of 157,050 (23.3%)</li>
                        <li>2026 to 2027: Increase of 27,000 (5.2%)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Workers:</strong>
                      <ul>
                        <li>2025 to 2026: Decrease of 157,050 (42.7%)</li>
                        <li>2026 to 2027: Increase of 27,000 (12.8%)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Students:</strong>
                      <ul>
                        <li>No change between 2025 and 2027 (0%)</li>
                      </ul>
                    </li>
                  </ul>
                </section>
                <section className="article-section">
                  <h2>Conclusion</h2>
                  <p>
                  These changes represent a strategic approach to immigration management in Canada, balancing the need for skilled workers with the importance of sustainable growth. The government expects that a portion of temporary residents will transition to permanent residency through pathways such as the Canadian Experience Class (CEC) and provincial nominee programs (PNPs).
                  </p>
                  <p>
                  For a detailed overview, watch Prime Minister Justin Trudeau's speech on the changes.
                  </p>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/EuFIwUQ6SgY?si=t2vHshyxaLVfrcYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <p>
                  For more information on Canada's immigration policies, please visit Canada Immigration and Citizenship.
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

export default October2024;
