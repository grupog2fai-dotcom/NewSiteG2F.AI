"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-5 h-5 bg-[#c8a84b] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-black font-bold text-[10px] font-clash">G2F</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-sm font-clash">
            GrupoG2F<span className="text-[#c8a84b]">.IA</span>
          </span>
        </Link>

        {/* NAVEGAÇÃO PRINCIPAL (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors cursor-pointer font-satoshi py-2">
              Soluções
            </span>
            {/* Dropdown Frentes */}
            <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-sm p-2 w-52 flex flex-col gap-1 shadow-2xl">
                <Link href="/presenca-local" className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-colors">
                  Presença Local
                </Link>
                <Link href="/presenca-web" className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-colors">
                  Presença Web
                </Link>
                <Link href="/automacoes" className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-colors">
                  Processos e Automações
                </Link>
              </div>
            </div>
          </div>
          
          <Link href="/como-funciona" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-satoshi">
            Como Funciona
          </Link>
          
          <Link href="/sobre" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-satoshi">
            Sobre
          </Link>

          <Link href="/faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-satoshi">
            FAQ
          </Link>
        </nav>

        {/* CTA (DESKTOP) & HAMBURGER (MOBILE) */}
        <div className="flex items-center gap-4">
          <Link
            href="/iniciar"
            className="hidden sm:inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors rounded-sm font-clash"
          >
            Entender Minha Necessidade
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-6 flex flex-col gap-4">
          <span className="text-xs uppercase tracking-wider text-zinc-500 font-clash">Frentes</span>
          <div className="flex flex-col gap-2 pl-2 border-l border-[#1f1f1f]">
            <Link
              href="/presenca-local"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1 font-satoshi"
            >
              Presença Local
            </Link>
            <Link
              href="/presenca-web"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1 font-satoshi"
            >
              Presença Web
            </Link>
            <Link
              href="/automacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1 font-satoshi"
            >
              Processos e Automações
            </Link>
          </div>

          <span className="text-xs uppercase tracking-wider text-zinc-500 font-clash mt-2">Institucional</span>
          <div className="flex flex-col gap-2 pl-2 border-l border-[#1f1f1f]">
            <Link
              href="/como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1 font-satoshi"
            >
              Como Funciona
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1 font-satoshi"
            >
              Sobre a G2F
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1 font-satoshi"
            >
              Dúvidas Frequentes (FAQ)
            </Link>
          </div>

          <div className="pt-4 border-t border-[#1f1f1f] mt-2">
            <Link
              href="/iniciar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs py-3 rounded-sm font-clash"
            >
              Entender Minha Necessidade
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
