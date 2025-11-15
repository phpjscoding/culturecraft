// src/components/AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home/page.js";
import Kit from "../pages/kit/page.js";
import Suplies from "../pages/Suplies/page.js";
import Learn from "../pages/Learn/page.js";
import About from "../pages/About/page.js";
import Contact from "../pages/Contact/page.js";
import GiftCards from "../pages/GiftCards/page.js";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/kits" element={<Kit />} />
      <Route path="/supplies" element={<Suplies />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/giftcards" element={<GiftCards />} />
    </Routes>
  );
}