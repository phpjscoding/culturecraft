export default function HowItWorks(params) {
    return(
          <section className="how-it-works">
        <div className="container">
            <div className="section-header">
                <h2>How It Works</h2>
                <p>Start fermenting in just a few simple steps</p>
            </div>
            <div className="steps">
                <div className="step">
                    <div className="step-icon">
                        <i className="fas fa-box-open"></i>
                    </div>
                    <h3>1. Choose Your Kit</h3>
                    <p>Select from our beginner-friendly kits designed for your fermentation goals.</p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <i className="fas fa-blender"></i>
                    </div>
                    <h3>2. Prepare Ingredients</h3>
                    <p>Follow our simple recipes using fresh, organic ingredients included in your kit.</p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <i className="fas fa-hourglass-half"></i>
                    </div>
                    <h3>3. Let Nature Work</h3>
                    <p>Store at room temperature and watch beneficial bacteria transform your food.</p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <h3>4. Enjoy & Share</h3>
                    <p>Taste, refine, and share your homemade probiotic creations with friends and family.</p>
                </div>
            </div>
        </div>
    </section>
    )
};
