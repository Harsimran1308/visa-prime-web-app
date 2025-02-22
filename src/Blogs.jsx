import React, { useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  // Sample data array
  const [blogs] = useState([
    {
      id: 1,
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
      id: 2,
      imgSrc: "img/Blogs/Canada's-Immigration-U-Turn.png",
      author: "Puneet Othi",
      date: "20 Jan, 2025",
      title:
        "Canada's Immigration U-Turn",
      description:
        "On July 26, 2023, Marc Miller assumed the position of Minister of Immigration, Refugees and Citizenship after replacing Sean Fraser. His appointment marked the beginning of a series of significant changes in Canada’s immigration policies. Below is a recap of the key actions and shifts that have taken place under his leadership, illustrating how swiftly these changes were implemented:",
        redirectURl: "/canada-immigration-uturn",
    },
  {
    id: 3,
    imgSrc: "img/Blogs/Trump-Affect-Canadian-Immigration.jpg",
    author: "Ketan Khaira",
    date: "20 Jan, 2024",
    title:
      "Trump's Policies Affect Canadian Immigration",
    description:
      "As of January 20, 2025, President Donald J. Trump has officially been sworn in for his second term. His approach to trade and immigration promises to create significant challenges for Canada. With his aggressive stance on imposing tariffs and reshaping international relations, Trump’s policies are set to ripple across borders. For Canada, these policies could change the landscape of immigration and economic dynamics.",
    redirectURl: "/trump-policies-canadian-immigration",
  },
    {
      id: 4,
      imgSrc: "img/Blogs/Alberta-immigration.png",
      author: "Mary Anne",
      date: "7 December, 2024",
      title:
        "Alberta's 2024 EOI Draws for Immigration",
      description:
        "In 2024, Alberta introduced a new EOI system for managing applications through the Alberta Immigrant Nominee Program (AINP). This system replaces the previous first-come, first-served approach with a more structured process, where candidates are ranked based on a variety of factors such as their job offer, work experience, education, and language skills.",
        redirectURl: "/alberta-immigration-draws",
    },
  {
    id: 5,
    imgSrc: "img/Blogs/Alberta-rural-immigration.png",
    author: "Puneet Othi",
    date: "7 December, 2024",
    title:
      "The Future of Alberta’s Rural Communities",
    description:
      "Canada’s Rural Renewal Stream has been a crucial immigration pathway designed to support rural communities, helping them grow economically and socially. It has been a vital tool for smaller towns across Canada that face labor shortages and population decline. However, recent changes in Canada’s immigration policies, particularly in Alberta, have introduced new challenges for rural areas.",
      redirectURl: "/alberta-rural-immigration",
  },
    {
      id: 6,
      imgSrc: "img/Blogs/Canada-Study-Permit-New-Rules.png",
      author: "Ketan Khaira",
      date: "25 November, 2024",
      title:
        "New Post-Graduation Work Permit Requirements for 2025",
      description:
        "Canada continues to be a top destination for international students, offering a welcoming environment, high-quality educational institutions, and the potential for work or immigration opportunities post-graduation. With an increasing number of students choosing Canada for their studies, it is crucial that the International Student Program (ISP) remains sustainable and fair.",
      redirectURl: "/new-pgwp-changes",
      tags: ["pgpw", "study permit"],
    },
    {
      id: 7,
      imgSrc: "img/Blogs/pgwp-changes.jpg",
      author: "Ketan Khaira",
      date: "16 October, 2024",
      title: "PGWP Changes in 2024: What you need to Know",
      description:
        "The recent changes to Canada’s Post-Graduation Work Permit (PGWP) program are reshaping the landscape for international students. If you’re planning to study in Canada or are currently enrolled, understanding these changes and their potential impact on your future career is crucial. This blog post will break down the PGWP changes, explore the programs students should consider, and highlight potential pitfalls to avoid.",
      tags: ["pgpw", "study permit"],
      redirectURl: "/pgwp-changes",
    },
    {
      id: 8,
      imgSrc: "img/Blogs/tfwp-changes.jpg",
      author: "Ketan Khaira",
      date: "10 October, 2024",
      title: "Changes in the Temporary Foreign Worker Program",
      description:
        "How Changes in the Temporary Foreign Worker Program Will Impact Businesses in Edmonton and Alberta: A Closer Look at LMIA Changes",
      tags: ["tfwp", "canada"],
      redirectURl: "/tfwp-changes",
    },
  ]);
  // Search input state
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    if (searchTerm === "") {
      // If search term is empty, return all blogs
      return true;
    } else {
      // Filter based on matching tags
      return blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });
  return (
    <div>
      <div className="container-fluid bg-breadcrumb blogs-page">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Blogs
          </h3>
        </div>
      </div>

      <div class="container-fluid blog py-5">
        <div class="container py-5">
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h1 class="display-4 mb-4">Latest Immigration Information</h1>
            <p class="mb-0">
              Stay informed with the latest Canadian immigration policies,
              programs, and requirements. Whether you're tracking changes in
              visa rules, new pathways for permanent residency, or updates on
              work permits and citizenship, we provide you with timely and
              accurate information to help you navigate your immigration
              journey.
            </p>
          </div>
          <div class="row g-4 justify-content-center">
            {/* Render filtered blogs */}
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div
                  class="col-lg-6 col-xl-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                  key={index}
                >
                  <div className="blog-item blog-container-info">
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
                </div>
              ))
            ) : (
              <p>No blogs found for the search term.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
