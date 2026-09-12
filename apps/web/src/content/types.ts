export interface ImageContent {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /**
   * Ponto de enquadramento da imagem dentro do container, em porcentagem.
   * Ex.: { x: 50, y: 30 } centraliza horizontalmente e prioriza a parte superior.
   */
  focusPosition?: {
    x: number;
    y: number;
  };
}

export interface LinkContent {
  label: string;
  href: string;
  external?: boolean;
}

export interface SectionHeadingContent {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface BenefitContent {
  title: string;
  description: string;
}

export interface ProductContent {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  image: ImageContent;
  details: EditorialItemContent[];
  link: LinkContent;
}

export interface CollectionContent {
  title: string;
  eyebrow: string;
  image: ImageContent;
  link: LinkContent;
}

export interface EditorialItemContent {
  id: string;
  name: string;
  category: string;
  priceLabel: string;
  /**
   * Posição do marcador + dentro da imagem renderizada, em porcentagem.
   * Deve ser ajustada para cada nova fotografia.
   */
  position: {
    x: number;
    y: number;
  };
  panelPosition?: 'left' | 'right';
  link: LinkContent;
}

export interface EditorialLookContent {
  id: string;
  image: ImageContent;
  items: EditorialItemContent[];
}

export interface EditorialContent extends SectionHeadingContent {
  id: string;
  looks: EditorialLookContent[];
}

export interface ClosingEditorialContent extends SectionHeadingContent {
  id: string;
  image: ImageContent;
}

export interface HomePageContent {
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
  header: {
    brand: string;
    monogram: string;
    tagline: string;
    menuLabel: string;
    navigationLabel: string;
    links: LinkContent[];
  };
  hero: SectionHeadingContent & {
    image: ImageContent;
    primaryAction: LinkContent;
    secondaryAction: LinkContent;
  };
  featuredProducts: SectionHeadingContent & {
    id: string;
    items: ProductContent[];
    action: LinkContent;
  };
  collections: SectionHeadingContent & {
    id: string;
    items: CollectionContent[];
  };
  about: SectionHeadingContent & {
    id: string;
    action: LinkContent;
    highlights: BenefitContent[];
  };
  howItWorks: SectionHeadingContent & {
    id: string;
    action: LinkContent;
    steps: BenefitContent[];
  };
  closingEditorial: ClosingEditorialContent;
  finalCta: SectionHeadingContent & {
    id: string;
    action: LinkContent;
  };
  footer: {
    brand: string;
    monogram: string;
    tagline: string;
    description: string;
    navigationLabel: string;
    navigationTitle: string;
    links: LinkContent[];
    serviceTitle: string;
    serviceLines: string[];
    copyright: string;
    closingLine: string;
  };
  whatsapp: {
    label: string;
    href: string;
  };
}
