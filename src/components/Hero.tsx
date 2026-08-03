import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center selection:bg-white/20">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/forest.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06)_0%,_transparent_110%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-medium text-white tracking-tighter"
        >
          Projetado para durar
          <br />
          <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-br from-[#E5C07B] via-[#D4AF37] to-[#8A6D3B] pr-4">
            décadas.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-lg md:text-xl text-[#A1A1A6] max-w-2xl text-center font-light tracking-wide leading-relaxed"
        >
          Arquitetura institucional de alto calibre. Construímos plataformas corporativas desenhadas para resistir ao tempo e à evolução tecnológica.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 z-20"
      >
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#1D1D1F]/40 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <Link
            to="/atlas"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-[13px] font-semibold tracking-wide transition-transform hover:scale-[1.02]"
          >
            Explorar Atlas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/company"
            className="flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-[#F5F5F7] text-[13px] font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            A Instituição
          </Link>
        </div>
      </motion.div>
    </section>
  );
};