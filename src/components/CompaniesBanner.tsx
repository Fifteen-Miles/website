export const TrustedBy = () => {
  return (
    <section className="relative w-full bg-black py-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-xs uppercase tracking-[0.2em] text-[#A1A1A6] font-medium mb-12">
          Confiado por:
        </h2>

        <div className="w-full flex justify-center items-center gap-30  items-center justify-items-center opacity-7าม">
          <span className="text-white font-semibold tracking-tight text-lg flex items-center gap-2">
            <img src="/eletra.png" alt="" className="grayscale w-25"/>
          </span>
          {/*<span className="text-white font-semibold tracking-tight text-lg flex items-center gap-2">
            <img src="/acocearense.png" alt="" className="grayscale w-30"/>
          </span>*/}
        </div>
      </div>
    </section>
  );
};