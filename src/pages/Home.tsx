import { Hero } from "../components/Hero";
import { MuseumGallerySection } from "../components/MuseumGallerySection";
import { AtlasInfrastructureRoom } from "../components/AtlasInfrastructureRoom";
import { ChamberOfPhilosophy } from "../components/ChamberOfPhilosophy";
import { HorizonThirtyYearsRoom } from "../components/HorizonThirtyYearsRoom";
import { TrustedBy } from "../components/CompaniesBanner";
import Seo from "../components/Seo"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] overflow-x-hidden">
      <Seo title="Fifteen Miles | Built for Decades" description="Fifteen Miles builds configurable enterprise platforms that centralize operations into a single, elegant environment." path="/" />
      {/* 1. Room I: Cinematic Landscape & Pure Headline */}
      <Hero />

      <TrustedBy />

      <section className="h-100 flex justify-center items-center bg-black selection:bg-white/50">
        <h2 className="text-3xl font-semibold max-w-400 text-white p-25 font-[Fraunces]">Uma nova geração de plataformas empresariais. <span className="opacity-50 font-light">Desenvolvido para organizações que desejam centralizar toda a sua operação em um único ambiente, com flexibilidade, governança e inteligência desde a base.</span></h2>
      </section>

      {/* 2 & 3. Room II, III: Museum Gallery of Software Fragmentation & Monolith */}
      <MuseumGallerySection />

      {/* 4. Room IV: Atlas Enterprise OS Infrastructure */}
      <AtlasInfrastructureRoom />

      {/* 5 & 6. Room V, VI: Dark Walnut Contrast Chamber of Philosophy & Engineering */}
      <ChamberOfPhilosophy />

      {/* 7 & 8. Room VII, VIII: Monumental 30-Year Horizon & Architectural Invitation */}
      <HorizonThirtyYearsRoom />
    </div>
  );
}