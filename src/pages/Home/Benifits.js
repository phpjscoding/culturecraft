import { SCHEMA_BENEFITS } from "../../schema.js"

export default function Benifits(params) {
    const content = SCHEMA_BENEFITS.en
    return(
          <section className="benefits">
        <div className="container">
            <div className="section-header">
                <h2> {content.title} </h2>
                <p> {content.subtitle} </p>
            </div>
            <div className="benefits-grid">
                {content.benefits.map(benifit=> <div className="benefit-item">
                    <div className="benefit-icon">
                        <i className={benifit.icon}></i>
                    </div>
                    <h3> {benifit.title} </h3>
                    <p> {benifit.description} </p>
                </div>)}
                
               
            </div>
        </div>
    </section>
    )
};
