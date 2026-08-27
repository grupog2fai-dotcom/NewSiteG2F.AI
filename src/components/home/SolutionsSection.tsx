import Link from "next/link";
import { solutions } from "@/data/solutions";

const frontGroups = [
  { slug: "presenca-local", name: "Presença Local", href: "/presenca-local" },
  { slug: "presenca-web", name: "Presença Web", href: "/presenca-web" },
  { slug: "automacoes", name: "Processos e Automações", href: "/automacoes" },
] as const;

export function SolutionsSection() {
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Soluções
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash">
            Cada frente resolve um tipo de problema.
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {frontGroups.map((group) => {
            const groupSolutions = solutions.filter((s) => s.front === group.slug);
            return (
              <div key={group.slug}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-lg font-semibold font-clash">{group.name}</h3>
                  <Link
                    href={group.href}
                    className="text-xs text-zinc-500 hover:text-[#c8a84b] transition-colors uppercase tracking-widest font-clash"
                  >
                    Ver frente →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupSolutions.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/solucoes/${s.slug}`}
                      className="group flex flex-col gap-3 p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm hover:border-[#c8a84b]/20 transition-colors"
                    >
                      <h4 className="text-white font-semibold font-clash text-base">
                        {s.name}
                      </h4>
                      <p className="text-zinc-500 text-sm leading-relaxed font-satoshi line-clamp-2">
                        {s.summary}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1f1f1f]">
                        {s.price && (
                          <span className="text-[#c8a84b] text-sm font-semibold font-clash">
                            {s.price}
                          </span>
                        )}
                        <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors font-satoshi ml-auto">
                          Ver detalhes →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
