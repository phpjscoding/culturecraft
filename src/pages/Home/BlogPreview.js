import { SCHEMA_RESOURCES } from "../../schema.js"

export default function BlogPreview(params) {
    const content = SCHEMA_RESOURCES.fr
    return(
         <section className="blog-preview">
        <div className="container">
            <div className="section-header">
            <h2>{content.title}</h2>
                <p>{content.subtitle}</p>
            </div>
            <div className="blog-grid">
                {content.articles.map(article=> <article className="blog-card" key={article.id}>
                    <div className="blog-image"></div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span><i className="far fa-calendar"></i> {article.date} </span>
                            <span><i className="far fa-clock"></i> {article.readTime} </span>
                        </div>
                        <h3>{article.title}</h3>
                        <p>{article.subtitle}</p>
                        <a href="#" className="read-more">{article.readmore} →</a>
                    </div>
                </article> )}
               
              
            </div>
        </div>
    </section>
    )
};
