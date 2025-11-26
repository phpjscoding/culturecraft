import { Link } from "react-router-dom"
import {SCHEMA_FOOTER} from "../schema.js"
import { SCHEMA_TRUST_BADGES } from "../schema.js"
export default function Footer(params) {
    const content = SCHEMA_FOOTER.es
    const badges = SCHEMA_TRUST_BADGES.es
    return(
         <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-col">
                    <h3> {content.company.heading} </h3>
                    <p>{content.company.bio}</p>
                    <div className="social-links">
                        {content.social.platforms.map(media=>  <Link key={media.id} to="#" aria-label={media.name}><i className={media.icon}></i>  </Link>
 )}
                    </div>
                </div>
                {}
                <div className="footer-col">
                   
                    <h3> {content.links.shop.heading}</h3>
                    <ul>
                          {content.links.shop.items.map(item=> <li><Link to={item.path}> {item.text} </Link></li>)}
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>{content.links.learn.heading}</h3>
                    <ul>
                    {content.links.learn.items.map(item=> <li><Link to={item.path}> {item.text} </Link></li>)}

                    </ul>
                </div>
                <div className="footer-col">
               <h3> {content.links.company.heading}</h3>
                    <ul>
                        {content.links.company.items.map(item=> <li><Link to={item.path}> {item.text} </Link></li>)}
                    </ul>
                </div>
            </div>
            <div className="trust-badges">
                {badges.badges.map(badge=>  
                <div className="badge">
                    <i className={badge.icon}></i>
                    <span> {badge.title} </span>
                </div>)}
               
            </div>
            <div className="copyright">
                 <small> <b>By</b> <Link to="https://www.linkedin.com/in/esmail-o-talb-36a98a20a/">
                  Ismail Outaleb
                 </Link> </small>
                 
                <p>{content.legal.copyright} | {content.legal.links.map(link=> <Link to={link.path}> {link.text}   | </Link>  )} </p>
            </div>
        </div>
    </footer>
    )
};
