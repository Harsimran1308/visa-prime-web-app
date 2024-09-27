import React, { useRef } from "react";

const ExpressEntryDraw = () => {
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>Express Entry Draws</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-text">
                <section className="article-section">
                  <h2>When is the next Express Entry Draw ?</h2>
                  <p>
                    This VisaPrime Page provides you with every Express Entry
                    draw result since 2019
                  </p>
                  <p>
                    Express Entry is a comprehensive system managed by
                    Immigration, Refugees, and Citizenship Canada (IRCC) for
                    selecting candidates for immigration to Canada. Rather than
                    being an immigration program itself, it facilitates the
                    processing of applications through various economic
                    immigration programs, including:
                  </p>
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
                    <li>
                      Selected streams from{" "}
                      <strong>
                        <a
                          href=""
                          target="_blank"
                          className="article-navigation-link"
                        >
                          Provincial Nominee Programs (PNPs)
                        </a>
                      </strong>
                    </li>
                  </ul>
                  <p>
                    Express Entry conducts draws to invite candidates, which can
                    be categorized as:
                  </p>
                  <ol>
                    <li>
                      <strong>General Draws:</strong>These selections allow
                      candidates from any federal economic immigration program
                      to be chosen based solely on their Comprehensive Ranking
                      System (CRS) score.
                    </li>
                    <li>
                      <strong>Program-Specific Draws:</strong>In these draws, the
                      Canadian government targets candidates eligible for only
                      one specific federal economic immigration program.
                    </li>
                  </ol>
                  <p>By understanding the structure and function of Express Entry, prospective immigrants
can better navigate their path to Canadian permanent residency. Express entry draws
usually takes place every 2 weeks. Scroll down to check the latest results.</p>
            <p><strong>
                        <a
                          href="https://docs.google.com/spreadsheets/d/19aa2bie8WeBwflHnK-Zn13LvUMUbVgAa/edit?gid=1108666446#gid=1108666446"
                          target="_blank"
                          className="article-navigation-link"
                        >
                         Click to see all the draws since 2019
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

export default ExpressEntryDraw;
