export default function BlogPreview(params) {
    return(
         <section className="blog-preview">
        <div className="container">
            <div className="section-header">
                <h2>Fermentation Resources</h2>
                <p>Learn tips, techniques, and recipes from our fermentation experts</p>
            </div>
            <div className="blog-grid">
                <article className="blog-card">
                    <div className="blog-image"></div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span><i className="far fa-calendar"></i> Oct 28, 2025</span>
                            <span><i className="far fa-clock"></i> 5 min read</span>
                        </div>
                        <h3>Second Fermentation: Creating Flavored Kombucha</h3>
                        <p>Take your homemade kombucha to the next level with fruit, herbs, and creative flavor combinations.</p>
                        <a href="#" className="read-more">Read More →</a>
                    </div>
                </article>
                <article className="blog-card">
                    <div className="blog-image"></div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span><i className="far fa-calendar"></i> Oct 15, 2025</span>
                            <span><i className="far fa-clock"></i> 7 min read</span>
                        </div>
                        <h3>Troubleshooting Common Sourdough Problems</h3>
                        <p>Learn how to identify and fix dense loaves, weak starters, and other common baking challenges.</p>
                        <a href="#" className="read-more">Read More →</a>
                    </div>
                </article>
                <article className="blog-card">
                    <div className="blog-image"></div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span><i className="far fa-calendar"></i> Oct 8, 2025</span>
                            <span><i className="far fa-clock"></i> 4 min read</span>
                        </div>
                        <h3>The Science Behind Vegetable Fermentation</h3>
                        <p>Understanding lactic acid bacteria and how they transform vegetables into probiotic superfoods.</p>
                        <a href="#" className="read-more">Read More →</a>
                    </div>
                </article>
            </div>
        </div>
    </section>
    )
};
