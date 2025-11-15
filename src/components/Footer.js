import { Link } from "react-router-dom"

export default function Footer(params) {
    return(
         <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-col">
                    <h3>CultureCraft</h3>
                    <p>Your trusted source for premium fermentation kits and supplies. Transform ordinary ingredients into extraordinary probiotic foods.</p>
                    <div className="social-links">
                        <Link to="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></Link>
                        <Link to="#" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to="/kits">All Kits</Link></li>
                        <li><Link to="#">Kombucha</Link></li>
                        <li><Link to="#">Vegetables</Link></li>
                        <li><Link to="#">Sourdough</Link></li>
                        <li><Link to="/supplies">Supplies</Link></li>
                        <li><Link to="/giftcards">Gift Cards</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Learn</h3>
                    <ul>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">Recipes</Link></li>
                        <li><Link to="#">Beginner Guides</Link></li>
                        <li><Link to="#">Troubleshooting</Link></li>
                        <li><Link to="#">Video Tutorials</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="#">Our Story</Link></li>
                        <li><Link to="#">Sustainability</Link></li>
                        <li><Link to="#">Wholesale</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="trust-badges">
                <div className="badge">
                    <i className="fas fa-shield-alt"></i>
                    <span>Secure Payments</span>
                </div>
                <div className="badge">
                    <i className="fas fa-truck"></i>
                    <span>Free Shipping Over $75</span>
                </div>
                <div className="badge">
                    <i className="fas fa-undo"></i>
                    <span>30-Day Returns</span>
                </div>
                <div className="badge">
                    <i className="fas fa-award"></i>
                    <span>Satisfaction Guarantee</span>
                </div>
            </div>
            <div className="copyright">
                 <small> <b>By</b> <Link to="https://www.linkedin.com/in/esmail-o-talb-36a98a20a/">
                  Ismail Outaleb
                 </Link> </small>
                <p>&copy; 2025 CultureCraft. All rights reserved. | <Link to="#">Privacy Policy</Link> | <Link to="#">Terms of Service</Link></p>
            </div>
        </div>
    </footer>
    )
};
