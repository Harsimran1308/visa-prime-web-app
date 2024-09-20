import React,{ useState } from "react";

const Blogs = () => {
    // Sample data array
  const [blogs] = useState([
    {
        id: 1,
        imgSrc: "img/blog-1.jpg",
        author: "Ketan",
        date: "10 September, 2024",
        title: "How to get an Express Entry",
        description: "Apply for express entry with the CRS score.",
        tags: ["Express Entry", "EE", "CRS", "CRS Score"],
        redirectSource: "/immigration-details"
        },
        {
        id: 2,
        imgSrc: "img/blog-2.jpg",
        author: "Ketan",
        date: "12 March, 2024",
        title: "Apply for study permit",
        description: "Apply for study permit.",
        tags:["study permit", "student permit"],
        redirectSource: "/immigration-details"
        },
        {
            id: 3,
            imgSrc: "img/blog-3.jpg",
            author: "Ketan",
            date: "1 August, 2024",
            title: "Get an LMIA",
            description: "Get an Labour Market assessment application and apply for work permit.",
            tags:["LMIA", "work permit"],
            redirectSource: "/immigration-details"
        },
        {
            id: 4,
            imgSrc: "img/blog-4.jpg",
            author: "Ketan",
            date: "30 August, 2024",
            title: "Get Canadian Citizenship",
            description: "Apply for canadian citizenship and become canadian",
            tags:["citizenship", "canadian"],
            redirectSource: "/immigration-details"
        },
        {
            id: 5,
            imgSrc: "img/blog-1.jpg",
            author: "Ketan",
            date: "30 August, 2024",
            title: "Get Canadian Citizenship",
            description: "Apply for canadian citizenship and become canadian",
            tags:["citizenship", "canadian"],
            redirectSource: "/immigration-details"
        },
        {
            id: 6,
            imgSrc: "img/blog-3.jpg",
            author: "Ketan",
            date: "30 August, 2024",
            title: "Get Canadian Citizenship",
            description: "Apply for canadian citizenship and become canadian",
            tags:["citizenship", "canadian"],
            redirectSource: "/immigration-details"
        },
  ])
    // Search input state
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBlogs = blogs.filter((blog) => {
        if (searchTerm === '') {
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
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Blogs</h3>
                </div>
            </div>

            <div class="container-fluid blog py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                        <h1 class="display-4 mb-4">News And Updates</h1>
                        <p class="mb-0">Stay informed with the latest news and updates on Canadian immigration policies, programs, and requirements. Whether you're tracking changes in visa rules, new pathways for permanent residency, or updates on work permits and citizenship, this section provides timely and accurate information to help you navigate your immigration journey.
                        </p>
                    </div>
                    <div class="row g-4 justify-content-center">
                        {/* Render filtered blogs */}
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog,index) => (
                                <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s" key={index}>
                                    <div className="blog-item blog-container-info">
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
                                                <a class="btn btn-secondary rounded-pill" href={blog.redirectSource}>Read More<i class="fas fa-arrow-right ms-2"></i></a>
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
    )
}

export default Blogs;