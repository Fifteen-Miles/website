import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { CorporatePillars } from '@/components/CorporatePillars';
import { AtlasInfrastructureRoom } from '@/components/AtlasInfrastructureRoom';
import { ChamberOfPhilosophy } from '@/components/ChamberOfPhilosophy';
import { HorizonThirtyYearsRoom } from '@/components/HorizonThirtyYearsRoom';
import { TrustedBy } from '@/components/CompaniesBanner';

export const metadata: Metadata = {
  title: 'Fifteen Miles | Built for Decades',
  description: 'Fifteen Miles builds configurable enterprise platforms that centralize operations into a single, elegant environment.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <section className="h-100 flex justify-center items-center bg-black selection:bg-white/50">
        <h2 className="sm:text-[5vw] md:text-3xl font-semibold text-white p-[25vw] font-[Raleway]">Uma nova geração de plataformas empresariais. <span className="opacity-50 font-light font-[Fraunces] italic">Desenvolvido para organizações que desejam centralizar toda a sua operação em um único ambiente, com flexibilidade, governança e inteligência desde a base.</span></h2>
      </section>
      <CorporatePillars />
      <AtlasInfrastructureRoom />
      <ChamberOfPhilosophy />
      <HorizonThirtyYearsRoom />
    </div>
  );
}
