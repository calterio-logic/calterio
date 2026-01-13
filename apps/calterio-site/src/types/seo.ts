/**
 * TypeScript types for SEO use case YAML schemas
 */

export interface UseCaseYAML {
  slug: string;
  title: string;
  h1: string;
  meta_description: string;
  industry: string;
  problem: string[];
  solution: string[];
  architecture_ref?: string;
  workflow?: string[];
  kpis?: string[];
  integrations?: string[];
  cta: string;
  related_use_cases?: string[];
}

export interface UseCasePageProps {
  useCase: UseCaseYAML;
}

export interface SchemaOrgSoftwareApplication {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
}

export interface SchemaOrgHowTo {
  "@context": "https://schema.org";
  "@type": "HowTo";
  name: string;
  description: string;
  step: Array<{
    "@type": "HowToStep";
    name: string;
    text: string;
  }>;
}

export type SchemaOrgType = SchemaOrgSoftwareApplication | SchemaOrgHowTo;

