import React, { useRef } from "react";

const July2024 = () => {
  return (
    <div>
      <div className="single mt-125">
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="section-header">
            <h1>Immigration backlog starts increasing again</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="details-image">
                <img
                  src="/img/Newsletter/immigration-backlog-increase-news.jpg"
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
                  <li>Trend for 2024 Express Entry draws</li>
                  <li>Immigration backlog starts increasing again</li>
                  <li>
                    New guidelines for international student enrollment in BC
                  </li>
                </ul>

                <section className="article-section">
                  <h2>
                    <span>
                      IRCC has announced another increase in the immigration
                      backlog
                    </span>
                  </h2>
                  <p>
                    Canada's immigration backlog rose to 2,292,400 applications,
                    up from 2,220,000 last month, with a 6.62% increase in
                    backlog since June. Temporary residency applications surged
                    by 11.13%. Despite this, 1,355,800 applications were
                    processed by June 30, 2024, and new targets are expected in
                    November 2024.
                  </p>
                </section>

                <section className="article-section">
                  <h2>
                    <span>
                      British Columbia Introduces New Guidelines to Restrict
                      International Student Enrollment
                    </span>
                  </h2>
                  <p>
                    British Columbia’s Ministry of Post-Secondary Education and
                    Future Skills has introduced new rules mandating public
                    Designated Learning Institutions (DLIs) to cap international
                    student enrollment at 30%. These guidelines involve adopting
                    the Education Quality Assurance (EQA) code, maintaining
                    clear tuition fees, and meeting rigorous quality standards.
                    Non-compliant institutions will lose their EQA designation
                    and will no longer be able to enroll international students.
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

export default July2024;
