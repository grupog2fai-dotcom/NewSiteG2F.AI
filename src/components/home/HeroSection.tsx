import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center pt-12 pb-24 border-b border-[#1f1f1f] relative overflow-hidden">
      {/* Ambient glow sutil */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 30%, #c8a84b 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-[1.05] font-clash mb-8">
            Sua empresa não precisa de mais ferramentas.
            <br />
            <span className="text-zinc-500" style={{ fontFamily: "var(--font-melodrama)", fontStyle: "italic", fontWeight: 400 }}>
              Precisa de uma estrutura que funcione.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-satoshi mb-10 max-w-2xl">
            A G2F organiza a presença digital e os processos da sua empresa para transformar
            pontos soltos da operação em uma estrutura mais clara, profissional e preparada para crescer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iniciar"
              className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash"
            >
              Entender Minha Necessidade
            </Link>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center border border-[#1f1f1f] hover:border-zinc-500 text-zinc-400 hover:text-white font-semibold text-sm px-8 py-4 transition-colors rounded-sm font-satoshi"
            >
              Conhecer as Soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
