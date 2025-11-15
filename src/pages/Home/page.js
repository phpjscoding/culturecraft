import Benifits from "./Benifits.js"
import BlogPreview from "./BlogPreview.js"
import FeaturedKits from "./FeaturedKits.js"
import Hero from "./Hero.js"
import HowItWorks from "./HowItWorks.js"
import Layout from "../../components/Layout.js"
import Testimonials from "./Testimonials.js"

export default function Home(){
    return (
        
   <Layout >
        <Hero />
        <FeaturedKits />
        <Benifits />
        <HowItWorks />
        <Testimonials />
        <BlogPreview />
    </Layout>
   

        
     
    )
}
