export default function Testimonials(params) {
    return(
        <section className="testimonials">
        <div className="container">
            <div className="section-header">
                <h2>What Our Customers Say</h2>
                <p>Join thousands of happy fermenters crafting healthier foods at home</p>
            </div>
            <div className="testimonial-grid">
                <div className="testimonial">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>"The kombucha kit was incredibly easy to use! My first batch turned out perfectly fizzy and delicious. I've already ordered the vegetable set."</p>
                    <div className="author">
                        <div className="author-img"></div>
                        <div className="author-info">
                            <h4>Sarah M.</h4>
                            <span>Home Fermentation Enthusiast</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>"Finally mastered sourdough thanks to this kit! The active starter and detailed guide made all the difference. My family loves the bread."</p>
                    <div className="author">
                        <div className="author-img"></div>
                        <div className="author-info">
                            <h4>James T.</h4>
                            <span>Amateur Baker</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <p>"Best investment in my health! Making my own fermented foods has improved my digestion and saved me hundreds on store-bought versions."</p>
                    <div className="author">
                        <div className="author-img"></div>
                        <div className="author-info">
                            <h4>Emily R.</h4>
                            <span>Health-Conscious Mom</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};
