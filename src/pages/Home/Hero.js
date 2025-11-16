import { Link } from "react-router-dom";
import { SCHEMA_HERO } from "../../schema.js"

export default function Hero(params) {
    console.log(SCHEMA_HERO.en);
    const content = SCHEMA_HERO.en
    return(
           <section className="hero" style={{ 
  background: `linear-gradient(rgba(45, 80, 22, 0.1), rgba(45, 80, 22, 0.9)), url('/fermentation.jpg') center/cover no-repeat`
}}>
        <div className="container">
            <h1> {content.title} </h1>
            <p> {content.subtitle} </p>
            <div className="hero-buttons">
                <Link to={content.buttons.primary.path} className="btn btn-primary"> {content.buttons.primary.text} </Link>
                <Link to={content.buttons.secondary.path} className="btn btn-accent"> {content.buttons.secondary.text} </Link>
            </div>
        </div>
    </section>
    )
};
