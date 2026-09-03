'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Users, Quote, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function useDisplayFonts() {
  useEffect(() => {
    if (document.getElementById("fm-type-system")) return;
    const link = document.createElement("link");
    link.id = "fm-type-system";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

export default function TeamPage() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Time — Fifteen Miles" description="Conheça as mentes por trás da Fifteen Miles: engenheiros e estrategistas comprometidos com a perenidade do software." path="/team" />

      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <Users className="w-3 h-3" /> Talentos & Cultura
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            Mentes <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">construtoras.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/50 font-light max-w-xl">
            Nosso time é composto por profissionais multidisciplinares, unidos pela obsessão por arquitetura limpa e tecnologia que perdura.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-24">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">  
              <motion.div variants={fadeUp} className="p-8 rounded-[28px] bg-[#050505] border border-white/[0.08]">
                <div className="w-26 h-26 rounded-full bg-white/5 mb-6 overflow-hidden">
                  <Image src="/nathanael.jfif" width={100} height={100} alt="Engenheiro de Software" />
                </div>
                <h3 className="text-lg font-medium">Nathanael Secundo Cardoso</h3>
                <p className="text-white/40 text-sm font-[JetBrains_Mono] uppercase tracking-widest mt-1">Founder & CEO</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-8 rounded-[28px] bg-[#050505] border border-white/[0.08]">
                <div className="w-26 h-26 rounded-full bg-white/5 mb-6 overflow-hidden">
                  <Image src="/jaciara.jfif" width={100} height={100} alt="Engenheiro de Software" />
                </div>
                <h3 className="text-lg font-medium">Jaciara Martins</h3>
                <p className="text-white/40 text-sm font-[JetBrains_Mono] uppercase tracking-widest mt-1">CLO - Chief Legal Officer</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-8 rounded-[28px] bg-[#050505] border border-white/[0.08]">
                <div className="w-26 h-26 rounded-full bg-white/5 mb-6 overflow-hidden">
                  <Image src="/vinicius.jfif" width={100} height={100} alt="Engenheiro de Software" />
                </div>
                <h3 className="text-lg font-medium">Vinícius Moreira</h3>
                <p className="text-white/40 text-sm font-[JetBrains_Mono] uppercase tracking-widest mt-1">Software Engineer</p>
              </motion.div>
              <motion.div variants={fadeUp} className="p-8 rounded-[28px] bg-[#050505] border border-white/[0.08]">
                <div className="w-26 h-26 rounded-full bg-white/5 mb-6 overflow-hidden">
                  <Image src="/arthur.jfif" width={100} height={100} alt="Engenheiro de Software" />
                </div>
                <h3 className="text-lg font-medium">Arthur Bruno</h3>
                <p className="text-white/40 text-sm font-[JetBrains_Mono] uppercase tracking-widest mt-1">Software Engineer</p>
              </motion.div>
          </div>

          <div className="border-t border-white/[0.08] pt-24">
            <h2 className="text-3xl font-medium mb-16 tracking-tight">O que nos move</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { quote: "Aqui a autonomia não é sobre liberdade total, é sobre a responsabilidade de construir algo que sobreviverá a nós mesmos.", author: "Arquiteto de Sistemas" },
                { quote: "Trabalhar na Fifteen Miles é aprender que a simplicidade é o ápice da engenharia.", author: "Lead Developer" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="relative p-10 rounded-[28px] bg-white/[0.02]">
                  <Quote className="w-8 h-8 text-white/20 mb-6" />
                  <p className="text-lg leading-relaxed text-white/70 mb-8">"{item.quote}"</p>
                  <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.2em] text-white/40 border-l-2 border-white/20 pl-4">— {item.author}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}