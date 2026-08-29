export interface ImageContent {
  src: string;
  alt: string;
  width: number;
  height: number;
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
  name: string;
  category: string;
  badge: string;
  description: string;
  price: string;
  installment: string;
  image: ImageContent;
  link: LinkContent;
}

export interface CollectionContent {
  title: string;
  eyebrow: string;
  image: ImageContent;
  link: LinkContent;
}

export interface EditorialContent extends SectionHeadingContent {
  id: string;
  image: ImageContent;
  link?: LinkContent;
  imagePosition?: 'start' | 'end';
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
    primaryAction: LinkContent;
    secondaryAction: LinkContent;
  };
  benefits: {
    accessibilityLabel: string;
    items: BenefitContent[];
  };
  editorial: EditorialContent;
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
  closingEditorial: EditorialContent;
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
