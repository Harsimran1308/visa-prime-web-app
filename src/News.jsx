import React, { useState } from "react";
import "./News.css";

const News = () => {
  // Sample data array
  const [newsData] = useState([
    {
      id: 16,
      imgSrc: "/img/Newsletter/Updates on Family Sponsorship_Quebec Programs and Policy Shifts.png",
      author: "Ketan Khaira",
      date: "25 July, 2025",
      description:
        "Updates on Family Sponsorship, Quebec Program Pause",
      redirectUrl: "/newsletter-july-2025",
    },
    {
      id: 15,
      imgSrc: "/img/Newsletter/New Brunswick Makes Bold Immigration Moves to Tackle Labour Shortages.png",
      author: "Ketan Khaira",
      date: "20 June, 2025",
      description:
        "New Brunswick's new Immigration Moves",
      redirectUrl: "/newsletter-june-2025",
    },
    {
      id: 14,
      imgSrc: "/img/Newsletter/Rachel Bendayan New Immigration Minister.png",
      author: "Ketan Khaira",
      date: "14 March, 2025",
      description:
        "Canada appoints New Immigration Minister",
      redirectUrl: "/newsletter-march-2025",
    },
  {
    id: 13,
    imgSrc: "/img/Newsletter/Canada-Tightens-Immigration-Rules.png",
    author: "Ketan Khaira",
    date: "20 Feb, 2025",
    description:
      "Canada Tightens Immigration Rules: What You Need to Know",
    redirectUrl: "/newsletter-feb-2025",
  },
    {
      id: 12,
      imgSrc: "/img/Newsletter/Lebanon.png",
      author: "Ketan Khaira",
      date: "1 November, 2024",
      description:
        "Canada’s New Immigration Measures to Support Those Affected by the Lebanon Crisis",
      redirectUrl: "/newsletter-november-2024",
    },
    {
      id: 11,
      imgSrc: "/img/Newsletter/immigration-changes-2024.jpg",
      author: "Puneet Othi",
      date: "25 October, 2024",
      description:
        "Canada Announces Changes to Immigration Levels for 2025-2027",
      redirectUrl: "/newsletter-october-2024",
    },
    {
      id: 1,
      imgSrc: "/img/Newsletter/immigration-policies-uncertainity-news.jpg",
      author: "Jas Dhaliwal",
      date: "5 September, 2024",
      description:
        "Canada's evolving immigration policies are creating uncertainty for international students",
      redirectUrl: "/newsletter-september-2024",
    },
    {
      id: 2,
      imgSrc: "/img/Newsletter/measure-combat-fraud-in-immigration.jpg",
      author: "Puneet Othi",
      date: "6 August, 2024",
      description:
        "New Measures to combat fraud in Temporary Foreign Worker Program",
      redirectUrl: "/newsletter-august-2024",
    },
    {
      id: 3,
      imgSrc: "/img/Newsletter/immigration-backlog-increase-news.jpg",
      author: "Mary Anne",
      date: "5 July, 2024",
      description: "Immigration backlog starts increasing again",
      redirectUrl: "/newsletter-july-2024",
    },
    {
      id: 4,
      imgSrc: "/img/Newsletter/alberta-immigration-streams.jpg",
      author: "Mary Anne",
      date: "3 June, 2024",
      description:
        "New approach for Alberta Streams and Pathways,Miller Issues Statement on International Students",
      redirectUrl: "/newsletter-june-2024",
    },
    {
      id: 5,
      imgSrc: "/img/Newsletter/marc-miller-internation-students.jpg",
      author: "Puneet Othi",
      date: "1 April, 2024",
      description: "Miller Issues Statement on International Students",
      redirectUrl: "/newsletter-april-2024",
    },
    {
      id: 6,
      imgSrc: "/img/Newsletter/aaip-pr-pathway.jpg",
      author: "Jazmine Dulay",
      date: "3 March, 2024",
      description:
        "AAIP Releases Eligibility Requirements for the Latest PR Pathway in Tourism and Hospitality",
      redirectUrl: "/newsletter-march-2024",
    },
    {
      id: 7,
      imgSrc: "/img/Newsletter/healthcare-immigration-plans.jpg",
      author: "Puneet Othi",
      date: "7 November, 2023",
      description:
        "Housing and Healthcare included in 2024-2026 Immigration Plans",
      redirectUrl: "/newsletter-november-2023",
    },
    {
      id: 8,
      imgSrc: "/img/Newsletter/supervisa-canada-immigration.jpg",
      author: "Micah Sotto",
      date: "4 October, 2023",
      description:
        "The Parents and Grandparents 2023 lottery in Canada has begun",
      redirectUrl: "/newsletter-october-2023",
    },
    {
      id: 9,
      imgSrc: "/img/Newsletter/cap-student-visa-immigration.jpg",
      author: "Issa Jabeulena",
      date: "3 September, 2023",
      description:
        "Canada is considering imposing a cap on foreign student visas",
      redirectUrl: "/newsletter-september-2023",
    },
    {
      id: 10,
      imgSrc: "/img/Newsletter/stem-category-immigration-draw.jpg",
      author: "Micah Sotto",
      date: "1 July, 2023",
      description: "Canada held its first draw for STEM Category",
      redirectUrl: "/newsletter-july-2023",
    },
  ]);
  // Search input state
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsData.filter((news) => {
    if (searchTerm === "") {
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
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Monthly Newsletter
          </h3>
        </div>
      </div>

      <div class="container-fluid news py-5">
        <div class="container py-5">
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h1 class="display-4 mb-4">News and Updates</h1>
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
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <div
                  class="latest-news-item col-lg-6 col-xl-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                  key={news.id}
                >
                  <div class="bg-light rounded">
                    <div class="rounded-top overflow-hidden">
                      <img
                        src={news.imgSrc}
                        class="img-zoomin img-fluid rounded-top w-100"
                        alt=""
                      />
                    </div>
                    <div class="d-flex flex-column p-4">
                      <a href={news.redirectUrl} class="h4">
                        {news.description}
                      </a>
                      <div class="d-flex justify-content-between">
                        <a class="small text-body link-hover">
                          by {news.author}
                        </a>
                        <small class="text-body d-block">
                          <i class="fas fa-calendar-alt me-1"></i>
                          {news.date}
                        </small>
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
  );
};

export default News;
