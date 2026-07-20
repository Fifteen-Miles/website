import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GrainEffect from "./components/GrainEffect";

import Home from "./pages/Home";

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

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;