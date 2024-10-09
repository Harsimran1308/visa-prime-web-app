import {React, useEffect} from "react";
import './HomeNews.css';

const HomeNews = () => {
    // Sample data array
  const newsData = [
    {
        id: 1,
        imgSrc: "/img/Newsletter/immigration-policies-uncertainity-news.jpg",
        author: "Jas Dhaliwal",
        date: "5 September, 2024",
        description: "Canada's evolving immigration policies are creating uncertainty for international students",
        redirectUrl: "/newsletter-september-2024"
      },
      {
        id: 2,
        imgSrc: "/img/Newsletter/measure-combat-fraud-in-immigration.jpg",
        author: "Puneet Othi",
        date: "6 August, 2024",
        description: "New Measures to combat fraud in Temporary Foreign Worker Program",
        redirectUrl: "/newsletter-august-2024"
      },
      {
        id: 3,
        imgSrc: "/img/Newsletter/immigration-backlog-increase-news.jpg",
        author: "Mary Anne",
        date: "5 July, 2024",
        description: "Immigration backlog starts increasing again",
        redirectUrl: "/newsletter-july-2024"
      },
      {
        id: 4,
        imgSrc: "/img/Newsletter/alberta-immigration-streams.jpg",
        author: "Mary Anne",
        date: "3 June, 2024",
        description: "New approach for Alberta Streams and Pathways Miller Issues Statement on International Students",
        redirectUrl: "/newsletter-june-2024"
      },
  ];

    useEffect(() => {
        // Ensure jQuery is available and the DOM is fully rendered
        const $ = window.jQuery;
        if ($) {
            $(".latest-news-carousel").owlCarousel({
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
            <div className="container-fluid contact latest-news overflow-hidden pb-5">
            <div className="container pb-5">
                <div className="office pt-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Immigration News</h5>
                        </div>
                        <h1 className="display-5 mb-4">This Month in Canadian Immigration</h1>
                        <p className="mb-0">VisaPrime’s Newsletters are tailored every month with latest Updates in Canadian Immigration. Subscribe today and never miss an Immigration Update.</p>
                    </div>
                    <div class="latest-news-carousel owl-carousel wow fadeInUp" data-wow-delay="0.1s">
                    {newsData.map((news) => (
                        <div class="latest-news-item" key={news.id}>
                            <div class="bg-light rounded">
                                <div class="rounded-top overflow-hidden">
                                    <img src={news.imgSrc} class="img-zoomin img-fluid rounded-top w-100" alt=""/>
                                </div>
                                <div class="d-flex flex-column p-4">
                                    <a href={news.redirectUrl} class="h4">{news.description}</a>
                                    <div class="d-flex justify-content-between">
                                        <a class="small text-body link-hover">by {news.author}</a>
                                        <small class="text-body d-block"><i class="fas fa-calendar-alt me-1"></i>{news.date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <a className="btn btn-primary border-secondary rounded-pill py-3 px-5" href="/latest-news">View More</a>
            </div>
        </div>
        </div>
    )
}

export default HomeNews;