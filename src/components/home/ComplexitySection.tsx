export function ComplexitySection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
              <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
                Critério
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash mb-6">
              Nem todo projeto deveria passar direto por um checkout.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
              Algumas necessidades podem ser atendidas por soluções com escopo claro e entrega previsível.
              Outras exigem análise, definição de escopo e uma proposta construída especificamente
              para o cenário da empresa.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
              <h3 className="text-white font-semibold font-clash text-sm uppercase tracking-widest mb-3">
                Soluções estruturadas
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Escopo definido, entrega previsível, investimento claro.
                O robô da G2F qualifica a necessidade e recomenda o caminho.
              </p>
            </div>
            <div className="p-6 bg-[#111111] border border-[#1f1f1f] rounded-sm">
              <h3 className="text-white font-semibold font-clash text-sm uppercase tracking-widest mb-3">
                Projetos sob análise
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">
                Necessidades complexas que precisam de mapeamento,
                arquitetura e proposta personalizada antes de qualquer compromisso.
              </p>
            </div>
            <div className="p-6 bg-[#0a0a0a] border border-[#c8a84b]/20 rounded-sm">
              <p className="text-zinc-300 text-sm leading-relaxed font-satoshi">
                A G2F não empurra a solução mais cara. Recomenda a que resolve o problema
                com o menor risco de escopo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
