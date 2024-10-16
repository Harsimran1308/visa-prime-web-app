import React from "react";
import './StaffingServices.css'

const StaffingServices = () => {
    const serviceDetailsData= [
        {
            id: 1,
            name: "Local Recruitment",
            description: "Finding the right talent for labor roles is essential for businesses, especially when navigating immigration processes. We specialize in connecting you with skilled workers locally, ensuring a smooth recruitment process that meets your staffing needs and supports your business growth.",
            imgSrc: "/img/admin-office-clerk.jpg",
            urlRedirect:"/local-recruitment"
        },
        {
            id: 2,
            name: "Temporary Foreign Worker",
            description: "Navigating the Temporary Foreign Worker program can be complex, but we’re here to simplify it for you. Whether you're facing labor shortages in industries like agriculture, hospitality, construction, manufacturing, or retail, we specialize in connecting businesses with skilled international workers.",
            imgSrc: "img/temporary-foriegn-worker.jpg",
            urlRedirect:"/temporary-foriegn-worker"
        },
    ]
    const faqs = [
        {
            id: 1,
            headerId: "headingOne",
            colapseId: "collapseOne",
            question: "How can staffing solutions help employers hire foreign workers?",
            answer: "Staffing solutions streamline the process of finding qualified foreign workers by handling recruitment, compliance with immigration laws, and managing LMIA applications. This ensures employers meet all requirements when hiring internationally."
        },
        {
            id: 2,
            headerId: "headingTwo",
            colapseId: "collapseTwo",
            question: "What is an LMIA, and why is it important in staffing solutions?",
            answer: "An LMIA (Labour Market Impact Assessment) is a document that an employer may need to hire a foreign worker. It proves there are no Canadians available for the job. Staffing agencies assist employers in obtaining LMIAs to ensure compliance with immigration policies."
        },
        {
            id: 3,
            headerId: "headingThree",
            colapseId: "collapseThree",
            question: "Can staffing agencies assist with temporary foreign workers in Canada?",
            answer: "Yes, staffing agencies help employers recruit temporary foreign workers by managing work permit applications, LMIA processes, and ensuring all immigration regulations are followed for a smooth hiring process."
        },
        {
            id: 4,
            headerId: "headingFour",
            colapseId: "collapseFour",
            question: "How long does it take to hire foreign workers through staffing solutions?",
            answer: "The timeline for hiring foreign workers depends on factors like obtaining an LMIA, work permit processing, and visa approval. Typically, the process can take anywhere from a few weeks to several months, depending on the complexity of the case."
        }        
    ]
    return (
        <div>
            <div className="container-fluid bg-breadcrumb staffing-solution-page">
                <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Staffing Solutions</h3>
                </div>
            </div>
            <div class="container-fluid service-page py-5">
            <div class="container py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 class="text-primary">Our Services</h4>
                    <h1 class="display-4 mb-4">Top Staffing Solutions for Your Business Needs</h1>
                    <p class="mb-0">No matter which staff, we can find the people you need — as soon as you need them. All in a day’s work. We do interview, payroll, HR and save you a ton of time and money.
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
                            <p class="mb-4">Find answers to frequently asked questions about hiring foreign workers, LMIA applications, and how staffing solutions can help streamline your recruitment process. Get the information you need for efficient and compliant hiring.
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

export default StaffingServices;