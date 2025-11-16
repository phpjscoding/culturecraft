 import { SCHEMA_HOW_IT_WORKS } from "../../schema.js"

export default function HowItWorks(params) {
    const content = SCHEMA_HOW_IT_WORKS.en
    return(
          <section className="how-it-works">
        <div className="container">
            <div className="section-header">
                <h2> {content.title} </h2>
                <p>{content.subtitle}</p>
            </div>
            <div className="steps">
                {content.steps.map(step=>  <div className="step">
                    <div className="step-icon">
                        <i className={step.icon}></i>
                    </div>
                    <h3> {step.number}. {step.title} </h3>
                    <p>{step.description}</p>
                </div>)}
              
            </div>
        </div>
    </section>
    )
};
