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
    eyebrow: "Yanca Boutique",
    title: "Elegância em cada detalhe.",
    description:
      "Uma seleção de peças femininas para você se sentir ainda mais confiante em todos os momentos.",
    primaryAction: { label: "Conheça a coleção", href: "#destaques" },
    secondaryAction: {
      label: "Receber atendimento",
      href: whatsappHref,
      external: true,
    },
  },
  featuredProducts: {
    id: "destaques",
    eyebrow: "Peças da semana",
    title: "Três escolhas para montar o look.",
    description:
      "Toque nos pontos da imagem para ver os detalhes de cada peça. Depois, chame a boutique para consultar disponibilidade pelo WhatsApp.",
    items: [
      {
        id: "look-comfy-off-white-1",
        name: "Conjunto Comfy Off-white",
        category: "Conjuntos",
        badge: "Look 01",
        description:
          "Blusa e calça em tom claro, com proposta confortável para dias frios e produções casuais elegantes.",
        image: {
          src: "/images/conjunto-frio-1.jpeg",
          alt: "Modelo usando conjunto comfy off-white com blusa e calça",
          width: 737,
          height: 1305,
        },
        details: [
          {
            id: "blusa-comfy-off-white",
            name: "Blusa Comfy Off-white",
            category: "Blusas",
            priceLabel: "Gola alta, toque macio e caimento confortável para compor looks de frio.",
            position: { x: 65, y: 42 },
            link: { label: "Consultar no WhatsApp", href: whatsappHref, external: true },
          },
          {
            id: "calca-comfy-off-white",
            name: "Calça Comfy Off-white",
            category: "Calças",
            priceLabel: "Cintura confortável e visual clean para usar em conjunto ou combinar com outras peças.",
            position: { x: 63, y: 78 },
            panelPosition: "left",
            link: { label: "Consultar no WhatsApp", href: whatsappHref, external: true },
          },
        ],
        link: { label: "Consultar look", href: whatsappHref, external: true },
      },
      {
        id: "look-comfy-off-white-2",
        name: "Conjunto Casual Claro",
        category: "Conjuntos",
        badge: "Look 02",
        description:
          "Uma proposta leve e versátil para quem quer praticidade sem perder a sensação de look pensado.",
        image: {
          src: "/images/conjunto-frio-1.jpeg",
          alt: "Modelo usando conjunto casual claro com blusa e calça",
          width: 737,
          height: 1305,
        },
        details: [
          {
            id: "blusa-casual-clara",
            name: "Blusa Casual Clara",
            category: "Blusas",
            priceLabel: "Modelagem confortável, ideal para usar fechada ou com a gola mais aberta.",
            position: { x: 65, y: 42 },
            link: { label: "Consultar no WhatsApp", href: whatsappHref, external: true },
          },
          {
            id: "calca-casual-clara",
            name: "Calça Casual Clara",
            category: "Calças",
            priceLabel: "Peça prática para uma composição monocromática com toque sofisticado.",
            position: { x: 63, y: 78 },
            panelPosition: "left",
            link: { label: "Consultar no WhatsApp", href: whatsappHref, external: true },
          },
        ],
        link: { label: "Consultar look", href: whatsappHref, external: true },
      },
      {
        id: "look-comfy-off-white-3",
        name: "Look Off-white de Frio",
        category: "Conjuntos",
        badge: "Look 03",
        description:
          "Visual coordenado em tons claros, pensado para transmitir conforto, cuidado e presença.",
        image: {
          src: "/images/conjunto-frio-1.jpeg",
          alt: "Modelo usando look off-white de frio com blusa e calça",
          width: 737,
          height: 1305,
        },
        details: [
          {
            id: "blusa-frio-off-white",
            name: "Blusa Frio Off-white",
            category: "Blusas",
            priceLabel: "Detalhe de gola alta e textura confortável para dias de temperatura mais baixa.",
            position: { x: 65, y: 42 },
            link: { label: "Consultar no WhatsApp", href: whatsappHref, external: true },
          },
          {
            id: "calca-frio-off-white",
            name: "Calça Frio Off-white",
            category: "Calças",
            priceLabel: "Caimento casual e cor neutra para facilitar combinações no guarda-roupa.",
            position: { x: 63, y: 78 },
            panelPosition: "left",
            link: { label: "Consultar no WhatsApp", href: whatsappHref, external: true },
          },
        ],
        link: { label: "Consultar look", href: whatsappHref, external: true },
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
