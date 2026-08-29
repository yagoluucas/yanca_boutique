import type { HomePageContent } from '../types';

const whatsappHref =
  'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20pe%C3%A7as%20da%20Yanca%20Boutique.';

export const homeContent: HomePageContent = {
  seo: {
    title: 'Yanca Boutique | Moda feminina para todos os momentos',
    description:
      'Conheça uma curadoria de moda feminina pensada para acompanhar sua rotina com estilo, conforto e personalidade.',
    canonical: 'https://www.yancaboutique.com.br/',
    ogImage: 'https://placehold.co/1200x630/e9e3dd/463f3a?text=Yanca+Boutique',
  },
  header: {
    brand: 'Yanca Boutique',
    navigationLabel: 'Navegação principal',
    links: [
      { label: 'Destaques', href: '#destaques' },
      { label: 'Coleções', href: '#colecoes' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Como funciona', href: '#como-funciona' },
    ],
    action: { label: 'Falar no WhatsApp', href: whatsappHref, external: true },
  },
  hero: {
    eyebrow: 'Nova curadoria',
    title: 'Peças que combinam com o seu jeito de viver',
    description:
      'Uma seleção de moda feminina versátil, atual e escolhida com cuidado para você.',
    primaryAction: { label: 'Ver destaques', href: '#destaques' },
    secondaryAction: { label: 'Falar no WhatsApp', href: whatsappHref, external: true },
    image: {
      src: 'https://placehold.co/900x1100/e9e3dd/463f3a?text=Campanha+Yanca',
      alt: 'Espaço reservado para a imagem principal da campanha Yanca Boutique',
      width: 900,
      height: 1100,
    },
  },
  benefits: {
    accessibilityLabel: 'Diferenciais rápidos',
    items: [
      { title: 'Curadoria especial', description: 'Peças escolhidas para unir estilo e versatilidade.' },
      { title: 'Atendimento próximo', description: 'Ajuda personalizada para encontrar o look ideal.' },
      { title: 'Compra simples', description: 'Escolha suas peças e finalize o atendimento pelo WhatsApp.' },
    ],
  },
  editorial: {
    id: 'estilo-para-rotina',
    eyebrow: 'Para a vida real',
    title: 'Estilo que acompanha todos os seus momentos',
    description:
      'Do trabalho ao fim de semana, nossa curadoria reúne peças fáceis de combinar e feitas para ganhar espaço no seu guarda-roupa.',
    image: {
      src: 'https://placehold.co/1000x800/ddd3ca/463f3a?text=Editorial+01',
      alt: 'Espaço reservado para uma fotografia editorial de moda feminina',
      width: 1000,
      height: 800,
    },
    link: { label: 'Conhecer a boutique', href: '#sobre' },
    imagePosition: 'start',
  },
  featuredProducts: {
    id: 'destaques',
    eyebrow: 'Seleção da semana',
    title: 'Produtos em destaque',
    description: 'Uma prévia das peças que acabam de chegar à nossa curadoria.',
    items: [
      {
        name: 'Vestido Midi Essencial',
        category: 'Vestidos',
        price: 'R$ 289,90',
        image: {
          src: 'https://placehold.co/700x900/e8dfd7/463f3a?text=Produto+01',
          alt: 'Espaço reservado para foto do Vestido Midi Essencial',
          width: 700,
          height: 900,
        },
        link: { label: 'Consultar peça', href: whatsappHref, external: true },
      },
      {
        name: 'Camisa Leve Natural',
        category: 'Camisas',
        price: 'R$ 189,90',
        image: {
          src: 'https://placehold.co/700x900/e3ddd5/463f3a?text=Produto+02',
          alt: 'Espaço reservado para foto da Camisa Leve Natural',
          width: 700,
          height: 900,
        },
        link: { label: 'Consultar peça', href: whatsappHref, external: true },
      },
      {
        name: 'Calça Reta Atemporal',
        category: 'Calças',
        price: 'R$ 239,90',
        image: {
          src: 'https://placehold.co/700x900/ded6cd/463f3a?text=Produto+03',
          alt: 'Espaço reservado para foto da Calça Reta Atemporal',
          width: 700,
          height: 900,
        },
        link: { label: 'Consultar peça', href: whatsappHref, external: true },
      },
    ],
    action: { label: 'Ver todas as opções', href: whatsappHref, external: true },
  },
  collections: {
    id: 'colecoes',
    eyebrow: 'Encontre seu estilo',
    title: 'Coleções e categorias',
    description: 'Explore caminhos para descobrir sua próxima peça favorita.',
    items: [
      {
        title: 'Essenciais',
        description: 'Bases versáteis para multiplicar as combinações.',
        image: {
          src: 'https://placehold.co/800x700/e5ddd5/463f3a?text=Essenciais',
          alt: 'Espaço reservado para a coleção Essenciais',
          width: 800,
          height: 700,
        },
        link: { label: 'Explorar essenciais', href: whatsappHref, external: true },
      },
      {
        title: 'Novidades',
        description: 'As escolhas mais recentes da nossa curadoria.',
        image: {
          src: 'https://placehold.co/800x700/dad2ca/463f3a?text=Novidades',
          alt: 'Espaço reservado para a coleção Novidades',
          width: 800,
          height: 700,
        },
        link: { label: 'Explorar novidades', href: whatsappHref, external: true },
      },
    ],
  },
  about: {
    id: 'sobre',
    eyebrow: 'Yanca Boutique',
    title: 'Uma boutique feita de escolhas cuidadosas',
    description:
      'Queremos tornar a experiência de escolher roupas mais leve, próxima e inspiradora — da primeira conversa à peça que chega até você.',
    highlights: [
      { title: 'Olhar atento', description: 'Selecionamos cada item pensando em qualidade, caimento e uso real.' },
      { title: 'Relação próxima', description: 'Atendimento humano para entender preferências e necessidades.' },
      { title: 'Estilo com intenção', description: 'Menos excessos, mais peças que fazem sentido para você.' },
    ],
  },
  howItWorks: {
    id: 'como-funciona',
    eyebrow: 'Simples e próximo',
    title: 'Como funciona',
    description: 'Da descoberta ao atendimento, você resolve tudo em poucos passos.',
    steps: [
      { title: 'Explore', description: 'Conheça os destaques e coleções disponíveis no catálogo.' },
      { title: 'Converse', description: 'Chame no WhatsApp para tirar dúvidas sobre tamanhos e combinações.' },
      { title: 'Escolha', description: 'Defina suas peças com apoio de um atendimento personalizado.' },
    ],
  },
  closingEditorial: {
    id: 'editorial-final',
    eyebrow: 'Seu guarda-roupa, suas escolhas',
    title: 'Moda para vestir quem você é',
    description:
      'Descubra peças que respeitam seu ritmo, valorizam sua personalidade e tornam o vestir mais prazeroso.',
    image: {
      src: 'https://placehold.co/1000x800/d8cec5/463f3a?text=Editorial+02',
      alt: 'Espaço reservado para fotografia final da campanha da boutique',
      width: 1000,
      height: 800,
    },
    imagePosition: 'end',
  },
  finalCta: {
    id: 'contato',
    eyebrow: 'Vamos conversar?',
    title: 'Encontre sua próxima peça favorita',
    description: 'Fale com a Yanca Boutique e receba um atendimento próximo e personalizado.',
    action: { label: 'Chamar no WhatsApp', href: whatsappHref, external: true },
  },
  footer: {
    brand: 'Yanca Boutique',
    description: 'Moda feminina com curadoria, versatilidade e atendimento próximo.',
    navigationLabel: 'Navegação do rodapé',
    links: [
      { label: 'Destaques', href: '#destaques' },
      { label: 'Coleções', href: '#colecoes' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Como funciona', href: '#como-funciona' },
    ],
    contactTitle: 'Contato',
    contactLinks: [
      { label: 'WhatsApp', href: whatsappHref, external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/', external: true },
    ],
    copyright: 'Yanca Boutique. Conteúdo demonstrativo.',
  },
  whatsapp: {
    label: 'Falar com a Yanca Boutique pelo WhatsApp',
    href: whatsappHref,
  },
};
