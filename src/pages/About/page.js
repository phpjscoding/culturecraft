import "./about.css"
export default function About(params) {
    return(
        <>
    <section className="page-hero">
        <div className="container">
            <h1>About CultureCraft</h1>
            <p>Transforming homes into probiotic powerhouses since 2018. We believe everyone deserves access to living,
                fermented foods.</p>
        </div>
    </section>

    <div className="breadcrumb">
        <div className="container">
            <a href="index.html">Home</a> <span>›</span> <span>About</span>
        </div>
    </div>

    <section className="about-page">
        <div className="container">
            <div className="our-story">
                <div className="story-content">
                    <div className="story-text">
                        <h2>From Kitchen Experiments to Global Community</h2>
                        <p>Founded in 2018 by Sarah Chen in her small Portland apartment, CultureCraft began with a
                            simple mission: make home fermentation accessible, sustainable, and fun for everyone.</p>
                        <p>What started as hand-packaged SCOBYs and handwritten recipes has grown into a trusted brand
                            serving over 50,000 fermenters worldwide. Every kit, supply, and guide is crafted with the
                            same care Sarah put into her first batch of kombucha.</p>
                        <p>Today, we're proud to partner with organic farms, use eco-friendly packaging, and support
                            fermentation education in schools. But our core remains unchanged: helping you create
                            living, probiotic-rich foods in your own kitchen.</p>
                    </div>
                    <div className="story-image">
                        <i className="fas fa-seedling"></i>
                    </div>
                </div>
            </div>

            <div className="mission-values">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3>Sustainable Sourcing</h3>
                            <p>Partnering with organic farms and using eco-friendly, recyclable packaging for every
                                product.</p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Education First</h3>
                            <p>Free guides, courses, and community support to ensure your fermentation success.</p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3>Quality Obsessed</h3>
                            <p>Lab-tested cultures, food-grade materials, and rigorous quality control in every batch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline-section">
                <div className="section-header">
                    <h2>Our Journey</h2>
                    <p>Key milestones in making fermentation accessible to all</p>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2018</span>
                            <h3>First SCOBY Shipped</h3>
                            <p>Sarah packages her first kombucha starter kit in a tiny Portland apartment.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2019</span>
                            <h3>1,000 Customers</h3>
                            <p>CultureCraft reaches 1,000 happy fermenters and launches vegetable kits.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2020</span>
                            <h3>Eco-Packaging Launch</h3>
                            <p>Switches to 100% recyclable, plastic-free packaging across all products.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline press">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">2021</span>
                                <h3>Learning Hub Opens</h3>
                                <p>Free educational platform with guides, recipes, and video tutorials launches.</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2023</span>
                            <h3>50,000+ Fermenters</h3>
                            <p>CultureCraft community grows to over 50,000 home fermenters worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-section">
                <div className="section-header">
                    <h2>Meet Our Team</h2>
                    <p>Passionate fermenters dedicated to your success</p>
                </div>
                <div className="team-grid">
                    <div className="team-card">
                        <div className="team-image">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="team-content">
                            <h3>Sarah Chen</h3>
                            <div className="team-role">Founder & CEO</div>
                            <p>Former chef turned fermentation evangelist. Started CultureCraft from her kitchen in
                                2018.</p>
                            <div className="team-social">
                                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-image">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="team-content">
                            <h3>Marcus Johnson</h3>
                            <div className="team-role">Head of Product</div>
                            <p>Microbiologist ensuring every culture meets laboratory-grade standards.</p>
                            <div className="team-social">
                                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-image">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="team-content">
                            <h3>Lisa Park</h3>
                            <div className="team-role">Education Director</div>
                            <p>Creates all learning content and hosts monthly fermentation workshops.</p>
                            <div className="team-social">
                                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-image">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="team-content">
                            <h3>David Ramirez</h3>
                            <div className="team-role">Sustainability Lead</div>
                            <p>Oversees eco-friendly packaging and carbon-neutral shipping initiatives.</p>
                            <div className="team-social">
                                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">Happy Fermenters</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Eco-Packaging</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">8K+</div>
                            <div className="stat-label">Recipes Shared</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Community Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="about-newsletter">
        <div className="container">
            <h2>Stay Connected with CultureCraft</h2>
            <p>Get behind-the-scenes stories, sustainability updates, and exclusive team recipes.</p>
            <form className="newsletter-form" action="#" method="POST">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
        
        </>
    )
};
