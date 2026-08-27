export function IdentitySection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden">
      {/* Bisão como background sutil — assinatura, não decoração */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(/assets/golden_bison_bg.jpg)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Identidade
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash mb-8">
            Estrutura. Resiliência. Direção.
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
              A G2F existe para estruturar os pontos digitais que fazem uma empresa ser
              encontrada, compreendida e operar com mais clareza. Não vendemos promessas de
              primeiro lugar no Google, nem garantimos que sua empresa vai triplicar as vendas.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
              Vendemos diagnóstico, estruturação e execução. Quando o caminho é claro,
              a entrega é direta. Quando o cenário é complexo, o trabalho começa pelo mapeamento.
            </p>
            <p className="text-zinc-300 text-base leading-relaxed font-satoshi">
              A escolha do bisão como símbolo não é decorativa. Representa a capacidade de
              avançar com massa, direção e resiliência — mesmo em terreno difícil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
