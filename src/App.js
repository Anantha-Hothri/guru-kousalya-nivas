import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Performances from "./pages/Performances";
import Productions from "./pages/Productions";
import ProductionDetail from "./pages/ProductionDetail";
import Awards from "./pages/Awards";
import Guru from "./pages/Guru";
import Initiatives from "./pages/Initiatives";
import Publications from "./pages/Publications";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import Connect from "./pages/Connect";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top immediately and smoothly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant instead of smooth for immediate effect
    });

    // Fallback: Force scroll after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/productions" element={<Productions />} />
            <Route path="/productions/:slug" element={<ProductionDetail />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/guru" element={<Guru />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/media" element={<Media />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
