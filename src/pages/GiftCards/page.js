import "./giftcards.css"

export default function GiftCards(params) {
    return(
<>  
    <section className="page-hero">
        <div className="container">
            <h1>Gift the Joy of Fermentation</h1>
            <p>Perfect for birthdays, holidays, or introducing someone to the world of probiotic foods.</p>
        </div>
    </section>

    <div className="breadcrumb">
        <div className="container">
            <a href="index.html">Home</a> <span>›</span> <span>Gift Cards</span>
        </div>
    </div>

    <section className="giftcards-page">
        <div className="container">
            <div className="giftcard-hero">
                <h2>Choose the Perfect Amount</h2>
                <p>Digital gift cards delivered instantly via email. Redeemable on any fermentation kit or supply.</p>
            </div>

            <div className="giftcard-options">
                <div className="options-grid">
                    <div className="giftcard-item">
                        <div className="giftcard-image">
                            <i className="fas fa-gift"></i>
                        </div>
                        <div className="giftcard-content">
                            <h3>Starter Gift</h3>
                            <div className="giftcard-price">$25</div>
                            <p>Perfect for trying a new culture or essential supplies</p>
                            <a href="#" className="btn">Select $25</a>
                        </div>
                    </div>

                    <div className="giftcard-item">
                        <div className="giftcard-image">
                            <i className="fas fa-gift"></i>
                        </div>
                        <div className="giftcard-content">
                            <h3>Popular Choice</h3>
                            <div className="giftcard-price">$50</div>
                            <p>Great for a complete starter kit or multiple supplies</p>
                            <a href="#" className="btn">Select $50</a>
                        </div>
                    </div>

                    <div className="giftcard-item">
                        <div className="giftcard-image">
                            <i className="fas fa-gift"></i>
                        </div>
                        <div className="giftcard-content">
                            <h3>Premium Gift</h3>
                            <div className="giftcard-price">$100</div>
                            <p>Ideal for deluxe kits or a full fermentation setup</p>
                            <a href="#" className="btn">Select $100</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-amount">
                <h3>Custom Amount</h3>
                <p>Enter any amount from $10 to $500. Perfect for that special fermenter in your life.</p>
                <div className="amount-input" />
                    <span>$</span>
                    <input type="number" id="customAmount" placeholder="50" min="10" max="500" value="50" />
                </div>
                <button className="custom-btn" onclick="selectCustomAmount()">Create Custom Gift Card</button>
            </div>

            <div className="giftcard-features">
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3>Instant Delivery</h3>
                        <p>Digital card delivered via email within minutes</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-infinity"></i>
                        </div>
                        <h3>Never Expires</h3>
                        <p>Use anytime, no expiration date</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>Secure & Safe</h3>
                        <p>Unique code, fraud protection</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-redo"></i>
                        </div>
                        <h3>Easy Redemption</h3>
                        <p>Apply at checkout, no extra steps</p>
                    </div>
                </div>
            </div>

            <div className="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2>How It Works</h2>
                        <p>Simple 3-step process to send the perfect fermentation gift</p>
                    </div>
                    <div className="steps-grid">
                        <div className="step-item">
                            <div className="step-number">1</div>
                            <h3>Choose Amount</h3>
                            <p>Select a preset or enter custom amount</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">2</div>
                            <h3>Personalize</h3>
                            <p>Add recipient name and personal message</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">3</div>
                            <h3>Send Instantly</h3>
                            <p>Digital card delivered via email immediately</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="giftcard-preview">
                <div className="preview-container">
                    <div className="preview-header">
                        <h2>Gift Card Preview</h2>
                        <p>See exactly what your recipient will receive</p>
                    </div>
                    <div className="preview-card">
                        <div className="card-header">
                            <div className="card-logo">Culture<span>Craft</span></div>
                            <div className="card-chip"></div>
                        </div>
                        <div className="card-amount">$50.00</div>
                        <div className="card-message">"Happy fermenting! Can't wait to taste your next creation!"</div>
                        <div className="card-footer">
                            <span>Valid: Anytime</span>
                            <span className="card-code">CC-GIFT-8X7K-2M9P</span>
                        </div>
                    </div>
                </div>
            </div>
        
    </section>

    <section className="giftcard-newsletter">
        <div className="container">
            <h2>Never Miss a Gift Opportunity</h2>
            <p>Get reminders for birthdays, holidays, and special fermentation occasions.</p>
            <form className="newsletter-form" action="#" method="POST">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    </>
    )
};
