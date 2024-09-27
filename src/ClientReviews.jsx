import React, {useEffect, useRef} from "react";

const ClientReviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?25c02ce243667415985cdbe9fc';
        script.defer = true;
        script.async = true;
    
        // Add the TrustIndex script into a specific div by ID
        const targetDiv = document.getElementById('trustindex-widget');
        if (targetDiv) {
          targetDiv.appendChild(script);
        }
    
        // Cleanup to remove the script when the component unmounts
        return () => {
          if (targetDiv) {
            targetDiv.removeChild(script);
          }
        };
      }, []);
    
    return(
        <div className="container-fluid testimonial overflow-hidden">
            <div className="container py-5">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-primary px-3">OUR CLIENTS RIVIEWS</h5>
                    </div>
                    <h1 className="display-5 mb-4">What Our Clients Say</h1>
                    <p className="mb-0">Discover real experiences from our clients who have successfully navigated their Canadian immigration journey with our expert support. Read their reviews to understand how our personalized services can help you achieve your immigration goals.</p>
                </div>
                <div id="trustindex-widget"></div>
            </div>
        </div>
    )
}

export default ClientReviews;