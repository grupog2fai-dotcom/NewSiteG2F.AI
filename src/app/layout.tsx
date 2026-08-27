import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "G2F — Presença digital e processos para empresas",
  description: "A G2F organiza a presença digital e os processos da empresa para transformar pontos soltos da operação em uma estrutura mais clara, profissional e preparada para crescer.",
  icons: {
    icon: '/logo_icon.png',
    apple: '/logo_icon.png',
  },
  openGraph: {
    title: "G2F — Presença digital e processos",
    description: "Estruturação de Presença Local, Presença Web e Automação de Processos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased dark" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-50 selection:bg-[#c8a84b] selection:text-black font-satoshi">
        <Header />
        <main className="flex-1 flex flex-col pt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
