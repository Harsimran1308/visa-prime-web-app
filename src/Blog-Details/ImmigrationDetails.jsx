import React from "react";

const ImmigrationDetails = () => {
    return (
        <div>
            <div className="single mt-125">
                <div className="container" style={{marginTop:"20px"}}>
                    <div className="section-header">
                        <h2>Apply for Canadian Citizenship today. Start your journey towards becoming a proud Canadian citizen</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="details-image">
                                <img src="img/single-1.jpg" alt="Image" style={{marginTop:"30px"}}/>
                            </div>
                            <div className="details-text">
                                <p>
                                    The Canadian immigration process can seem daunting, but with the right guidance, it becomes manageable. Our consultancy provides step-by-step assistance, ensuring that you understand each phase of your journey. From the initial assessment to becoming a permanent resident, we are here to support your goals.
                                </p>
                                <ul className="ul-group">
                                    <li>Personalized immigration assessment</li>
                                    <li>Guidance on choosing the right immigration program</li>
                                    <li>Assistance with document preparation</li>
                                    <li>Application submission and tracking</li>
                                    <li>Post-landing services for new immigrants</li>
                                </ul>
                                <p>
                                    Canada offers several pathways to immigration, each with its unique requirements and benefits. Whether you are applying for Permanent Residency (PR), work permits, or exploring provincial nomination programs, it is crucial to understand the specific steps for each route.
                                </p>
                                <ol className="ol-group">
                                    <li>Complete your initial immigration assessment</li>
                                    <li>Determine eligibility for programs like Express Entry or PNP</li>
                                    <li>Prepare and submit required documents</li>
                                    <li>Receive your Invitation to Apply (ITA) or work permit approval</li>
                                    <li>Complete medical exams, police checks, and biometrics</li>
                                </ol>
                                <p>
                                    Each immigration stream has different processing times, and requirements can change frequently. Staying informed about updates from Immigration, Refugees, and Citizenship Canada (IRCC) is crucial. Our consultancy ensures that you are up-to-date with the latest regulations and requirements, minimizing delays and maximizing your chances of success.
                                </p>
                                <ul className="list-group">
                                    <li className="list-group-item">Express Entry Programs</li>
                                    <li className="list-group-item">Provincial Nominee Programs (PNP)</li>
                                    <li className="list-group-item">Family Sponsorship</li>
                                    <li className="list-group-item">Work and Study Permits</li>
                                    <li className="list-group-item">Business Immigration Programs</li>
                                </ul>
                                <p>
                                    As a prospective immigrant, you must meet various eligibility criteria depending on the immigration program you choose. Our consultants provide the necessary support, ensuring that you submit a complete and accurate application. This includes helping you gather the correct documentation, advising on points requirements, and guiding you through biometrics and background checks.
                                </p>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Immigration Program</th>
                                            <th>Eligibility Criteria</th>
                                            <th>Processing Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Express Entry</td>
                                            <td>Skilled workers with work experience, language proficiency, and education</td>
                                            <td>6 months</td>
                                        </tr>
                                        <tr>
                                            <td>Provincial Nominee Program (PNP)</td>
                                            <td>Nomination from a province based on job offer or skills in demand</td>
                                            <td>9-12 months</td>
                                        </tr>
                                        <tr>
                                            <td>Family Sponsorship</td>
                                            <td>Sponsoring spouse, children, or parents</td>
                                            <td>12-24 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImmigrationDetails;