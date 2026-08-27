export type CommercialPath = 'checkout' | 'bot-qualificacao' | 'proposta';
export type PriceType = 'fixo' | 'recorrente' | 'sob-consulta';

export interface Solution {
  slug: string;
  name: string;
  front: 'presenca-local' | 'presenca-web' | 'automacoes';
  summary: string;
  problem: string;
  idealFor: string[];
  purpose: string;
  included: string[];
  excluded: string[];
  process: { step: number; title: string; description: string }[];
  whenNotIdeal: string[];
  commercialPath: CommercialPath;
  price?: string;
  priceType?: PriceType;
  metadata: { title: string; description: string };
  faqs: { question: string; answer: string }[];
  cta: { label: string; href: string };
}
