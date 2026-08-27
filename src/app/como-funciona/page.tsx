import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Como Funciona | G2F",
  description: "Entenda o modelo de trabalho da G2F: Entender, Estruturar, Executar e Evoluir. Sem reuniões desnecessárias, com foco em diagnóstico e entrega.",
};

const stages = [
  {
    step: "01",
    title: "Entender (Diagnóstico Assíncrono)",
    subtitle: "Mapeamos o problema antes de escolher ferramentas",
    desc: "A maioria das empresas tenta resolver gargalos contratando softwares ou agências que vendem pacotes genéricos. Na G2F, começamos identificando onde a operação trava: se é na descoberta local, na conversão web ou no retrabalho operacional.",
    details: [
      "Qualificação orientada pelo Robô G2F",
      "Identificação real de gargalos",
      "Eliminação de soluções desnecessárias",
    ],
  },
  {
    step: "02",
    title: "Estruturar (Enquadramento e Direção)",
    subtitle: "Definimos o caminho com limites claros",
    desc: "Não empurramos o projeto mais caro. Classificamos a demanda entre soluções padronizadas de escopo protegido ou projetos que necessitam de arquitetura e proposta customizada.",
    details: [
      "Escopo protegido e sem surpresas",
      "Definição transparente de investimento",
      "Sem promessas irreais ou falsas garantias",
    ],
  },
  {
    step: "03",
    title: "Executar (Entrega e Implementação)",
    subtitle: "Transformamos o plano em ativo funcionando",
    desc: "Com o escopo travado e o gate de prontidão aprovado, partimos para a implementação técnica com rigor cirúrgico: páginas de alta velocidade, perfis otimizados ou automações estáveis.",
    details: [
      "Onboarding objetivo e sem burocracia",
      "Código limpo, acessível e performático",
      "Testes rigorosos antes de ir ao ar",
    ],
  },
  {
    step: "04",
    title: "Evoluir (Continuidade e Próximos Passos)",
    subtitle: "Manutenção da tração e novos gargalos",
    desc: "Uma estrutura digital só cresce se os fundamentos estiverem sólidos. Apenas quando o primeiro gargalo é resolvido e validado é que recomendamos avançar para a próxima etapa da operação.",
    details: [
      "Acompanhamento de estabilidade",
      "Cross-sell apenas sob necessidade comprovada",
      "Operação preparada para escalar",
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "G2F", href: "/" },
              { name: "Como Funciona", href: "/como-funciona" },
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
            <span className="text-zinc-400">Como Funciona</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Metodologia & Processo
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              Antes de executar qualquer linha, entendemos onde agir.
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-satoshi mb-8">
              A G2F substitui o modelo de reuniões intermináveis e orçamentos inflados por uma esteira de qualificação assíncrona, escopo controlado e entrega direta.
            </p>
          </div>
        </div>
      </section>

      {/* Etapas do Método */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-12">
            {stages.map((stage) => (
              <div
                key={stage.step}
                className="p-8 md:p-12 bg-[#111111] border border-[#1f1f1f] rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <span className="text-[#c8a84b] text-4xl font-bold font-clash">
                    {stage.step}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white font-clash mt-2">
                    {stage.title}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-clash">
                    {stage.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-6">
                  <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
                    {stage.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1f1f1f]">
                    {stage.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#c8a84b] text-sm shrink-0">✓</span>
                        <span className="text-xs text-zinc-400 font-satoshi leading-tight">
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que não usamos call como padrão */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-clash mb-4">
              Por que a G2F não utiliza reuniões como CTA padrão?
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
              Reuniões consom tempo de ambas as partes para discutir informações que poderiam ser organizadas em minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
              <h3 className="text-white font-semibold font-clash text-base mb-2">
                Qualificação sem ruído
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                O Robô G2F coleta os parâmetros exatos do seu negócio sem enrolação ou pressão comercial artificial.
              </p>
            </div>
            <div className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
              <h3 className="text-white font-semibold font-clash text-base mb-2">
                Decisão informada
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Você recebe a indicação precisa do que precisa, sabendo exatamente o escopo, as exclusões e o investimento.
              </p>
            </div>
            <div className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
              <h3 className="text-white font-semibold font-clash text-base mb-2">
                Reunião só quando necessário
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Reservamos chamadas humanas exclusivamente para projetos customizados e com múltiplos decisores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-clash mb-4">
            Pronto para entender o gargalo da sua empresa?
          </h2>
          <p className="text-zinc-400 text-base font-satoshi mb-8 max-w-lg mx-auto">
            Comece pelo diagnóstico guiado pelo Robô G2F. Leva menos de 3 minutos.
          </p>
          <Link
            href="/iniciar"
            className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash"
          >
            Iniciar Diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
