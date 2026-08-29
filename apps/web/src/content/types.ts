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
  price: string;
  image: ImageContent;
  link: LinkContent;
}

export interface CollectionContent {
  title: string;
  description: string;
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
    navigationLabel: string;
    links: LinkContent[];
    action: LinkContent;
  };
  hero: SectionHeadingContent & {
    primaryAction: LinkContent;
    secondaryAction: LinkContent;
    image: ImageContent;
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
    highlights: BenefitContent[];
  };
  howItWorks: SectionHeadingContent & {
    id: string;
    steps: BenefitContent[];
  };
  closingEditorial: EditorialContent;
  finalCta: SectionHeadingContent & {
    id: string;
    action: LinkContent;
  };
  footer: {
    brand: string;
    description: string;
    navigationLabel: string;
    links: LinkContent[];
    contactTitle: string;
    contactLinks: LinkContent[];
    copyright: string;
  };
  whatsapp: {
    label: string;
    href: string;
  };
}
