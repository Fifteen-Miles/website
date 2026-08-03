import { Hero } from "../components/Hero";
import { MuseumGallerySection } from "../components/MuseumGallerySection";
import { AtlasInfrastructureRoom } from "../components/AtlasInfrastructureRoom";
import { ChamberOfPhilosophy } from "../components/ChamberOfPhilosophy";
import { HorizonThirtyYearsRoom } from "../components/HorizonThirtyYearsRoom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] overflow-x-hidden selection:bg-[#8C7355] selection:text-[#FAF8F5]">
      {/* 1. Room I: Cinematic Landscape & Pure Headline */}
      <Hero />

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