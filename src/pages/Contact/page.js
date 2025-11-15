import "./contact.css"
export default function Contact(params) {
    return(
       <>
       <section class="page-hero">
        <div class="container">
            <h1>Get In Touch</h1>
            <p>We're here to help you succeed with every fermentation project. Orders, troubleshooting, wholesale —
                we've got you covered.</p>
        </div>
    </section>

    <div class="breadcrumb">
        <div class="container">
            <a href="index.html">Home</a> <span>›</span> <span>Contact</span>
        </div>
    </div>

    <section class="contact-page">
        <div class="container">
            <div class="contact-intro">
                <h2>Multiple Ways to Reach Us</h2>
                <p>Choose the best method for your needs. We respond to every inquiry within 24 hours.</p>
            </div>

            <div class="contact-methods">
                <div class="methods-grid">
                    <div class="method-card">
                        <div class="method-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h3>Email Support</h3>
                        <p>Fastest way to reach our fermentation experts for troubleshooting and questions.</p>
                        <a href="mailto:hello@culturecraft.com" class="contact-link">hello@culturecraft.com</a>
                    </div>

                    <div class="method-card">
                        <div class="method-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <h3>Phone Support</h3>
                        <p>Call our team Monday-Friday for immediate assistance with orders and shipping.</p>
                        <a href="tel:+1-503-555-0198" class="contact-link">+1 (503) 555-0198</a>
                    </div>

                    <div class="method-card">
                        <div class="method-icon">
                            <i class="fas fa-comments"></i>
                        </div>
                        <h3>Live Chat</h3>
                        <p>Instant help 24/7 through our AI assistant, or connect to a human during business hours.</p>
                        <a href="#" class="contact-link btn btn-secondary">Start Chat</a>
                    </div>
                </div>
            </div>

            <div class="contact-form-section">
                <div class="form-container">
                    <div class="form-header">
                        <h2>Send Us a Message</h2>
                        <p>Describe your fermentation project or question. We'll get back to you within 24 hours.</p>
                    </div>
                    <form id="contactForm">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone (Optional)</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select id="subject" name="subject" required>
                                    <option value="">Select a topic</option>
                                    <option value="order">Order & Shipping</option>
                                    <option value="product">Product Questions</option>
                                    <option value="fermentation">Fermentation Help</option>
                                    <option value="wholesale">Wholesale Inquiry</option>
                                    <option value="media">Media/Press</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group full-width">
                            <label for="message">Message</label>
                            <textarea id="message" name="message"
                                placeholder="Tell us about your fermentation project or question..."
                                required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>

            <div class="faq-section">
                <div class="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Common fermentation and order questions — answered</p>
                </div>
                <div class="faq-grid">
                    <div class="faq-item">
                        <div class="faq-question">
                            <span>How long does shipping take?</span>
                            <div class="faq-toggle">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="faq-answer">
                            <p>Orders ship within 1-2 business days. US delivery takes 2-5 days, international 7-14
                                days. Live cultures ship with ice packs Monday-Wednesday only.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span>What if my fermentation fails?</span>
                            <div class="faq-toggle">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="faq-answer">
                            <p>All kits come with our Fermentation Success Guarantee. Contact us within 30 days and
                                we'll send replacement cultures free of charge.</p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span>Do you offer wholesale pricing?</span>
                            <div class="faq-toggle">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="faq-answer">
                            <p>Yes! Retailers and restaurants get 40% off + free shipping on orders over $500. <a
                                    href="#" style={{color: 'var(--secondary)'}}>Contact wholesale@culturecraft.com</a></p>
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span>Is international shipping available?</span>
                            <div class="faq-toggle">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="faq-answer">
                            <p>We ship to 45+ countries. Live cultures ship to US, Canada, UK, EU, Australia, and New
                                Zealand. Supplies ship worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="business-hours">
        <div class="container">
            <h2 style={{fontSize: '2.2rem', marginBottom: '1rem'}}>Business Hours</h2>
            <p style={{opacity: '0.9', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
                Our fermentation experts are available to help you Monday through Friday
            </p>
            <div class="hours-grid">
                <div class="hours-item">
                    <div class="hours-label">Customer Support</div>
                    <div class="hours-time">9AM - 6PM PST</div>
                    <span class="hours-status">Live Chat Available</span>
                </div>
                <div class="hours-item">
                    <div class="hours-label">Phone Support</div>
                    <div class="hours-time">10AM - 4PM PST</div>
                    <span class="hours-status">Call Anytime</span>
                </div>
                <div class="hours-item">
                    <div class="hours-label">Email Response</div>
                    <div class="hours-time">24 Hours</div>
                    <span class="hours-status">Guaranteed Reply</span>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-newsletter">
        <div class="container">
            <h2>Stay Updated</h2>
            <p>Product restocks, new kits, and fermentation tips delivered to your inbox.</p>
            <form class="newsletter-form" action="#" method="POST">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
       </>
    )
};
