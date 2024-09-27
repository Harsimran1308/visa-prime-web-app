import React,{ useState } from "react";
import './News.css';

const News = () => {
    // Sample data array
  const [newsData] = useState([
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

    const filteredNews = newsData.filter((news) => {
        if (searchTerm === '') {
          // If search term is empty, return all blogs
          return true;
        } else {
          // Filter based on matching tags
          return news.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
      });
    return (
        <div>
            <div className="container-fluid bg-breadcrumb news-page">
                <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Monthly Newsletter</h3>
                </div>
            </div>

            <div class="container-fluid news py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                        <h1 class="display-4 mb-4">News and Updates</h1>
                        <p class="mb-0">Stay informed with the latest Canadian immigration policies, programs, and requirements. Whether you're tracking changes in visa rules, new pathways for permanent residency, or updates on work permits and citizenship, we provide you with timely and accurate information to help you navigate your immigration journey.
                        </p>
                    </div>
                    <div class="row g-4 justify-content-center">
                        {/* Render filtered blogs */}
                        {filteredNews.length > 0 ? (
                            filteredNews.map((news,index) => (
                                <div class="latest-news-item col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s" key={news.id}>
                                    <div class="bg-light rounded">
                                        <div class="rounded-top overflow-hidden">
                                            <img src={news.imgSrc} class="img-zoomin img-fluid rounded-top w-100" alt=""/>
                                        </div>
                                        <div class="d-flex flex-column p-4">
                                            <a href={news.redirectUrl} class="h4">{news.description}</a>
                                            <div class="d-flex justify-content-between">
                                                <a href="#" class="small text-body link-hover">by {news.author}</a>
                                                <small class="text-body d-block"><i class="fas fa-calendar-alt me-1"></i>{news.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No News found for the search term.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;