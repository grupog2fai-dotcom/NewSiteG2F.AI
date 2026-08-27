import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Perguntas Frequentes (FAQ) | G2F",
  description: "Tire suas dúvidas sobre o modelo de atuação da G2F, frentes de trabalho, contratação, escopos e processos.",
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "G2F", href: "/" },
              { name: "FAQ", href: "/faq" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
            <Link href="/" className="hover:text-white transition-colors">
              G2F
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">FAQ</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Esclarecimento & Transparência
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">
              Respostas diretas sobre como a G2F atua, o que entregamos e, principalmente, o que não fazemos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Gerais */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-bold text-white font-clash mb-8">
            Dúvidas Gerais sobre a G2F
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.geral.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm flex flex-col gap-3"
              >
                <h3 className="text-white font-semibold font-clash text-base">
                  {item.question}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs por Frente */}
      <section className="py-16 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
          {/* Presença Local */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash">
                Frente 01
              </span>
              <span className="text-zinc-600">/</span>
              <h2 className="text-xl font-bold text-white font-clash">
                Presença Local
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.presencaLocal.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm flex flex-col gap-3"
                >
                  <h3 className="text-white font-semibold font-clash text-base">
                    {item.question}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Presença Web */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash">
                Frente 02
              </span>
              <span className="text-zinc-600">/</span>
              <h2 className="text-xl font-bold text-white font-clash">
                Presença Web
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.presencaWeb.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm flex flex-col gap-3"
                >
                  <h3 className="text-white font-semibold font-clash text-base">
                    {item.question}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Automações */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash">
                Frente 03
              </span>
              <span className="text-zinc-600">/</span>
              <h2 className="text-xl font-bold text-white font-clash">
                Processos e Automações
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.automacoes.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm flex flex-col gap-3"
                >
                  <h3 className="text-white font-semibold font-clash text-base">
                    {item.question}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-clash mb-4">
            Ainda com alguma dúvida específica?
          </h2>
          <p className="text-zinc-400 text-base font-satoshi mb-8 max-w-lg mx-auto">
            O Robô G2F pode analisar seu caso diretamente e esclarecer qual caminho faz mais sentido.
          </p>
          <Link
            href="/iniciar"
            className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash"
          >
            Iniciar Análise
          </Link>
        </div>
      </section>
    </>
  );
}
