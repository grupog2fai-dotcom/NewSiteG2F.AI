import { Solution } from '../types/solution';

export const solutions: Solution[] = [
  {
    slug: 'fundacao-local',
    name: 'Fundação Local',
    front: 'presenca-local',
    summary: 'Organizamos os principais elementos da sua presença local para que seu negócio seja apresentado com mais clareza e confiança.',
    problem: 'As pessoas procuram sua empresa localmente, mas encontram informações desatualizadas, fotos ruins ou não sentem confiança na primeira impressão.',
    idealFor: ['Negócios locais com endereço físico', 'Prestadores de serviço que atendem uma região específica', 'Empresas que dependem do Google Maps para receber clientes'],
    purpose: 'Estruturar de forma profissional o perfil da empresa no Google, garantindo que as informações base estejam corretas e atrativas.',
    included: [
      'Configuração e otimização do Google Perfil da Empresa',
      'Definição de categorias e atributos corretos',
      'Inclusão de fotos e catálogo básico de serviços',
      'Configuração de horários e feriados',
      'Otimização básica para termos de busca locais'
    ],
    excluded: [
      'Gestão mensal do perfil',
      'Respostas a avaliações futuras',
      'Criação de postagens recorrentes'
    ],
    process: [
      { step: 1, title: 'Diagnóstico', description: 'Mapeamento do estado atual da presença no Google.' },
      { step: 2, title: 'Plano de Ação', description: 'Definição das correções e melhorias estruturais.' },
      { step: 3, title: 'Execução', description: 'Implementação de todas as configurações no perfil.' },
      { step: 4, title: 'Entrega', description: 'Revisão final e passagem do acesso.' }
    ],
    whenNotIdeal: [
      'Sua empresa é 100% online e não atende regionalmente',
      'Você já tem um perfil otimizado e precisa apenas de gestão recorrente'
    ],
    commercialPath: 'checkout',
    price: 'R$ 597',
    priceType: 'fixo',
    metadata: {
      title: 'Fundação Local | G2F',
      description: 'Organizamos a presença local da sua empresa para que ela seja encontrada com clareza e passe confiança.'
    },
    faqs: [
      { question: 'Quanto tempo demora a entrega?', answer: 'A execução estrutural é feita em até 7 dias úteis após o preenchimento do formulário inicial.' },
      { question: 'Eu perco acesso ao meu perfil?', answer: 'Não. O perfil é sempre da sua empresa, nós trabalhamos como administradores.' }
    ],
    cta: {
      label: 'Solicitar Fundação Local',
      href: '/iniciar?solution=fundacao-local&front=presenca-local'
    }
  },
  {
    slug: 'gestao-local',
    name: 'Gestão Local',
    front: 'presenca-local',
    summary: 'Continuidade estruturada para manter informações e elementos definidos no plano atualizados dentro de limites claros.',
    problem: 'Sua empresa até tem o perfil configurado, mas as informações ficam desatualizadas, não há postagens novas e avaliações ficam sem resposta, perdendo relevância.',
    idealFor: ['Empresas que já passaram pela Fundação Local', 'Negócios que não têm tempo para responder clientes no Google'],
    purpose: 'Manter a presença local ativa, monitorada e atualizada, sinalizando para o Google e para o cliente que o negócio está operando com excelência.',
    included: [
      'Atualização contínua de horários e avisos',
      'Respostas estruturadas para novas avaliações',
      'Postagens mensais no perfil',
      'Monitoramento de perguntas e respostas'
    ],
    excluded: [
      'Criação de campanhas de tráfego pago',
      'Atendimento em tempo real de clientes pelo chat',
      'Produção de fotos profissionais in loco'
    ],
    process: [
      { step: 1, title: 'Alinhamento', description: 'Definição do tom de voz e regras de respostas.' },
      { step: 2, title: 'Monitoramento', description: 'Acompanhamento constante das interações no perfil.' },
      { step: 3, title: 'Atualização', description: 'Inclusão de novidades, fotos (fornecidas) e posts de atualização.' }
    ],
    whenNotIdeal: [
      'A empresa ainda não tem a fundação básica resolvida (perfil bagunçado)',
      'O cliente busca uma agência de social media para redes sociais'
    ],
    commercialPath: 'bot-qualificacao',
    price: 'R$ 297/mês',
    priceType: 'recorrente',
    metadata: {
      title: 'Gestão Local | G2F',
      description: 'Gestão e monitoramento contínuo do seu Google Perfil da Empresa para não perder relevância.'
    },
    faqs: [
      { question: 'Existe fidelidade?', answer: 'Não exigimos fidelidade de longo prazo. Acreditamos no valor entregue mensalmente.' },
      { question: 'Vocês respondem avaliações negativas?', answer: 'Sim, seguimos um protocolo de mitigação de crise estruturado junto com você.' }
    ],
    cta: {
      label: 'Iniciar Gestão Local',
      href: '/iniciar?solution=gestao-local&front=presenca-local'
    }
  },
  {
    slug: 'pagina-de-presenca',
    name: 'Página de Presença',
    front: 'presenca-web',
    summary: 'Uma página profissional para apresentar seu negócio, seus serviços e orientar o visitante para o próximo passo.',
    problem: 'Quando clientes procuram sua empresa na internet, não encontram um endereço próprio, apenas redes sociais desorganizadas ou informações fragmentadas.',
    idealFor: ['Profissionais independentes', 'Pequenas empresas iniciando digitalização', 'Negócios que precisam de um cartão de visitas digital'],
    purpose: 'Garantir que a empresa tenha uma "casa própria" na internet: rápida, profissional e focada em direcionar o cliente para o atendimento.',
    included: [
      'Desenvolvimento de página única e direta',
      'Otimização completa para celular (mobile-first)',
      'Botões integrados para WhatsApp e contatos',
      'Infraestrutura de alta performance'
    ],
    excluded: [
      'Páginas internas adicionais (Sobre, Blog, Múltiplos Serviços)',
      'Integrações com sistemas complexos ou CRMs',
      'Criação de identidade visual (logotipo)'
    ],
    process: [
      { step: 1, title: 'Coleta', description: 'Levantamento das informações vitais da empresa e serviços.' },
      { step: 2, title: 'Estruturação', description: 'Organização do conteúdo focando na clareza e ação.' },
      { step: 3, title: 'Design & Build', description: 'Desenvolvimento focado em performance.' },
      { step: 4, title: 'Entrega', description: 'Página no ar configurada no seu domínio.' }
    ],
    whenNotIdeal: [
      'Você precisa focar numa oferta muito específica (para isso, use a Landing Page)',
      'Você tem muitos produtos, páginas e informações complexas (use Site Institucional)'
    ],
    commercialPath: 'checkout',
    price: 'R$ 1.197',
    priceType: 'fixo',
    metadata: {
      title: 'Página de Presença | G2F',
      description: 'Uma página direta e profissional para apresentar seus serviços e direcionar o contato.'
    },
    faqs: [
      { question: 'Preciso pagar hospedagem?', answer: 'Incluímos a configuração inicial. Hospedagem é definida conforme o volume do seu projeto, usamos opções modernas e muitas vezes gratuitas de infraestrutura.' }
    ],
    cta: {
      label: 'Solicitar Página de Presença',
      href: '/iniciar?solution=pagina-de-presenca&front=presenca-web'
    }
  },
  {
    slug: 'landing-page-de-conversao',
    name: 'Landing Page de Conversão',
    front: 'presenca-web',
    summary: 'Uma página estruturada para apresentar uma oferta específica e conduzir o visitante até uma ação definida.',
    problem: 'Sua empresa até atrai atenção ou tráfego, mas não converte porque o visitante se perde, não entende a oferta ou não é conduzido à ação.',
    idealFor: ['Empresas investindo em anúncios (Tráfego Pago)', 'Lançamentos de produtos ou serviços específicos', 'Campanhas promocionais com objetivo claro de lead/venda'],
    purpose: 'Focar 100% da atenção do visitante em uma única oferta e remover distrações para maximizar a conversão.',
    included: [
      'Estrutura narrativa orientada à conversão',
      'Copywriting focado no problema e na solução',
      'Alta performance e carregamento rápido',
      'Instalação de scripts de rastreamento base (Pixel/Tag Manager)'
    ],
    excluded: [
      'Gestão contínua de campanhas de tráfego pago',
      'Criação de páginas adicionais'
    ],
    process: [
      { step: 1, title: 'Entendimento da Oferta', description: 'Mapeamento profundo do que será vendido e para quem.' },
      { step: 2, title: 'Arquitetura e Copy', description: 'Estruturação persuasiva da página.' },
      { step: 3, title: 'Design & Build', description: 'Desenvolvimento técnico voltado à velocidade.' },
      { step: 4, title: 'Testes e Go-Live', description: 'Testes de conversão e entrega final.' }
    ],
    whenNotIdeal: [
      'O objetivo é apresentar toda a história e dezenas de serviços da empresa',
      'A empresa não tem fluxo de tráfego (visitas) garantido'
    ],
    commercialPath: 'bot-qualificacao',
    price: 'R$ 1.697',
    priceType: 'fixo',
    metadata: {
      title: 'Landing Page de Conversão | G2F',
      description: 'Página de alta conversão estruturada para focar em uma oferta específica.'
    },
    faqs: [
      { question: 'Vocês gerenciam os anúncios também?', answer: 'Não, o escopo desta solução é focado em preparar o "terreno" perfeito para o tráfego que você ou sua agência vão gerar.' }
    ],
    cta: {
      label: 'Analisar Projeto de Landing Page',
      href: '/iniciar?solution=landing-page-de-conversao&front=presenca-web'
    }
  },
  {
    slug: 'site-institucional',
    name: 'Site Institucional',
    front: 'presenca-web',
    summary: 'Uma presença web mais completa para empresas que precisam organizar múltiplas informações, páginas e pontos de contato.',
    problem: 'Empresas complexas perdem credibilidade porque sua presença atual é confusa, não representa seu tamanho real ou não organiza seus serviços.',
    idealFor: ['Empresas consolidadas', 'Indústrias', 'Consultorias amplas com várias verticais', 'Negócios que precisam validar autoridade para grandes contratos'],
    purpose: 'Criar um hub digital profissional que apresente a empresa, estruture suas soluções e transmita a dimensão real do seu negócio.',
    included: [
      'Arquitetura multi-página (Início, Sobre, Serviços, Contato, etc.)',
      'Design System completo',
      'CMS (Gestor de conteúdo) para áreas dinâmicas (se aplicável)',
      'Otimização técnica para motores de busca (SEO Técnico)'
    ],
    excluded: [
      'Sistemas complexos sob medida (ex: portal de clientes, E-commerce complexo)',
      'Produção recorrente de artigos de blog'
    ],
    process: [
      { step: 1, title: 'Imersão', description: 'Análise do negócio e definição de arquitetura da informação.' },
      { step: 2, title: 'Wireframing e Design', description: 'Aprovação visual da estrutura.' },
      { step: 3, title: 'Desenvolvimento', description: 'Programação de todas as páginas e rotas.' },
      { step: 4, title: 'Homologação e Lançamento', description: 'Revisão geral e publicação oficial.' }
    ],
    whenNotIdeal: [
      'Você só quer uma página para colocar na bio do Instagram (use Página de Presença)',
      'Você precisa aprovar algo para começar a vender em 3 dias'
    ],
    commercialPath: 'proposta',
    price: 'A partir de R$ 2.197',
    priceType: 'sob-consulta',
    metadata: {
      title: 'Site Institucional | G2F',
      description: 'Estruturação completa da sua presença corporativa com múltiplas páginas e foco em credibilidade.'
    },
    faqs: [
      { question: 'Qual o prazo de um site completo?', answer: 'Depende da complexidade, mas tipicamente entre 3 a 6 semanas, passando por aprovações rígidas.' }
    ],
    cta: {
      label: 'Solicitar Análise e Proposta',
      href: '/iniciar?solution=site-institucional&front=presenca-web&type=proposta'
    }
  },
  {
    slug: 'processo-automatizado',
    name: 'Processo Automatizado',
    front: 'automacoes',
    summary: 'Estruturamos e automatizamos um processo repetitivo e claramente definido da sua operação.',
    problem: 'Alguém na sua empresa copia informações de um lugar para o outro, perde tempo com mensagens de cobrança/lembrete manual ou alimenta planilhas diariamente.',
    idealFor: ['Equipes pequenas que não têm tempo a perder', 'Empresas com processos manuais engessados (ex: gerar PDF de contrato)', 'Lojas que perdem carrinhos por falta de mensagem no WhatsApp'],
    purpose: 'Substituir trabalho braçal e repetitivo por um fluxo seguro e automatizado que funcione 24/7 sem erros humanos.',
    included: [
      'Mapeamento do processo pontual',
      'Desenvolvimento do fluxo no Make, Zapier ou similar',
      'Integração entre 2 a 3 ferramentas (ex: Formulário -> Planilha -> WhatsApp)',
      'Testes de carga e estabilidade'
    ],
    excluded: [
      'Desenvolvimento de software do zero',
      'Automação de inteligência artificial profunda',
      'Sustentação contínua de processos com mudanças semanais'
    ],
    process: [
      { step: 1, title: 'Mapeamento', description: 'Desenho exato do que acontece hoje.' },
      { step: 2, title: 'Estruturação', description: 'Definição da stack (ex: Tally + Make + Z-API).' },
      { step: 3, title: 'Build', description: 'Construção técnica e tratamento de erros (error handling).' },
      { step: 4, title: 'Ativação', description: 'Colocar o fluxo em produção.' }
    ],
    whenNotIdeal: [
      'O processo não tem regra clara e depende de feeling ou decisão humana o tempo todo',
      'Você quer automatizar algo complexo com dezenas de cenários distintos (use Processo Inteligente)'
    ],
    commercialPath: 'checkout',
    price: 'R$ 697',
    priceType: 'fixo',
    metadata: {
      title: 'Processo Automatizado | G2F',
      description: 'Libere sua equipe do trabalho braçal automatizando fluxos repetitivos.'
    },
    faqs: [
      { question: 'Preciso pagar as ferramentas de automação mensalmente?', answer: 'Sim, você será o titular das contas (ex: Make). Muitos fluxos operam bem nos planos gratuitos, mas indicamos planos básicos para volume maior.' }
    ],
    cta: {
      label: 'Solicitar Automação',
      href: '/iniciar?solution=processo-automatizado&front=automacoes'
    }
  },
  {
    slug: 'processo-inteligente',
    name: 'Processo Inteligente',
    front: 'automacoes',
    summary: 'Estruturamos fluxos com múltiplas etapas, regras, condições e validações conforme o cenário analisado.',
    problem: 'Seu processo envolve regras de negócio complicadas, checagem de banco de dados, fluxos de aprovação e inteligência para não errar. Processos que travam no volume.',
    idealFor: ['Empresas em fase de escala', 'Operações de e-commerce complexas', 'Processos de qualificação de vendas (SDR IA)'],
    purpose: 'Instalar lógicas complexas e validações inteligentes (inclusive usando IA) para tratar demandas que antes precisavam de um especialista.',
    included: [
      'Levantamento aprofundado de regras de negócio',
      'Múltiplos caminhos e condicionais lógicas',
      'Integração com IA (LLMs) para análise, extração ou qualificação',
      'Tratamento avançado de exceções'
    ],
    excluded: [
      'Refatoração de código legado da sua empresa',
      'Suporte a integrações sem documentação (APIs obscuras)'
    ],
    process: [
      { step: 1, title: 'Arquitetura', description: 'Documentação do fluxo e regras lógicas.' },
      { step: 2, title: 'Engenharia de Prompts (se houver IA)', description: 'Calibração do comportamento.' },
      { step: 3, title: 'Build & Integrações', description: 'Desenvolvimento do sistema orquestrado.' },
      { step: 4, title: 'Testes de Estresse', description: 'Validação sob diferentes cenários atípicos.' }
    ],
    whenNotIdeal: [
      'O problema é simples e linear e não exige IA ou condicionais fortes',
      'A empresa não tem clareza dos próprios processos'
    ],
    commercialPath: 'bot-qualificacao',
    price: 'R$ 1.397',
    priceType: 'fixo',
    metadata: {
      title: 'Processo Inteligente | G2F',
      description: 'Lógicas de automação avançadas e com IA para processos de negócio complexos.'
    },
    faqs: [
      { question: 'O que o robô fala em caso de erro?', answer: 'Tratamos as exceções para que o fluxo sempre falhe "graciosamente" e avise um humano.' }
    ],
    cta: {
      label: 'Analisar Escopo do Processo',
      href: '/iniciar?solution=processo-inteligente&front=automacoes'
    }
  },
  {
    slug: 'projeto-personalizado',
    name: 'Projeto Personalizado',
    front: 'automacoes',
    summary: 'Para necessidades que não cabem em uma solução padronizada e exigem análise, arquitetura e proposta específica.',
    problem: 'Você tem um problema tecnológico específico e único na sua operação, ou quer integrar sistemas próprios que exigem código e infraestrutura.',
    idealFor: ['Empresas médias/grandes', 'Startups precisando de arquitetura', 'Operações que demandam squads dedicados e desenvolvimento customizado'],
    purpose: 'Entregar capacidade técnica avançada (desenvolvimento customizado, painéis próprios, integrações profundas) com o mesmo rigor de gestão da G2F.',
    included: [
      'Desenvolvimento de software / scripts customizados',
      'Integrações via código',
      'Criação de dashboards gerenciais complexos',
      'Gestão de projeto completa com documentação técnica'
    ],
    excluded: [
      'Projetos mal especificados que mudam de ideia diariamente',
      'Manutenção legada sem refatoração prévia'
    ],
    process: [
      { step: 1, title: 'Descoberta', description: 'Imersão total no desafio tecnológico.' },
      { step: 2, title: 'Arquitetura e Proposta', description: 'Desenho do sistema e cronograma financeiro.' },
      { step: 3, title: 'Desenvolvimento Customizado', description: 'Ciclos de build semanais com transparência.' },
      { step: 4, title: 'Homologação', description: 'Aprovação técnica e passagem de conhecimento.' }
    ],
    whenNotIdeal: [
      'Há ferramentas prontas de prateleira (SaaS) que resolvem seu problema por US$ 20/mês'
    ],
    commercialPath: 'proposta',
    price: 'A partir de R$ 1.997',
    priceType: 'sob-consulta',
    metadata: {
      title: 'Projeto Personalizado | G2F',
      description: 'Solução sob medida para gargalos tecnológicos e integrações de alta complexidade.'
    },
    faqs: [
      { question: 'Vocês assumem projetos inacabados?', answer: 'Exige análise severa de viabilidade. Geralmente, reconstruir do zero com arquitetura moderna é mais barato.' }
    ],
    cta: {
      label: 'Solicitar Descoberta e Proposta',
      href: '/iniciar?solution=projeto-personalizado&front=automacoes&type=proposta'
    }
  }
];
