import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Presença Local | G2F",
  description: "Sua empresa aparece quando alguém procura o que você oferece? A G2F estrutura a presença local para que seu negócio seja encontrado e compreendido.",
};

const localSolutions = solutions.filter((s) => s.front === "presenca-local");

export default function PresencaLocalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "G2F", href: "/" },
          { name: "Presença Local", href: "/presenca-local" },
        ])) }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
            <Link href="/" className="hover:text-white transition-colors">G2F</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">Presença Local</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              Sua empresa aparece quando alguém procura o que você oferece?
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">
              Quando um cliente em potencial busca pelo que você faz na sua região, ele precisa
              encontrar informações corretas, atualizadas e confiáveis. Se isso não acontece,
              a oportunidade vai para quem aparece primeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Ser encontrado", desc: "Aparecer nas buscas certas quando alguém procura o que você oferece na sua região." },
              { title: "Informações corretas", desc: "Endereço, telefone, horário, serviços — tudo atualizado e sem contradição." },
              { title: "Presença compreensível", desc: "Fotos, descrições e categorias que comunicam com clareza o que a empresa faz." },
              { title: "Confiança na busca", desc: "A primeira impressão digital precisa transmitir profissionalismo e solidez." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
                <h3 className="text-white font-semibold font-clash mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções desta frente */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold text-white font-clash mb-10">
            Soluções de Presença Local
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localSolutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solucoes/${s.slug}`}
                className="group flex flex-col gap-4 p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm hover:border-[#c8a84b]/20 transition-colors"
              >
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

      {/* CTA */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-zinc-400 text-base font-satoshi mb-6">Não sabe qual solução faz sentido para o seu caso?</p>
          <Link href="/iniciar?front=presenca-local" className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash">
            Entender Minha Necessidade
          </Link>
        </div>
      </section>
    </>
  );
}
