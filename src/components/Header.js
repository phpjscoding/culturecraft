import { Link } from "react-router-dom"

import { SCHEMA_MENU } from "../schema.js"
export default function Header(params) {
    const menu = SCHEMA_MENU.en
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
                     {menu.links.map((link) => <li key={link.id} >
                        <Link to={link.path}> 
                         {link.name}
                      </Link></li>)}
                  
                    {/* <li><Link to="/" className="nav-cta">Shop Kits</Link></li> */}
                </ul>
            </nav>
        </div>
    </header>
    )
};
