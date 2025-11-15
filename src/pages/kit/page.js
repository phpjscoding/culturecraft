import "./kit.css"

export default function Kit(params) {
    return(
        <>

    
    <section className="page-hero">
        <div className="container">
            <h1>Complete Fermentation Kits</h1>
            <p>Everything you need to start crafting probiotic-rich foods at home. Beginner-friendly, expert-approved.</p>
        </div>
    </section>

    
    <div className="breadcrumb">
        <div className="container">
            <a href="index.html">Home</a> <span>›</span> <span>Kits</span>
        </div>
    </div>

    
    <div className="filters-bar">
        <div className="container">
            <div className="filter-group">
                <span className="filter-label">Sort by:</span>
                <select id="sort">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                    <option>Newest</option>
                </select>
            </div>
            <button className="filter-toggle">
                <i className="fas fa-filter"></i> Filters
            </button>
        </div>
    </div>

    <section className="kits-page">
        <div className="container kits-container">
            <aside className="sidebar-filters">
                <div className="filter-section">
                    <h3>Categories</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-item">
                            <input type="checkbox"  checked />
                            <span>All Kits</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Kombucha</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Vegetables</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Sourdough</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Dairy</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Bundles</span>
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <h3>Price Range</h3>
                    <div className="price-range">
                        <div className="price-inputs">
                            <input type="number" placeholder="$0" min="0" />
                            <span>-</span>
                            <input type="number" placeholder="$200" min="0" />
                        </div>
                        <button className="btn btn-outline" style={{marginTop: '0.5rem', padding: '8px 16px', fontSize: '0.9rem'}}>Apply</button>
                    </div>
                </div>

                <div className="filter-section">
                    <h3>Skill Level</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Beginner</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Intermediate</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox" />
                            <span>Advanced</span>
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <h3>Features</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-item">
                            <input type="checkbox"  />
                            <span>Organic Ingredients</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox"  />
                            <span>Glass Jars Included</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox"  />
                            <span>Recipe Book</span>
                        </label>
                        <label className="checkbox-item">
                            <input type="checkbox"  />
                            <span>Eco-Friendly</span>
                        </label>
                    </div>
                </div>
            </aside>

            <div className="kits-grid">
                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-wine-bottle"></i>
                        <span className="kit-badge">Best Seller</span>
                    </div>
                    <div className="kit-content">
                        <h3>Premium Kombucha Starter Kit</h3>
                        <p>Complete organic kit with live SCOBY, premium tea blend, glass fermentation jar, and pH strips.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(247)</span>
                            </div>
                            <span>Beginner</span>
                        </div>
                        <div className="kit-price">$69.99 <span className="price-old">$79.99</span></div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-carrot"></i>
                        <span className="kit-badge">New</span>
                    </div>
                    <div className="kit-content">
                        <h3>Vegetable Fermentation Master Set</h3>
                        <p>Ceramic crock, weights, airlocks, and 50+ recipes for sauerkraut, kimchi, pickles, and more.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(182)</span>
                            </div>
                            <span>Intermediate</span>  
                        </div>
                        <div className="kit-price">$89.99</div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-bread-slice"></i>
                    </div>
                    <div className="kit-content">
                        <h3>Artisan Sourdough Bread Kit</h3>
                        <p>100-year-old starter culture, proofing basket, lame, banneton, and comprehensive baking guide.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(319)</span>
                            </div>
                            <span>Beginner</span>
                        </div>
                        <div className="kit-price">$74.99</div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-cheese"></i>
                    </div>
                    <div className="kit-content">
                        <h3>Greek Yogurt & Kefir Starter Set</h3>
                        <p>Live cultures, stainless steel strainer, thermometer, and recipes for creamy yogurt and fizzy kefir.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(156)</span>
                            </div>
                            <span>Beginner</span>
                        </div>
                        <div className="kit-price">$54.99 <span className="price-old">$64.99</span></div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-pepper-hot"></i>
                        <span className="kit-badge">Hot</span>
                    </div>
                    <div className="kit-content">
                        <h3>Kimchi Making Complete Kit</h3>
                        <p>Korean chili flakes, onggi-style jar, gloves, gochugaru, and authentic family recipes.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(203)</span>
                            </div>
                            <span>Intermediate</span>
                        </div>
                        <div className="kit-price">$79.99</div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-flask"></i>
                        <span className="kit-badge">Bundle</span>
                    </div>
                    <div className="kit-content">
                        <h3>Ultimate Fermentation Bundle</h3>
                        <p>All 5 starter kits + pH meter, digital scale, culture incubator, and lifetime recipe access.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(89)</span>
                            </div>
                            <span>Advanced</span>
                        </div>
                        <div className="kit-price">$299.99 <span className="price-old">$399.99</span></div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-seedling"></i>
                    </div>
                    <div className="kit-content">
                        <h3>Organic Pickle Making Kit</h3>
                        <p>Heritage cucumber seeds, pickling spice blend, mason jars, and step-by-step guide.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(134)</span>
                            </div>
                            <span>Beginner</span>
                        </div>
                        <div className="kit-price">$44.99</div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>

                <div className="kit-card">
                    <div className="kit-image">
                        <i className="fas fa-wine-glass-alt"></i>
                    </div>
                    <div className="kit-content">
                        <h3>Water Kefir Starter Kit</h3>
                        <p>Live water kefir grains, organic cane sugar, mineral-rich ingredients, and flavoring guide.</p>
                        <div className="kit-meta">
                            <div className="kit-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span style={{color: '#888', marginLeft: '0.25rem'}}>(167)</span>
                            </div>
                            <span>Beginner</span>
                        </div>
                        <div className="kit-price">$49.99</div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="pagination">
                <button className="page-btn" disabled>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <button className="page-btn">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>

    <section className="kits-newsletter">
        <div className="container">
            <h2>Never Miss a Fermentation Tip</h2>
            <p>Get weekly recipes, exclusive discounts, and expert advice delivered to your inbox.</p>
            <form className="newsletter-form" action="#" method="POST">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
        </>
    )
};
