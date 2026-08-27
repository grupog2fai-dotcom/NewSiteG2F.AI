"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 bg-[#c8a84b] flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-black font-bold text-[10px] font-clash">G2F</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-sm font-clash">
            GrupoG2F<span className="text-[#c8a84b]">.IA</span>
          </span>
        </Link>

        {/* NAVEGAÇÃO PRINCIPAL */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors cursor-pointer font-satoshi">
              Soluções
            </span>
            {/* Dropdown Frentes */}
            <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-sm p-2 w-48 flex flex-col gap-1 shadow-2xl">
                <Link href="/presenca-local" className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-colors">
                  Presença Local
                </Link>
                <Link href="/presenca-web" className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-colors">
                  Presença Web
                </Link>
                <Link href="/automacoes" className="text-sm text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-sm transition-colors">
                  Automações
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
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/iniciar"
            className="hidden sm:inline-flex items-center justify-center bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors rounded-sm font-clash"
          >
            Entender Minha Necessidade
          </Link>
        </div>
      </div>
    </header>
  );
}
