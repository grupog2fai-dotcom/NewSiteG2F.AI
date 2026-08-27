import { company } from "@/data/company";

export function MethodSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Método
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash">
            Antes de executar, entendemos onde agir.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.method.map((m) => (
            <div key={m.step} className="flex flex-col gap-4">
              <span className="text-[#c8a84b] text-3xl font-bold font-clash">
                0{m.step}
              </span>
              <h3 className="text-white text-lg font-semibold font-clash uppercase tracking-wide">
                {m.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
