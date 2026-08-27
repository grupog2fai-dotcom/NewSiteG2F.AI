import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#c8a84b] flex items-center justify-center rounded-sm">
                <span className="text-black font-bold text-[10px] font-clash">G2F</span>
              </div>
              <span className="text-white font-semibold tracking-tight text-sm font-clash">
                GrupoG2F<span className="text-[#c8a84b]">.IA</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-satoshi">
              Estruturamos a presença digital e os processos de empresas que precisam de controle, direção e eficiência técnica.
            </p>
          </div>

          {/* Nav: Frentes */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest font-clash">Frentes</h4>
            <Link href="/presenca-local" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Presença Local</Link>
            <Link href="/presenca-web" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Presença Web</Link>
            <Link href="/automacoes" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Processos e Automações</Link>
          </div>

          {/* Nav: Institucional */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest font-clash">A G2F</h4>
            <Link href="/como-funciona" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Como Funciona</Link>
            <Link href="/sobre" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Sobre nós</Link>
            <Link href="/faq" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Dúvidas Frequentes</Link>
          </div>

          {/* CTA/Contato */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest font-clash">Início</h4>
            <Link href="/iniciar" className="text-zinc-500 hover:text-white text-sm transition-colors font-satoshi">Iniciar Análise</Link>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs font-satoshi">
            &copy; {currentYear} GrupoG2F.IA. A execução importa.
          </p>
          <div className="flex gap-4">
            <span className="text-zinc-600 text-xs font-satoshi cursor-not-allowed">Política de Privacidade</span>
            <span className="text-zinc-600 text-xs font-satoshi cursor-not-allowed">Termos de Serviço</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
