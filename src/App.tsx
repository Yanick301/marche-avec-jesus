/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import PastEditions from "./pages/PastEditions";
import CurrentEdition from "./pages/CurrentEdition";
import GalleryPage from "./pages/Gallery";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-[#005BA1] selection:text-white">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#005BA1] z-[60] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/editions-precedentes" element={<PastEditions />} />
              <Route path="/4eme-edition" element={<CurrentEdition />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
