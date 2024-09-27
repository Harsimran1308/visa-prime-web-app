import React from "react";
import './VisaCategories.css'

const VisaCategories = () => {
    const categoriesData = [
        {
            id:"1",
            name:"Express Entry",
            redirectUrl:"/express-entry",
            imgSrc:"img/express-entry-home.jpg",
            descrioption:"Express Entry is Canada's fast-track immigration system designed to efficiently process skilled worker applications for permanent residency",
            altImgData:"Express Entry Image"
        },
        {
            id:"2",
            name:"Provinvial Nominee",
            redirectUrl:"/pnp",
            imgSrc:"img/pnp-immigration.jpg",
            descrioption:"The Provincial Nominee Program (PNP) allows Canadian provinces to nominate individuals for permanent residency based on their skills and labor market needs",
            altImgData:"Provincial Nominee Program Photo"
        },
        {
            id:"3",
            name:"Work Permit",
            redirectUrl:"/work-permit",
            imgSrc:"img/work-permit.jpg",
            descrioption:"The work permit program in Canada enables foreign nationals to work legally in the country for a specific employer and duration.",
            altImgData:"Work Permit Photo"
        },
        {
            id:"4",
            name:"Study Permit",
            redirectUrl:"/study-permit",
            imgSrc:"img/study-permit.jpg",
            descrioption:"The study permit program in Canada enables international students to pursue their education at Canadian institutions while offering a pathway to work and potentially permanent residency.",
            altImgData:"Study permit Phot"
        },
        {
            id:"5",
            name:"Permanent Residence",
            redirectUrl:"/express-entry",
            imgSrc:"/img/permanent-residence.jpg",
            descrioption:"Permanent residence in Canada grants individuals the right to live, work, and study in the country indefinitely, with access to most of the benefits of Canadian citizens.",
            altImgData:"Permanent Residence Photo"
        },
        {
            id:"6",
            name:"Tourist Visa",
            redirectUrl:"/express-entry",
            imgSrc:"/img/visitor-visa.jpg",
            descrioption:"A Canadian tourist visa allows visitors to explore Canada for a temporary period while enjoying its diverse attractions and experiences.",
            altImgData:"Visitor Visa Photo"
        }
    ]
    return (
        <div>
            <div className="container-fluid service overflow-hidden pt-5">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Visa Categories</h5>
                        </div>
                        <h1 className="display-5 mb-4">Enabling Your Immigration Successfully</h1>
                        <p className="mb-0">At our consultancy, we are dedicated to enabling your immigration journey with expert guidance and personalized support. From assessing your eligibility to submitting your application and tracking its progress, we ensure a smooth, stress-free experience.</p>
                    </div>
                    <div className="row g-4">
                        {
                            categoriesData.map((category) => (
                                <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="service-inner">
                                            <div className="service-img">
                                                <img src={category.imgSrc} className="img-fluid w-100 rounded" alt={category.altImgData}/>
                                            </div>
                                            <div className="service-title">
                                                <div className="service-title-name">
                                                    <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                                                        <a href="#" className="h4 text-white mb-0">{category.name}</a>
                                                    </div>
                                                    <a className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href={category.redirectUrl}>Explore More</a>
                                                </div>
                                                <div className="service-content pb-4">
                                                    <a href="#"><h4 className="text-white mb-4 py-3">{category.name}</h4></a>
                                                    <div className="px-4">
                                                        <p className="mb-4">{category.descrioption}</p>
                                                        <a className="btn btn-primary border-secondary rounded-pill py-3 px-5" href={category.redirectUrl}>Explore More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaCategories