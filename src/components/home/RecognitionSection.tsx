const situations = [
  {
    label: "Presença",
    description: "As pessoas procuram sua empresa, mas não encontram informações claras ou atualizadas.",
  },
  {
    label: "Conversão",
    description: "A empresa recebe atenção, mas não possui uma estrutura digital adequada para transformar interesse em ação.",
  },
  {
    label: "Processos",
    description: "Atividades repetitivas dependem de pessoas, mensagens e controles manuais.",
  },
];

export function RecognitionSection() {
  return (
    <section id="reconhecimento" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
            <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase font-satoshi">
              Reconhecimento
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.1] font-clash">
            Talvez o problema não seja falta de esforço.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-4 p-8 bg-[#111111] border border-[#1f1f1f] rounded-sm"
            >
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash">
                {s.label}
              </span>
              <p className="text-zinc-400 text-base leading-relaxed font-satoshi">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
