import "./learn.css"
export default function Learn(params) {
    return(
        <>
        <section className="page-hero">
        <div className="container">
            <h1>Master the Art of Fermentation</h1>
            <p>From beginner basics to advanced techniques — learn to create probiotic-rich foods with confidence.</p>
        </div>
    </section>

    <div className="breadcrumb">
        <div className="container">
            <a href="index.html">Home</a> <span>›</span> <span>Learn</span>
        </div>
    </div>

    <section className="learn-page">
        <div className="container">
            <div className="learn-filters">
                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search guides, recipes, troubleshooting..."  />
                </div>
                <select className="filter-select">
                    <option>All Topics</option>
                    <option>Kombucha</option>
                    <option>Sourdough</option>
                    <option>Vegetables</option>
                    <option>Dairy</option>
                    <option>Science</option>
                </select>
                <select className="filter-select">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
            </div>

            <div className="learning-paths">
                <div className="section-header">
                    <h2>Choose Your Learning Path</h2>
                    <p>Structured courses to guide you from novice to fermentation expert</p>
                </div>
                <div className="paths-grid">
                    <div className="path-card">
                        <div className="path-image">
                            <i className="fas fa-wine-bottle"></i>
                        </div>
                        <div className="path-content">
                            <h3>Kombucha Mastery</h3>
                            <p>Complete 6-week course covering SCOBY care, flavoring, carbonation, and troubleshooting.</p>
                            <div className="path-meta">
                                <span><i className="fas fa-clock"></i> 6 weeks</span>
                                <span><i className="fas fa-signal"></i> Beginner</span>
                            </div>
                            <a href="#" className="btn">Start Learning</a>
                        </div>
                    </div>

                    <div className="path-card">
                        <div className="path-image">
                            <i className="fas fa-bread-slice"></i>
                        </div>
                        <div className="path-content">
                            <h3>Sourdough Artisan</h3>
                            <p>Master wild yeast baking: starter maintenance, hydration ratios, scoring, and proofing techniques.</p>
                            <div className="path-meta">
                                <span><i className="fas fa-clock"></i> 8 weeks</span>
                                <span><i className="fas fa-signal"></i> Intermediate</span>
                            </div>
                            <a href="#" className="btn">Start Learning</a>
                        </div>
                    </div>

                    <div className="path-card">
                        <div className="path-image">
                            <i className="fas fa-carrot"></i>
                        </div>
                        <div className="path-content">
                            <h3>Vegetable Fermentation</h3>
                            <p>Learn sauerkraut, kimchi, pickles, and more with salt ratios, packing methods, and flavor profiles.</p>
                            <div className="path-meta">
                                <span><i className="fas fa-clock"></i> 4 weeks</span>
                                <span><i className="fas fa-signal"></i> Beginner</span>
                            </div>
                            <a href="#" className="btn">Start Learning</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="resource-categories">
                <div className="section-header">
                    <h2>Browse by Category</h2>
                    <p>Quick access to recipes, guides, and troubleshooting</p>
                </div>
                <div className="categories-grid">
                    <a href="#" className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-book-open"></i>
                        </div>
                        <h3>Beginner Guides</h3>
                        <p>Step-by-step introductions to fermentation basics</p>
                        <span className="category-count">24 resources</span>
                    </a>

                    <a href="#" className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-utensils"></i>
                        </div>
                        <h3>Recipes</h3>
                        <p>Proven recipes for classNameic and creative ferments</p>
                        <span className="category-count">87 recipes</span>
                    </a>

                    <a href="#" className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-flask"></i>
                        </div>
                        <h3>Science & Safety</h3>
                        <p>Understanding microbiology and food safety</p>
                        <span className="category-count">31 articles</span>
                    </a>

                    <a href="#" className="category-card">
                        <div className="category-icon">
                            <i className="fas fa-wrench"></i>
                        </div>
                        <h3>Troubleshooting</h3>
                        <p>Solutions for common fermentation problems</p>
                        <span className="category-count">42 solutions</span>
                    </a>
                </div>
            </div>

            <div className="featured-articles">
                <div className="section-header">
                    <h2>Featured Articles</h2>
                    <p>Latest expert insights and practical tips</p>
                </div>
                <div className="articles-grid">
                    <article className="article-card">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span><i className="far fa-calendar"></i> Nov 5, 2025</span>
                                <span><i className="far fa-clock"></i> 8 min read</span>
                            </div>
                            <h3>Second Fermentation: Creating Perfectly Carbonated Kombucha</h3>
                            <p>Master the art of flavoring and carbonating your homemade kombucha with fruit, herbs, and precise techniques.</p>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </article>

                    <article className="article-card">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span><i className="far fa-calendar"></i> Oct 29, 2025</span>
                                <span><i className="far fa-clock"></i> 6 min read</span>
                            </div>
                            <h3>Understanding Hydration Percentages in Sourdough</h3>
                            <p>Learn how different hydration levels affect dough handling, crumb structure, and final loaf characteristics.</p>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </article>

                    <article className="article-card">
                        <div className="article-image"></div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span><i className="far fa-calendar"></i> Oct 22, 2025</span>
                                <span><i className="far fa-clock"></i> 5 min read</span>
                            </div>
                            <h3>The Role of Salt in Vegetable Fermentation</h3>
                            <p>Explore how salt concentration affects microbial activity, texture, and flavor development in fermented vegetables.</p>
                            <a href="#" className="read-more">Read Article →</a>
                        </div>
                    </article>
                </div>
            </div>

            <div className="video-section">
                <div className="section-header">
                    <h2>Video Tutorials</h2>
                    <p>Watch and learn with step-by-step visual guides</p>
                </div>
                <div className="video-grid">
                    <div className="video-card">
                        <div className="video-thumbnail">
                            <div className="video-play">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <div className="video-content">
                            <h3>How to Make Your First Batch of Kombucha</h3>
                            <div className="video-meta">
                                <span>12:45</span>
                                <span>42K views</span>
                            </div>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-thumbnail">
                            <div className="video-play">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <div className="video-content">
                            <h3>Perfecting Sourdough Scoring Techniques</h3>
                            <div className="video-meta">
                                <span>8:32</span>
                                <span>28K views</span>
                            </div>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-thumbnail">
                            <div className="video-play">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <div className="video-content">
                            <h3>Making Traditional Kimchi at Home</h3>
                            <div className="video-meta">
                                <span>15:20</span>
                                <span>35K views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="community-section">
                <h2>Join Our Fermentation Community</h2>
                <p>Connect with thousands of home fermenters sharing recipes, tips, and success stories</p>
                <div className="community-stats">
                    <div className="stat-item">
                        <span className="stat-number">15K+</span>
                        <span className="stat-label">Active Members</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">8.2K</span>
                        <span className="stat-label">Recipes Shared</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">42K</span>
                        <span className="stat-label">Questions Answered</span>
                    </div>
                </div>
                <a href="#" className="btn btn-primary">Join Community</a>
            </div>
        </div>
    </section>

    <section className="learn-newsletter">
        <div className="container">
            <h2>Weekly Fermentation Wisdom</h2>
            <p>Get expert tips, new recipes, and exclusive learning resources delivered every Tuesday.</p>
            <form className="newsletter-form" action="#" method="POST">
                <input type="email" placeholder="Enter your email address" required  />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
        
        
        </>
    )
};
