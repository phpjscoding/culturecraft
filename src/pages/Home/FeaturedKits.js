import Products from "../../products.js"

export default function FeaturedKits(params) {
    return(
          <section className="featured-kits">
        <div className="container">
            <div className="section-header">
                <h2>Our Featured Fermentation Kits</h2>
                <p>Everything you need to start your fermentation journey with confidence</p>
            </div>
            <div className="kits-grid">
                {/* <!-- Kombucha Kit --> */}
                {Products().map(product=> {
                    if(product.id < 7){
                      return   <div className="kit-card" key={product.id}>
                    <div className="kit-image">
                        <i className="fas fa-wine-bottle"></i>
                    </div>
                    <div className="kit-content">
                        <h3> {product.title} </h3>
                        <p> {product.description} </p>
                        <div className="kit-price">${product.price}</div>
                        <a href="#" className="btn">Add to Cart</a>
                    </div>
                </div>
                    }
                } )}
               

            </div>
        </div>
    </section>
    )
};
