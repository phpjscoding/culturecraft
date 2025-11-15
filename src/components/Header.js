import { Link } from "react-router-dom"


export default function Header(params) {
    return   (
         <header>
        <div className="container header-inner">
            <div className="logo">
                Culture<span>Craft</span>
            </div>
            <button className="menu-toggle" aria-label="Toggle menu">
                <i className="fas fa-bars"></i>
            </button>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/kits">Kits</Link></li>
                    <li><Link to="/supplies">Supplies</Link></li>
                    <li><Link to="/learn">Learn</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* <li><Link to="/" className="nav-cta">Shop Kits</Link></li> */}
                </ul>
            </nav>
        </div>
    </header>
    )
};
