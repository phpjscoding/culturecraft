export default function NewsLetter(params) {
    return(
         <section className="newsletter">
        <div className="container">
            <h2>Get Fermentation Tips & Exclusive Offers</h2>
            <p>Join our community of home fermenters and receive weekly recipes, troubleshooting guides, and special discounts.</p>
            <form className="newsletter-form" action="#" method="POST">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
    )
};
