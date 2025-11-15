import "./suplies.css";

export default function Suplies() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Premium Fermentation Supplies</h1>
          <p>
            Professional-grade tools and ingredients for kombucha, sauerkraut,
            kimchi, sourdough, and beyond.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <a href="index.html">Home</a> <span>›</span>{" "}
          <span>Supplies</span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="container">
          <div className="filter-group">
            <span className="filter-label">Sort by:</span>
            <select id="sort">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Selling</option>
              <option>In Stock</option>
            </select>
          </div>
          <button className="filter-toggle">
            <i className="fas fa-filter"></i> Filters
          </button>
        </div>
      </div>

      {/* Main Supplies Section */}
      <section className="supplies-page">
        <div className="container">
          {/* Category Tabs */}
          <div className="category-tabs">
            <div className="category-tab active">All Supplies</div>
            <div className="category-tab">Jars & Vessels</div>
            <div className="category-tab">Cultures & Starters</div>
            <div className="category-tab">Tools & Accessories</div>
            <div className="category-tab">Ingredients</div>
          </div>

          <div className="supplies-container">
            {/* Sidebar Filters */}
            <aside className="sidebar-filters">
              {/* Categories Filter */}
              <div className="filter-section">
                <h3>Categories</h3>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span>All Supplies</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Glass Jars</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Ceramic Crocks</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Airlocks & Lids</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Weights & Tampers</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Cultures</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>pH & Testing</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="filter-section">
                <h3>Price Range</h3>
                <div className="price-range">
                  <div className="price-inputs">
                    <input type="number" placeholder="$0" min="0" />
                    <span>-</span>
                    <input type="number" placeholder="$150" min="0" />
                  </div>
                  <button
                    className="btn btn-outline btn-small"
                    style={{ marginTop: "0.5rem" }}
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Availability Filter */}
              <div className="filter-section">
                <h3>Availability</h3>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>In Stock Only</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Pre-Order</span>
                  </label>
                </div>
              </div>

              {/* Material Filter */}
              <div className="filter-section">
                <h3>Material</h3>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Glass</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Ceramic</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Stainless Steel</span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span>Food-Grade Plastic</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Supplies Grid */}
            <div className="supplies-grid">
              {/* Product Card 1 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-prescription-bottle"></i>
                  <span className="supply-badge">Best Seller</span>
                </div>
                <div className="supply-content">
                  <h3>1-Gallon Glass Fermentation Jar</h3>
                  <p>
                    Wide-mouth, food-grade glass with measurement markings.
                    Perfect for kombucha and vegetable ferments.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>Size: 1 Gallon</span>
                  </div>
                  <div className="supply-price">$24.99</div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-weight-hanging"></i>
                </div>
                <div className="supply-content">
                  <h3>Ceramic Fermentation Weights - Set of 2</h3>
                  <p>
                    Heavy, lead-free ceramic weights keep vegetables submerged.
                    Fits wide-mouth mason jars.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>Diameter: 2.75"</span>
                  </div>
                  <div className="supply-price">$18.99</div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-vial"></i>
                  <span className="supply-badge">New</span>
                </div>
                <div className="supply-content">
                  <h3>Digital pH Meter with Calibration Kit</h3>
                  <p>
                    Professional accuracy (±0.01 pH) with automatic temperature
                    compensation and storage case.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>Waterproof</span>
                  </div>
                  <div className="supply-price">
                    $49.99 <span className="price-old">$59.99</span>
                  </div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-faucet"></i>
                </div>
                <div className="supply-content">
                  <h3>Silicone Airlock Lids - 6 Pack</h3>
                  <p>
                    Universal fit for wide-mouth mason jars. Includes grommets
                    and airlock valves.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock low">Low Stock</span>
                    <span>BPA-Free</span>
                  </div>
                  <div className="supply-price">$32.99</div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-seedling"></i>
                </div>
                <div className="supply-content">
                  <h3>Live Kombucha SCOBY Culture</h3>
                  <p>
                    Healthy, organic SCOBY with 1 cup strong starter tea.
                    Guaranteed to brew perfect kombucha.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>Ships with Ice Pack</span>
                  </div>
                  <div className="supply-price">$14.99</div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-bread-slice"></i>
                  <span className="supply-badge">Organic</span>
                </div>
                <div className="supply-content">
                  <h3>Sourdough Starter - San Francisco Style</h3>
                  <p>
                    100+ year old culture from San Francisco. Includes feeding
                    guide and storage jar.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>USDA Organic</span>
                  </div>
                  <div className="supply-price">$19.99</div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 7 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-blender"></i>
                </div>
                <div className="supply-content">
                  <h3>Stainless Steel Vegetable Tamper</h3>
                  <p>
                    Ergonomic wooden handle with polished stainless steel head.
                    Ideal for packing sauerkraut.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>Dishwasher Safe</span>
                  </div>
                  <div className="supply-price">$28.99</div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 8 */}
              <div className="supply-card">
                <div className="supply-image">
                  <i className="fas fa-prescription-bottle-alt"></i>
                </div>
                <div className="supply-content">
                  <h3>5-Liter German Fermentation Crock</h3>
                  <p>
                    Traditional stoneware with water-seal lid. Includes weights.
                    Handcrafted in Europe.
                  </p>
                  <div className="supply-meta">
                    <span className="supply-stock">In Stock</span>
                    <span>Capacity: 5L</span>
                  </div>
                  <div className="supply-price">
                    $119.99 <span className="price-old">$139.99</span>
                  </div>
                  <div className="quantity-selector">
                    <button className="quantity-btn">-</button>
                    <input
                      type="number"
                      className="quantity-input"
                      defaultValue="1"
                      min="1"
                    />
                    <button className="quantity-btn">+</button>
                  </div>
                  <button className="btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn" disabled>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="supplies-newsletter">
        <div className="container">
          <h2>Stay Stocked on Fermentation Essentials</h2>
          <p>
            Get restock alerts, new product launches, and exclusive supply
            discounts.
          </p>
          <form className="newsletter-form" action="#" method="POST">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}