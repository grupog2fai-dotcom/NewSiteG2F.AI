import Link from "next/link";
import { company } from "@/data/company";

export function FrontsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Frentes
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash">
            Organizamos o que sustenta sua operação digital.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {company.fronts.map((front, i) => (
            <Link
              key={front.slug}
              href={`/${front.slug}`}
              className="group flex flex-col justify-between gap-8 p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm hover:border-[#c8a84b]/30 transition-colors min-h-[200px]"
            >
              <div>
                <span className="text-[#c8a84b] text-xs font-bold font-clash tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-semibold text-white mt-3 font-clash">
                  {front.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-3 font-satoshi">
                  {front.description}
                </p>
              </div>
              <span className="text-xs text-zinc-500 group-hover:text-[#c8a84b] transition-colors uppercase tracking-widest font-clash">
                Ver soluções →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
