import "./kit.css"
import ProductsWithPagination from "../../components/ProductsWithPagination"

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

           <ProductsWithPagination />
        </div>

        {/* <div className="container"> 
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
        </div> */}
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
