import type { Metadata } from "next";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Presença Web | G2F",
  description: "Seu negócio tem um lugar claro para apresentar a empresa e transformar interesse em ação? A G2F cria estruturas digitais profissionais.",
};

const webSolutions = solutions.filter((s) => s.front === "presenca-web");

export default function PresencaWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "G2F", href: "/" },
          { name: "Presença Web", href: "/presenca-web" },
        ])) }}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
            <Link href="/" className="hover:text-white transition-colors">G2F</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">Presença Web</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              Seu negócio tem um lugar claro para apresentar sua empresa e transformar interesse em ação?
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">
              Ter um perfil em redes sociais não substitui uma presença web própria. Uma página bem estruturada apresenta, explica e direciona — sem depender de algoritmos.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenças */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-semibold text-white font-clash mb-8">Três estruturas, três objetivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Página de Presença", desc: "Apresentar quem você é e como entrar em contato. O essencial, feito com excelência." },
              { title: "Landing Page de Conversão", desc: "Focar em uma oferta específica. Conduzir o visitante à ação sem distrações." },
              { title: "Site Institucional", desc: "Organizar múltiplas informações e transmitir a dimensão real do negócio." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
                <h3 className="text-white font-semibold font-clash mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold text-white font-clash mb-10">Soluções de Presença Web</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webSolutions.map((s) => (
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
          <p className="text-zinc-400 text-base font-satoshi mb-6">Não sabe se precisa de uma página, landing page ou site completo?</p>
          <Link href="/iniciar?front=presenca-web" className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash">
            Entender Minha Necessidade
          </Link>
        </div>
      </section>
    </>
  );
}
