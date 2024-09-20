import React from "react";

const ImmigrationServices = () => {
    const serviceDetailsData= [
        {
            id: 1,
            name: "Express Entry",
            description: "Fast-track your immigration to Canada through the Express Entry system. Ideal for skilled workers seeking Permanent Residency. Learn how to improve your CRS score for quick approval.",
            imgSrc: "/img/service-1.jpg",
            urlRedirect:"/express-entry"
        },
        {
            id: 2,
            name: "Provisional Nominee",
            description: "Increase your chances of Canadian immigration with the Provincial Nominee Program (PNP). Tailored for candidates with specific provincial job offers. Find out the eligibility criteria for different provinces.",
            imgSrc: "/img/service-2.jpg",
            urlRedirect:"/provisional-nominee"
        },
        {
            id: 3,
            name: "LMIA",
            description: "Secure a job offer in Canada through the Labour Market Impact Assessment (LMIA). Essential for employers hiring foreign workers. Understand the LMIA process and boost your work permit approval.",
            imgSrc: "/img/service-1.jpg",
            urlRedirect:"/lmia"
        },
        {
            id: 4,
            name: "Permanent Residence",
            description: "Become a Permanent Resident of Canada through various immigration streams. Explore pathways like Express Entry, PNP, and Family Sponsorship. Start your journey to PR status today.",
            imgSrc: "/img/service-2.jpg",
            urlRedirect:"/permanent-residence"
        },
        {
            id: 5,
            name: "Work Permit",
            description: "Work legally in Canada with a valid Work Permit. Whether through LMIA, intra-company transfer, or other programs, we guide you through the application process. Find the best route to get your permit.",
            imgSrc: "/img/service-1.jpg",
            urlRedirect:"/work-permit"
        },
        {
            id: 6,
            name: "Family Sponsorship",
            description: "Bring your loved ones to Canada through the Family Sponsorship program. Help your spouse, children, or parents join you as Permanent Residents. Understand the steps to successful sponsorship.",
            imgSrc: "/img/service-2.jpg",
            urlRedirect:"/family-sponsorship"
        },
        {
            id: 7,
            name: "Study Permit",
            description: "Study in Canada’s world-class educational institutions with a Study Permit. Learn about eligibility, document requirements, and pathways to Permanent Residency after graduation.",
            imgSrc: "/img/service-1.jpg",
            urlRedirect:"/study-permit"
        },
        {
            id: 8,
            name: "Visitor Visa",
            description: "Explore Canada as a tourist, visit family, or attend business meetings with a Visitor Visa. Get details on application requirements, duration, and tips for a smooth entry into the country.",
            imgSrc: "/img/service-2.jpg",
            urlRedirect:"/visitor-visa"
        },
        {
            id: 9,
            name: "Citizenship",
            description: "Take the final step in your Canadian immigration journey by applying for Citizenship. Learn the eligibility criteria, process, and benefits of becoming a Canadian citizen.",
            imgSrc: "/img/service-1.jpg",
            urlRedirect:"/citizenship"
        }
    ]
    const faqs = [
        {
            id:1,
            headerId:"headingOne",
            colapseId:"collapseOne",
            question:"How can I apply for Permanent Residency in Canada?",
            answer:"You can apply for Permanent Residency through several programs, including Express Entry, the Provincial Nominee Program (PNP), and Family Sponsorship. Each program has specific eligibility requirements based on factors like work experience, education, and family connections."
        },
        {
            id:2,
            headerId:"headingTwo",
            colapseId:"collapseTwo",
            question:"What is the difference between Express Entry and the Provincial Nominee Program (PNP)?",
            answer:"Express Entry is a federal system for skilled workers, while the PNP allows provinces to nominate candidates based on local labor market needs. Both offer pathways to Permanent Residency, but PNPs give priority to applicants with ties to specific provinces."
        },
        {
            id:3,
            headerId:"headingThree",
            colapseId:"collapseThree",
            question:"Do I need an LMIA to work in Canada?",
            answer:"In most cases, a Labour Market Impact Assessment (LMIA) is required for employers to hire foreign workers, proving there are no qualified Canadians available for the job. Some work permits, like intra-company transfers, may be exempt from LMIA requirements."
        },
        {
            id:4,
            headerId:"headingFour",
            colapseId:"collapseFour",
            question:"How long does it take to get Canadian citizenship?",
            answer:"To apply for Canadian citizenship, you must have been a Permanent Resident for at least 3 years within the last 5 years. The processing time for citizenship applications can vary, typically taking around 12 months."
        }
    ]
    return (
        <div>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Immigrate To Canada</h3>
                </div>
            </div>
            <div class="container-fluid service-page py-5">
            <div class="container py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 class="text-primary">Our Services</h4>
                    <h1 class="display-4 mb-4">We Provide Best Immigration Services</h1>
                    <p class="mb-0">At VisaPrime, we offer a full range of immigration services, including Express Entry, Provincial Nominee Programs, Work Permits, Permanent Residency, Citizenship, Study Permits, and Family Sponsorship. Our team provides expert guidance to make your Canadian immigration journey smooth and successful.
                    </p>
                </div>
                <div class="row g-4 justify-content-center">
                {serviceDetailsData.map((service) => (
                   <div class="col-md-12 col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-page-item">
                        <div class="service-page-img">
                            <img src={service.imgSrc} class="img-fluid rounded-top w-100" alt=""/>
                        </div>
                        <div class="service-page-content p-4">
                            <div class="service-page-content-inner">
                                <a href="#" class="d-inline-block h4 mb-4">{service.name}</a>
                                <p class="mb-4">{service.description}</p>
                                <a class="btn btn-primary rounded-pill py-2 px-4" href={service.urlRedirect}>Explore More</a>
                            </div>
                        </div>
                    </div>
                </div> 
                ))}
                </div>
            </div>
            </div>
            {/* FAQ Section */}
            <div class="container-fluid faq-section bg-light py-5">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <h4 class="text-primary">Some Important FAQ's</h4>
                            <h1 class="display-4 mb-4">Common Frequently Asked Questions?</h1>
                            <p class="mb-4">Find answers to the most common questions about our immigration services. From Permanent Residency to work permits and LMIA, our FAQs provide quick solutions to help you navigate the Canadian immigration process easily.
                            </p>
                            <a class="btn btn-primary py-3 px-5" href="/contact">Have Any Questions</a>
                        </div>
                        <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                            <div class="h-100">
                                <div class="accordion" id="accordionExample">
                                {faqs.map((faq) => (
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id={faq.headerId}>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#"+faq.colapseId} aria-controls="collapseOne">
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div id={faq.colapseId} class="accordion-collapse collapse" aria-labelledby={faq.headerId} data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                               {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default ImmigrationServices;