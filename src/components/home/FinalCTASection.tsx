import Link from "next/link";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash mb-4">
          Não sabe exatamente do que sua empresa precisa?
        </h2>
        <p className="text-zinc-400 text-lg font-satoshi mb-10 max-w-xl mx-auto">
          Comece pelo problema.
        </p>
        <Link
          href="/iniciar"
          className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-10 py-5 transition-colors rounded-sm font-clash"
        >
          Iniciar Análise
        </Link>
      </div>
    </section>
  );
}
