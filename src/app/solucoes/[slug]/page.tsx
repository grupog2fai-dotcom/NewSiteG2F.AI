import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.metadata.title,
    description: solution.metadata.description,
  };
}

const frontLabels: Record<string, string> = {
  "presenca-local": "Presença Local",
  "presenca-web": "Presença Web",
  "automacoes": "Processos e Automações",
};

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "G2F", href: "/" },
          { name: frontLabels[solution.front] || solution.front, href: `/${solution.front}` },
          { name: solution.name, href: `/solucoes/${solution.slug}` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: solution.name, description: solution.summary })) }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <nav className="text-xs text-zinc-600 mb-8 font-satoshi">
            <Link href="/" className="hover:text-white transition-colors">G2F</Link>
            <span className="mx-2">/</span>
            <Link href={`/${solution.front}`} className="hover:text-white transition-colors">{frontLabels[solution.front]}</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">{solution.name}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest font-clash mb-4 block">
              {frontLabels[solution.front]}
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] font-clash mb-6">
              {solution.name}
            </h1>
            {solution.price && (
              <p className="text-[#c8a84b] text-xl font-semibold font-clash mb-6">
                {solution.price}
                {solution.priceType === 'recorrente' && <span className="text-zinc-500 text-sm font-normal ml-1">(recorrente)</span>}
                {solution.priceType === 'sob-consulta' && <span className="text-zinc-500 text-sm font-normal ml-1">(sob consulta)</span>}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 1. PROBLEMA */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white font-clash mb-4">O Problema</h2>
            <p className="text-zinc-400 text-base leading-relaxed font-satoshi">{solution.problem}</p>
          </div>
        </div>
      </section>

      {/* 2. PARA QUEM FAZ SENTIDO */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-semibold text-white font-clash mb-6">Para quem faz sentido</h2>
          <div className="flex flex-col gap-3 max-w-2xl">
            {solution.idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] mt-2 shrink-0" />
                <p className="text-zinc-400 text-sm font-satoshi">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. O QUE A SOLUÇÃO FAZ */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white font-clash mb-4">O que esta solução faz</h2>
            <p className="text-zinc-400 text-base leading-relaxed font-satoshi">{solution.purpose}</p>
          </div>
        </div>
      </section>

      {/* 4/5. INCLUÍDO / NÃO INCLUÍDO */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-white font-clash mb-6">O que está incluído</h2>
              <div className="flex flex-col gap-3">
                {solution.included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#c8a84b] text-sm mt-0.5 shrink-0">✓</span>
                    <p className="text-zinc-400 text-sm font-satoshi">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white font-clash mb-6">O que não está incluído</h2>
              <div className="flex flex-col gap-3">
                {solution.excluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-zinc-600 text-sm mt-0.5 shrink-0">—</span>
                    <p className="text-zinc-500 text-sm font-satoshi">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-xl font-semibold text-white font-clash mb-8">Como funciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.process.map((p) => (
              <div key={p.step} className="flex flex-col gap-3">
                <span className="text-[#c8a84b] text-2xl font-bold font-clash">0{p.step}</span>
                <h3 className="text-white font-semibold font-clash text-sm uppercase tracking-wide">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUANDO NÃO É A MELHOR ESCOLHA */}
      <section className="py-16 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white font-clash mb-6">Quando esta solução não é a melhor escolha</h2>
            <div className="flex flex-col gap-3">
              {solution.whenNotIdeal.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-zinc-600 text-sm mt-0.5 shrink-0">→</span>
                  <p className="text-zinc-400 text-sm font-satoshi">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {solution.faqs.length > 0 && (
        <section className="py-16 border-t border-[#1f1f1f]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <h2 className="text-xl font-semibold text-white font-clash mb-8">Dúvidas frequentes</h2>
            <div className="flex flex-col gap-6 max-w-2xl">
              {solution.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-white font-semibold font-clash text-sm mb-2">{faq.question}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-satoshi">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. PRÓXIMO PASSO */}
      <section className="py-24 border-t border-[#1f1f1f]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold text-white font-clash mb-4">Próximo passo</h2>
          <p className="text-zinc-400 text-base font-satoshi mb-8 max-w-lg mx-auto">
            {solution.commercialPath === 'proposta'
              ? 'Este projeto precisa de análise e proposta personalizada.'
              : 'Vamos entender sua necessidade e recomendar o melhor caminho.'}
          </p>
          <Link
            href={solution.cta.href}
            className="inline-flex items-center justify-center bg-[#c8a84b] hover:bg-[#b0912f] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors rounded-sm font-clash"
          >
            {solution.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
