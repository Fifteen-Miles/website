import LazyImage from "./LazyImage";

export const TrustedBy = () => {
  return (
    <section className="relative w-full bg-black py-14 sm:py-16 border-t border-white/[0.06] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/35 mb-10">
          Confiado por
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          <span className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale">
            <LazyImage src="/eletra.png" alt="Eletra" className="w-24 sm:w-28 invert" />
          </span>
          {/* <span className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale">
            <LazyImage src="/acocearense.png" alt="Aço Cearense" className="w-28 sm:w-32 invert" />
          </span> */}
        </div>
      </div>
    </section>
  );
};