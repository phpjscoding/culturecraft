import { SCHEMA_REVIEWS } from "../../schema.js"
export default function Testimonials(params) {
    const content = SCHEMA_REVIEWS.en
    return(
        <section className="testimonials">
        <div className="container">
            <div className="section-header">
                <h2> {content.title} </h2>
                <p> {content.subtitle} </p>
            </div>
            <div className="testimonial-grid">
                {content.reviews.map(review=>  <div className="testimonial">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p> {review.quote} </p>
                    <div className="author">
                        <div className="author-img"></div>
                        <div className="author-info">
                            <h4> {review.author} </h4>
                            <span> {review.role} </span>
                        </div>
                    </div>
                </div>    )}
               
            </div>
        </div>
    </section>
    )
};
