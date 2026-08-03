import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import GrainEffect from "./components/GrainEffect";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Atlas from "./pages/Atlas";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Engineering from "./pages/Engineering";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import "./App.css";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    let animationFrameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <GrainEffect />
      <Navbar />
      <ScrollToTop />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/manifesto" element={<Company />} />
          <Route path="/philosophy" element={<Company />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
