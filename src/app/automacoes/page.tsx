import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Processos e Automações | G2F",
  description: "Quanto tempo sua empresa perde repetindo processos que poderiam ser estruturados? A G2F automatiza fluxos com critério e escopo controlado.",
};

const autoSolutions = solutions.filter((s) => s.front === "automacoes");

export default function AutomacoesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "G2F", href: "/" },
          { name: "Automações", href: "/automacoes" },
        ])) }}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
            <Link href="/" className="hover:text-white transition-colors">G2F</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">Processos e Automações</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              Quanto tempo sua empresa perde repetindo processos que poderiam ser estruturados?
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">
              Copiar informações entre sistemas, enviar mensagens manuais, alimentar planilhas todos os dias. Cada hora gasta em trabalho repetitivo é uma hora que não volta.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciação */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm max-w-2xl mb-10">
            <p className="text-zinc-300 text-sm leading-relaxed font-satoshi">
              Automatizar um processo ruim não resolve o problema — apenas produz erros mais rápido.
              Por isso, toda automação começa pelo mapeamento e pela estruturação antes de qualquer build.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold text-white font-clash mb-10">Soluções de Automação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {autoSolutions.map((s) => (
              <Link key={s.slug} href={`/solucoes/${s.slug}`} className="group flex flex-col gap-4 p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm hover:border-[#c8a84b]/20 transition-colors">
                <h3 className="text-white font-semibold font-clash text-lg">{s.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{s.summary}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1f1f1f]">
                  {s.price && <span className="text-[#c8a84b] font-semibold font-clash text-sm">{s.price}</span>}
                  <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors font-satoshi ml-auto">Ver detalhes →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-zinc-400 text-base font-satoshi mb-6">Tem um processo repetitivo e quer saber se faz sentido automatizar?</p>
          <Link href="/iniciar?front=automacoes" className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash">
            Entender Minha Necessidade
          </Link>
        </div>
      </section>
    </>
  );
}
