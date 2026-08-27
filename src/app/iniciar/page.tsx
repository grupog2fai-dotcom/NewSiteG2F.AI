"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { solutions } from "@/data/solutions";

function IniciarContent() {
  const searchParams = useSearchParams();
  const solutionParam = searchParams.get("solution");
  const frontParam = searchParams.get("front");
  const typeParam = searchParams.get("type");

  const selectedSolution = solutions.find((s) => s.slug === solutionParam);

  const [companyName, setCompanyName] = useState("");
  const [segment, setSegment] = useState("");
  const [currentBottleneck, setCurrentBottleneck] = useState(
    solutionParam ? `Interesse na solução: ${selectedSolution?.name || solutionParam}` : ""
  );
  const [contactName, setContactName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
        <Link href="/" className="hover:text-white transition-colors">
          G2F
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-400">Iniciar Qualificação</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Lado Esquerdo: Contexto Estratégico */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Entrada do Robô G2F
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white font-clash leading-tight">
            Vamos entender sua necessidade antes de definir o próximo caminho.
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
            A G2F não força soluções padronizadas em problemas que exigem análise, nem empurra escopos caros para necessidades simples.
          </p>

          {selectedSolution && (
            <div className="p-6 bg-[#111111] border border-[#c8a84b]/30 rounded-sm flex flex-col gap-2">
              <span className="text-xs text-[#c8a84b] font-bold uppercase tracking-widest font-clash">
                Contexto Selecionado
              </span>
              <h2 className="text-white font-semibold font-clash text-lg">
                {selectedSolution.name}
              </h2>
              <p className="text-zinc-400 text-xs font-satoshi">
                {selectedSolution.summary}
              </p>
              {selectedSolution.price && (
                <span className="text-white font-bold text-sm font-clash mt-2">
                  Investimento de referência: {selectedSolution.price}
                </span>
              )}
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-[#1f1f1f] pt-6">
            <div className="flex items-start gap-3">
              <span className="text-[#c8a84b] text-sm">01</span>
              <p className="text-xs text-zinc-400 font-satoshi">
                <strong className="text-white">Qualificação imediata:</strong> Mapeamos o segmento e o gargalo principal da operação.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c8a84b] text-sm">02</span>
              <p className="text-xs text-zinc-400 font-satoshi">
                <strong className="text-white">Enquadramento correto:</strong> Recomendamos checkout direto ou análise de escopo.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#c8a84b] text-sm">03</span>
              <p className="text-xs text-zinc-400 font-satoshi">
                <strong className="text-white">Sem chamadas forçadas:</strong> Contato objetivo e assíncrono via WhatsApp ou e-mail.
              </p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário Estratégico de Entrada */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 bg-[#111111] border border-[#1f1f1f] rounded-sm">
            {submitted ? (
              <div className="flex flex-col gap-6 text-center py-12">
                <div className="w-12 h-12 rounded-full bg-[#c8a84b]/10 border border-[#c8a84b]/30 text-[#c8a84b] flex items-center justify-center mx-auto text-xl font-bold font-clash">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white font-clash">
                  Dados recebidos para qualificação.
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed font-satoshi">
                  As informações foram organizadas e direcionadas para o Robô G2F. Avaliaremos o cenário de <strong className="text-white">{companyName || "sua empresa"}</strong> e entraremos em contato via WhatsApp com o diagnóstico e os próximos passos.
                </p>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center border border-[#1f1f1f] hover:border-zinc-500 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors rounded-sm font-clash"
                  >
                    Voltar para o Início
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-clash mb-1">
                    Mapeamento Inicial
                  </h3>
                  <p className="text-zinc-500 text-xs font-satoshi">
                    Preencha as informações básicas para contextualizar o diagnóstico.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-satoshi">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ex: Gabriel Alexandre"
                      className="bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#c8a84b] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-satoshi"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-satoshi">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (11) 99999-9999"
                      className="bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#c8a84b] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-satoshi"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-satoshi">
                      Nome da Empresa / Projeto *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex: Grupo Exemplo"
                      className="bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#c8a84b] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-satoshi"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-satoshi">
                      Segmento de Atuação *
                    </label>
                    <input
                      type="text"
                      required
                      value={segment}
                      onChange={(e) => setSegment(e.target.value)}
                      placeholder="Ex: Clínica, Consultoria, Serviços..."
                      className="bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#c8a84b] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-satoshi"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-satoshi">
                    Qual é o principal problema ou objetivo agora? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={currentBottleneck}
                    onChange={(e) => setCurrentBottleneck(e.target.value)}
                    placeholder="Ex: Nossos clientes não nos acham no Google, ou perdemos muito tempo respondendo a mesma coisa no WhatsApp..."
                    className="bg-[#0a0a0a] border border-[#1f1f1f] focus:border-[#c8a84b] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors font-satoshi resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs py-4 transition-colors rounded-sm font-clash mt-2"
                >
                  Enviar para Análise do Robô G2F
                </button>

                <p className="text-zinc-600 text-[11px] text-center font-satoshi">
                  Seus dados serão utilizados exclusivamente para a qualificação técnica e envio do diagnóstico.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IniciarPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 text-center">
          <p className="text-zinc-500 font-satoshi text-sm">Carregando diagnóstico...</p>
        </div>
      }
    >
      <IniciarContent />
    </Suspense>
  );
}
