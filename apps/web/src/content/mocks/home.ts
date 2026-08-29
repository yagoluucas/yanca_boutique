import type { HomePageContent } from "../types";

const whatsappHref =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20pe%C3%A7as%20da%20Yanca%20Boutique.";

export const homeContent: HomePageContent = {
  seo: {
    title: "Yanca Boutique | Moda feminina para todos os momentos",
    description:
      "Peças femininas selecionadas para quem gosta de se vestir com personalidade, conforto e praticidade.",
    canonical: "https://www.yancaboutique.com.br/",
    ogImage: "https://placehold.co/1200x630/efe7e2/1c1917?text=Yanca+Boutique",
  },
  header: {
    brand: "Yanca Boutique",
    monogram: "YB",
    tagline: "Moda feminina",
    menuLabel: "Abrir menu",
    navigationLabel: "Navegação principal",
    links: [
      { label: "Novidades", href: "#destaques" },
      { label: "Coleções", href: "#colecoes" },
      { label: "Sobre a Yanca", href: "#sobre" },
      { label: "Como comprar", href: "#como-funciona" },
    ],
  },
  hero: {
    eyebrow: "Moda feminina selecionada para você",
    title: "Peças que valorizam seu estilo em todos os momentos.",
    description:
      "Descubra looks modernos, femininos e fáceis de combinar. Escolha sua peça favorita e fale com a Yanca Boutique pelo WhatsApp para consultar tamanho, cor e disponibilidade.",
    primaryAction: { label: "Ver peças em destaque", href: "#destaques" },
    secondaryAction: {
      label: "Receber atendimento",
      href: whatsappHref,
      external: true,
    },
  },
  benefits: {
    accessibilityLabel: "Diferenciais da Yanca Boutique",
    items: [
      {
        title: "Atendimento próximo",
        description: "Converse diretamente com a loja.",
      },
      {
        title: "Curadoria feminina",
        description: "Peças escolhidas para diferentes estilos.",
      },
      {
        title: "Compra simples",
        description: "Escolha no site e finalize pelo WhatsApp.",
      },
    ],
  },
  editorial: {
    id: "novidades",
    eyebrow: "Novidades da boutique",
    title: "Looks marcantes sem abrir mão do conforto.",
    image: {
      src: "https://placehold.co/900x1100/d3c2b7/1c1917?text=Editorial+Yanca",
      alt: "Espaço reservado para fotografia editorial de uma novidade da boutique",
      width: 900,
      height: 1100,
    },
  },
  featuredProducts: {
    id: "destaques",
    eyebrow: "Destaques da semana",
    title: "Três peças para começar a coleção.",
    description:
      "Uma vitrine enxuta para apresentar os principais produtos logo no início. A disponibilidade pode ser confirmada diretamente pelo WhatsApp.",
    items: [
      {
        name: "Macacão Canelado Preto",
        category: "Macacões",
        badge: "Clássico",
        description:
          "Modelagem ajustada, tecido canelado e visual versátil para produções do dia à noite.",
        price: "R$ 189,90",
        installment: "ou 3x de R$ 63,30",
        image: {
          src: "https://placehold.co/720x900/d7d4d1/1c1917?text=Macacão+Preto",
          alt: "Espaço reservado para foto do Macacão Canelado Preto",
          width: 720,
          height: 900,
        },
        link: { label: "Consultar peça", href: whatsappHref, external: true },
      },
      {
        name: "Macacão Tricot Off-White",
        category: "Macacões",
        badge: "Mais desejado",
        description:
          "Um look claro e elegante, com textura suave e caimento que acompanha a silhueta.",
        price: "R$ 199,90",
        installment: "ou 3x de R$ 66,63",
        image: {
          src: "https://placehold.co/720x900/e5e0db/1c1917?text=Macacão+Off-White",
          alt: "Espaço reservado para foto do Macacão Tricot Off-White",
          width: 720,
          height: 900,
        },
        link: { label: "Consultar peça", href: whatsappHref, external: true },
      },
      {
        name: "Conjunto Jeans Estampado",
        category: "Conjuntos",
        badge: "Novidade",
        description:
          "Top estruturado e saia curta em jeans para um visual jovem.",
        price: "R$ 219,90",
        installment: "ou 3x de R$ 73,30",
        image: {
          src: "https://placehold.co/720x900/b9c8d2/1c1917?text=Conjunto+Jeans",
          alt: "Espaço reservado para foto do Conjunto Jeans Estampado",
          width: 720,
          height: 900,
        },
        link: { label: "Consultar peça", href: whatsappHref, external: true },
      },
    ],
    action: {
      label: "Consultar outras peças",
      href: whatsappHref,
      external: true,
    },
  },
  collections: {
    id: "colecoes",
    eyebrow: "Encontre seu estilo",
    title: "Explore as coleções da Yanca.",
    items: [
      {
        title: "Macacões",
        eyebrow: "Elegância e praticidade",
        image: {
          src: "https://placehold.co/720x860/6f5c55/ffffff?text=Macacões",
          alt: "Espaço reservado para a coleção de macacões",
          width: 720,
          height: 860,
        },
        link: { label: "Ver modelos", href: whatsappHref, external: true },
      },
      {
        title: "Conjuntos",
        eyebrow: "Produções completas",
        image: {
          src: "https://placehold.co/720x860/8a796f/ffffff?text=Conjuntos",
          alt: "Espaço reservado para a coleção de conjuntos",
          width: 720,
          height: 860,
        },
        link: { label: "Ver modelos", href: whatsappHref, external: true },
      },
      {
        title: "Vestidos",
        eyebrow: "Femininos e versáteis",
        image: {
          src: "https://placehold.co/720x860/a89187/ffffff?text=Vestidos",
          alt: "Espaço reservado para a coleção de vestidos",
          width: 720,
          height: 860,
        },
        link: { label: "Ver modelos", href: whatsappHref, external: true },
      },
      {
        title: "Tricot",
        eyebrow: "Conforto para dias frios",
        image: {
          src: "https://placehold.co/720x860/9b8275/ffffff?text=Tricot",
          alt: "Espaço reservado para a coleção de tricot",
          width: 720,
          height: 860,
        },
        link: { label: "Ver modelos", href: whatsappHref, external: true },
      },
      {
        title: "Jeans",
        eyebrow: "Para looks urbanos",
        image: {
          src: "https://placehold.co/720x860/71808a/ffffff?text=Jeans",
          alt: "Espaço reservado para a coleção jeans",
          width: 720,
          height: 860,
        },
        link: { label: "Ver modelos", href: whatsappHref, external: true },
      },
      {
        title: "Blusas",
        eyebrow: "Versáteis para combinar",
        image: {
          src: "https://placehold.co/720x860/b88f82/ffffff?text=Blusas",
          alt: "Espaço reservado para a coleção de blusas",
          width: 720,
          height: 860,
        },
        link: { label: "Ver modelos", href: whatsappHref, external: true },
      },
    ],
  },
  about: {
    id: "sobre",
    eyebrow: "Por que escolher a Yanca",
    title: "Uma boutique pensada para tornar sua escolha mais fácil.",
    description:
      "A Yanca Boutique reúne moda feminina com atendimento próximo e uma seleção de peças que transitam entre o casual, o elegante e o marcante. O site funciona como uma vitrine: você conhece os produtos com calma e chama a loja quando quiser tirar dúvidas ou comprar.",
    action: {
      label: "Falar com a Yanca Boutique",
      href: whatsappHref,
      external: true,
    },
    highlights: [
      {
        title: "Atendimento humanizado",
        description:
          "Você conversa com a loja para confirmar medidas, cores, disponibilidade e entrega.",
      },
      {
        title: "Seleção de peças",
        description:
          "Uma curadoria focada em looks femininos modernos, versáteis e fáceis de usar.",
      },
      {
        title: "Compra sem complicação",
        description:
          "Nada de cadastro ou checkout longo: escolha a peça e continue pelo WhatsApp.",
      },
    ],
  },
  howItWorks: {
    id: "como-funciona",
    eyebrow: "Como funciona",
    title: "Do site para o seu guarda-roupa em poucos passos.",
    steps: [
      {
        title: "Escolha sua peça",
        description:
          "Navegue pelos destaques e coleções para encontrar o look que combina com você.",
      },
      {
        title: "Chame pelo WhatsApp",
        description:
          "O botão envia o nome da peça automaticamente para agilizar o atendimento.",
      },
      {
        title: "Confirme os detalhes",
        description:
          "A loja informa tamanhos, cores, pagamento, retirada ou envio disponíveis.",
      },
    ],
    action: {
      label: "Começar atendimento",
      href: whatsappHref,
      external: true,
    },
  },
  closingEditorial: {
    id: "editorial-final",
    title: "Uma seleção feita para o seu estilo",
    image: {
      src: "https://placehold.co/900x1100/c9c2bd/1c1917?text=Look+Yanca",
      alt: "Espaço reservado para uma fotografia de look completo da Yanca Boutique",
      width: 900,
      height: 1100,
    },
  },
  finalCta: {
    id: "contato",
    eyebrow: "Seu próximo look está aqui",
    title: "Encontrou uma peça que combina com você?",
    description:
      "Fale com a Yanca Boutique para consultar disponibilidade e receber atendimento personalizado.",
    action: {
      label: "Conversar no WhatsApp",
      href: whatsappHref,
      external: true,
    },
  },
  footer: {
    brand: "Yanca Boutique",
    monogram: "YB",
    tagline: "Moda feminina",
    description:
      "Peças selecionadas para mulheres que gostam de se vestir com personalidade.",
    navigationLabel: "Navegação do rodapé",
    navigationTitle: "Navegação",
    links: [
      { label: "Novidades", href: "#destaques" },
      { label: "Coleções", href: "#colecoes" },
      { label: "Sobre a Yanca", href: "#sobre" },
      { label: "Como comprar", href: "#como-funciona" },
    ],
    serviceTitle: "Atendimento",
    serviceLines: [
      "WhatsApp",
      "Segunda a sábado",
      "Consulte horários de atendimento",
    ],
    copyright: "Yanca Boutique.",
    closingLine: "Todos os direitos reservados",
  },
  whatsapp: {
    label: "Falar com a Yanca Boutique pelo WhatsApp",
    href: whatsappHref,
  },
};
