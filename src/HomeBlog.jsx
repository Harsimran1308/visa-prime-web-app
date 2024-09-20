import {React, useEffect} from "react";
import './HomeBlog.css';

const HomeBlog = () => {
    // Sample data array
  const blogData = [
    {
      id: 1,
      imgSrc: "img/blog-1.jpg",
      author: "Ketan",
      date: "10 September, 2024",
      title: "How to get an Express Entry",
      description: "Apply for express entry with the CRS score.",
    },
    {
      id: 2,
      imgSrc: "img/blog-2.jpg",
      author: "Ketan",
      date: "12 March, 2024",
      title: "Apply for study permit",
      description: "Apply for study permit",
    },
    {
        id: 3,
        imgSrc: "img/blog-3.jpg",
        author: "Ketan",
        date: "1 August, 2024",
        title: "Get an LMIA",
        description: "Get an Labour Market assessment application and apply for work permit",
    },
    {
    id: 4,
    imgSrc: "img/blog-4.jpg",
    author: "Ketan",
    date: "30 August, 2024",
    title: "Get Canadian Citizenship",
    description: "Apply for canadian citizenship and become canadian",
    },
  ];

    useEffect(() => {
        // Ensure jQuery is available and the DOM is fully rendered
        const $ = window.jQuery;
        if ($) {
            $(".blog-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: false,
                dots: false,
                loop: true,
                margin: 50,
                nav : true,
                navText : [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:2
                    },
                    1200:{
                        items:3
                    }
                }
            });
        }
      }, [])
    return (
        <div>
            <div className="container-fluid contact blog overflow-hidden pb-5">
            <div className="container py-5">
                <div className="office pt-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Blogs</h5>
                        </div>
                        <h1 className="display-5 mb-4">Check Our Blogs</h1>
                        <p className="mb-0">Explore our blogs for the latest updates, expert insights, and answers to common immigration inquiries. Stay informed about Canadian immigration policies, visa processes, and more to guide your journey.</p>
                    </div>
                    <div className="owl-carousel blog-carousel wow fadeInUp" data-wow-delay=".5s">
                    {blogData.map((blog) => (
                        <div className="blog-item blog-container-info" key={blog.id}>
                        <img src={blog.imgSrc} className="img-fluid w-100 rounded-top blog-img-info" alt=""/>
                         <div className="rounded-bottom bg-light blog-data-info">
                            <div className="d-flex justify-content-between p-4 pb-2">
                                <span className="pe-2 text-dark"><i className="fa fa-user me-2"></i>By {blog.author}</span>
                                <span className="text-dark"><i className="fas fa-calendar-alt me-2"></i>{blog.date}</span>
                            </div>
                            <div className="px-4 pb-0">
                                <h4>{blog.title}</h4>
                                <p>{blog.description}</p>
                            </div>
                                <div class="feature-content d-flex flex-column">
                                    <a class="btn btn-secondary rounded-pill" href="#">Read More<i class="fas fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                     </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s" href="/blogs">View More</a>
            </div>
        </div>
        </div>
    )
}

export default HomeBlog;