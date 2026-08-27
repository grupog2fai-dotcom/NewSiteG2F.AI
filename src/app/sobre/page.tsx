import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sobre a G2F | Estrutura, Controle e Execução",
  description: "Conheça a história, os princípios e a visão da G2F. Não somos uma agência de marketing nem uma software house tradicional.",
};

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "G2F", href: "/" },
              { name: "Sobre", href: "/sobre" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
            <Link href="/" className="hover:text-white transition-colors">
              G2F
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">Sobre</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Institucional & Posicionamento
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              Nascemos para substituir a desordem digital por controle e estrutura.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">
              A G2F não foi criada para vender métricas de vaidade, posts para redes sociais ou empurrar softwares que a sua empresa não precisa.
            </p>
          </div>
        </div>
      </section>

      {/* Quem é e quem NÃO é */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm flex flex-col gap-6">
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash">
                O que a G2F é
              </span>
              <h2 className="text-2xl font-bold text-white font-clash">
                Assessoria Estrutural de Presença e Processos
              </h2>
              <ul className="flex flex-col gap-3 text-zinc-400 text-sm font-satoshi">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a84b]">✓</span>
                  <span>Uma operação que diagnostica antes de receitar qualquer solução técnica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a84b]">✓</span>
                  <span>Uma equipe que entrega ativos web de alta performance com código próprio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a84b]">✓</span>
                  <span>Um parceiro que automatiza fluxos repetitivos para devolver tempo aos fundadores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a84b]">✓</span>
                  <span>Uma operação baseada em limites claros, escopo protegido e honestidade comercial.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-[#0d0d0d] border border-[#1f1f1f] rounded-sm flex flex-col gap-6">
              <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest font-clash">
                O que a G2F NÃO é
              </span>
              <h2 className="text-2xl font-bold text-zinc-300 font-clash">
                O modelo convencional de agência
              </h2>
              <ul className="flex flex-col gap-3 text-zinc-500 text-sm font-satoshi">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-700">—</span>
                  <span>Não somos agência de marketing de mídia social ou de métricas de vaidade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-700">—</span>
                  <span>Não somos fábrica de sites baseados em templates lentos de WordPress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-700">—</span>
                  <span>Não somos consultores teóricos que entregam apresentações e fogem da execução.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-700">—</span>
                  <span>Não fazemos promessas impossíveis como &quot;primeiro lugar garantido no Google&quot;.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A Simbologia do Bisão */}
      <section className="py-24 border-t border-[#1f1f1f] relative overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url(/assets/golden_bison_bg.jpg)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash mb-3 block">
              Nossa Assinatura
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-clash mb-6">
              A Simbologia do Bisão
            </h2>
            <div className="flex flex-col gap-4 text-zinc-400 text-base leading-relaxed font-satoshi">
              <p>
                Quando tempestades de neve atingem as planícies, a maioria dos animais tenta fugir do vento e acaba preso no frio por mais tempo. O bisão faz o oposto: ele caminha diretamente em direção à tempestade, reduzindo o tempo sob condições adversas e emergindo do outro lado com mais rapidez e força.
              </p>
              <p>
                Essa postura reflete a filosofia da G2F. Encaramos os problemas de frente com análise técnica, estrutura sólida e foco inegociável na execução.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios Inegociáveis */}
      <section className="py-24 border-t border-[#1f1f1f] bg-[#111111]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-clash mb-4">
              Princípios Inegociáveis
            </h2>
            <p className="text-zinc-400 text-base font-satoshi">
              Decisões reais que guiam como trabalhamos com nossos clientes todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[#c8a84b] font-bold font-clash text-lg">01. Clareza antes de ferramenta</span>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Não adianta contratar a IA mais avançada se o processo de vendas não sabe qual pergunta fazer ao cliente.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#c8a84b] font-bold font-clash text-lg">02. Honestidade sobre limites</span>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Se uma solução não for adequada para o seu momento, diremos claramente por que você não deve contratá-la.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#c8a84b] font-bold font-clash text-lg">03. Execução proprietária</span>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Não terceirizamos o núcleo do que entregamos. Construímos sistemas com padrão técnico moderno e documentação limpa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-clash mb-4">
            Quer entender como aplicamos isso ao seu negócio?
          </h2>
          <p className="text-zinc-400 text-base font-satoshi mb-8 max-w-lg mx-auto">
            Faça sua análise de necessidade inicial e veja quais pontos da sua operação precisam de estrutura.
          </p>
          <Link
            href="/iniciar"
            className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash"
          >
            Entender Minha Necessidade
          </Link>
        </div>
      </section>
    </>
  );
}
