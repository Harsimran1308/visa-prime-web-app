import { React, useEffect } from "react";
import "./HomeBlog.css";

const HomeBlog = () => {
  // Sample data array
  const blogData = [
    {
      id: 1,
      imgSrc: "img/Blogs/Federal Immigration Caps Raise Alarms.png",
      author: "Ketan Khaira",
      date: "20 April, 2025",
      title:
        "Federal Immigration Caps Raise Alarms",
      description:
        "Pierre Poilievre and Mark Carney appear to be approaching immigration differently on the campaign trail—but beneath the rhetoric, both are backing a continued slowdown in immigration levels, including cuts to temporary foreign workers and international students.",
      redirectURl: "/federal-immigration-caps",
    },
    {
      id: 2,
      imgSrc: "img/Blogs/Ontario Colleges Cut Programs Amid Growing Financial Crisis.png",
      author: "Puneet Othi",
      date: "20 April, 2025",
      title:
        "Ontario Colleges Cut Programs",
      description:
        "Public colleges across Ontario are making urgent and sweeping program cuts as a financial crisis deepens across the sector. Dozens of diploma and certificate programs are being suspended—from business and creative arts to tourism, technology, and esthetics—as institutions like Algonquin, George Brown, Mohawk, St. Lawrence, and Centennial move to rein in costs before the 2025-26 budget year.",
      redirectURl: "/canadian-colleges-cut-programs",
    },
    {
      id: 3,
      imgSrc: "img/Blogs/made-in-canada.png",
      author: "Ketan Khaira",
      date: "20 Feb, 2025",
      title:
        "Made in Canada - By Foriegn Workers",
      description:
        "Canada’s economy thrives on hard work, dedication, and innovation. From bustling urban centers to small-town bakeries, many of the products we love are made possible by foreign workers who have chosen Canada as their new home. However, recent changes to immigration programs are threatening their ability to stay and continue contributing to the workforce",
      redirectURl: "/made-in-canada",
    },
    {
      id: 4,
      imgSrc: "img/Blogs/Canada's-Immigration-U-Turn.png",
      author: "Puneet Othi",
      date: "20 Jan, 2025",
      title:
        "Canada's Immigration U-Turn",
      description:
        "On July 26, 2023, Marc Miller assumed the position of Minister of Immigration, Refugees and Citizenship after replacing Sean Fraser. His appointment marked the beginning of a series of significant changes in Canada’s immigration policies. Below is a recap of the key actions and shifts that have taken place under his leadership, illustrating how swiftly these changes were implemented:",
      redirectURl: "/canada-immigration-uturn",
    }
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
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
    }
  }, []);
  return (
    <div>
      <div className="container-fluid contact blog overflow-hidden pb-5">
        <div className="container pb-5">
          <div className="office pt-5">
            <div
              className="section-title text-center mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style">
                <h5 className="sub-title text-primary px-3">Blogs</h5>
              </div>
              <h1 className="display-5 mb-4">Check Our Blogs</h1>
              <p className="mb-0">
                Explore our blogs for the latest updates, expert insights, and
                answers to common immigration inquiries. Stay informed about
                Canadian immigration policies, visa processes, and more to guide
                your journey.
              </p>
            </div>
            <div
              className="owl-carousel blog-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {blogData.map((blog) => (
                <div className="blog-item blog-container-info" key={blog.id}>
                  <img
                    src={blog.imgSrc}
                    className="img-fluid w-100 rounded-top blog-img-info"
                    alt=""
                  />
                  <div className="rounded-bottom bg-light blog-data-info">
                    <div className="d-flex justify-content-between p-4 pb-2">
                      <span className="pe-2 text-dark">
                        <i className="fa fa-user me-2"></i>By {blog.author}
                      </span>
                      <span className="text-dark">
                        <i className="fas fa-calendar-alt me-2"></i>
                        {blog.date}
                      </span>
                    </div>
                    <div className="px-4 pb-0">
                      <h4>{blog.title}</h4>
                      <p className="truncate-text">{blog.description}</p>
                    </div>
                    <div class="feature-content d-flex flex-column">
                      <a
                        class="btn btn-secondary rounded-pill"
                        href={blog.redirectURl}
                      >
                        Read More<i class="fas fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <a
            className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
            data-wow-delay="0.1s"
            href="/blogs"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
