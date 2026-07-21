import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GrainEffect from "./components/GrainEffect";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Athena from "./pages/Athena";
import Hephaestus from "./pages/Hephaestus";
import Hermes from "./pages/Hermes";
import Atlas from "./pages/Atlas"; 
import Orion from "./pages/Orion"; 

import "./App.css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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
      <Header />
      <ScrollToTop />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/athena" element={<Athena />} />
          <Route path="/hephaestus" element={<Hephaestus />} />
          <Route path="/hermes" element={<Hermes />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/orion" element={<Orion />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;