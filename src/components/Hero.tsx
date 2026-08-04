import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-40 pb-24 selection:bg-white/20">
      {/* Subtle radial gradient at the top, similar to Linear's lighting */}
      <div className="absolute inset-x-0 top-0 h-[60rem] bg-[radial-gradient(circle_35rem_at_50%_0%,#1a1a1a,transparent)] opacity-70" />
      {/* Subtle grid pattern, less dense than in the previous iteration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_50%,transparent_100%)] opacity-30" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Link
            to="/update"
            className="group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors hover:bg-white/5"
          >
            <span className="text-[#A1A1A6]">Novo</span>
            <span className="text-white">Coding Sessions</span>
            <ArrowRight className="h-4 w-4 text-[#A1A1A6] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-[Raleway] font-medium tracking-tighter text-white max-w-5xl leading-[0.95]"
        >
          O sistema de desenvolvimento de produtos para equipes e agentes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-xl text-[#A1A1A6] max-w-3xl font-normal tracking-wide leading-normal"
        >
          Projetado especificamente para planejamento e construção de produtos.
          Otimizado para a era da IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex h-10 items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black text-base font-medium tracking-tight transition-all hover:bg-neutral-200 shadow-sm"
          >
            Solicitar Demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="https://atlas.fifteenmiles.tech/register"
            className="inline-flex h-10 items-center justify-center px-8 py-4 rounded-full bg-white/[0.06] text-white text-base font-medium tracking-tight border border-white/10 hover:bg-white/[0.1] transition-all backdrop-blur-sm"
          >
            Criar conta
          </a>
        </motion.div>

        {/* Screenshot container with adjusted perspective and shadow for Linear look */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-24 perspective items-center justify-center"
        >          
          <div className="relative overflow-hidden rounded-md border border-white/10 shadow-2xl w-400 shadow-black/40">
            <img
              src="/Aplicativo.png"
              alt="Interface do Aplicativo Linear"
              className="pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};