import logo from "./logo.svg";
import "./common.css";
import "./App.css"
// import { motion } from "motion/react"
import { BrowserRouter, Routes, Route ,useLocation} from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Home from "./pages/Home/page.js";
// import Kit from "./pages/kit/page.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
// import Suplies from "./pages/Suplies/page.js";
// import Learn from "./pages/Learn/page.js";
// import About from "./pages/About/page.js";
// import Contact from "./pages/Contact/page.js";
import AnimatedRoutes from "./components/AnimatedRoutes.js";
function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
    
        <Header />
       <AnimatedRoutes/>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
