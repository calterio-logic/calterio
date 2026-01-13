import { notFound } from 'next/navigation';
import { SEOLayout, ProblemBlock, FlowTimeline, MetricBadge, ArchitectureBlock } from '@calterio/uwds-core/components';
import { FOSArchitecture } from '@calterio/uwds-core/diagrams';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';
import Div from '@/app/ui/Div';
import { getAllUseCaseSlugs, getUseCaseBySlug } from '@/lib/yaml-loader';
import { UseCaseYAML } from '@/types/seo';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface UseCasePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params at build time
export async function generateStaticParams() {
  const slugs = getAllUseCaseSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = await getUseCaseBySlug(slug);

  if (!useCase) {
    return {
      title: 'Use Case Not Found | Calterio Logic',
    };
  }

  return {
    title: `${useCase.title} | Calterio Logic`,
    description: useCase.meta_description,
    openGraph: {
      title: useCase.title,
      description: useCase.meta_description,
      type: 'website',
    },
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = await getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  // Validate exactly one H1
  if (!useCase.h1) {
    throw new Error(`Use case ${slug} is missing required H1`);
  }

  // Generate Schema.org JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: useCase.title,
    description: useCase.meta_description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, Edge',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // Generate HowTo schema for workflow
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: useCase.title,
    description: useCase.meta_description,
    step: useCase.workflow?.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step,
      text: step,
    })) || [],
  };

  // Prepare workflow steps for FlowTimeline
  const workflowSteps = useCase.workflow?.map((step, index) => ({
    title: `Step ${index + 1}`,
    description: step,
    icon: `mdi:numeric-${index + 1}-circle`,
  })) || [];

  return (
    <SEOLayout
      title={useCase.title}
      description={useCase.meta_description}
      h1={useCase.h1}
      canonicalUrl={`https://calterio.com/use-cases/${useCase.slug}`}
      schema={schema}
    >
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-calterio-orange/10 text-calterio-orange rounded-md text-sm font-semibold mb-6">
              {useCase.industry}
            </div>
            <p className="text-xl text-text-secondary mb-8">
              {useCase.meta_description}
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <ProblemBlock
            title="Industry Challenges"
            problems={useCase.problem}
            solutions={useCase.solution}
          />
        </div>
      </section>

      {/* Workflow */}
      {workflowSteps.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Solution Workflow"
              subtitle="Implementation Steps"
              variant="cs-style1"
            />
            <Spacing lg="60" md="40" />
            <FlowTimeline
              steps={workflowSteps}
              flowType="linear"
            />
          </div>
        </section>
      )}

      {/* Architecture */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <ArchitectureBlock
            title="Architecture Overview"
            description={`Calterio Platform architecture for ${useCase.industry.toLowerCase()} ${useCase.title.toLowerCase()}`}
            diagram={<FOSArchitecture highlight={['uns', 'intelligence', 'workflow']} />}
            highlight={['UNS Engine', 'Factory Intelligence', 'Workflow Engine']}
            zoomable={true}
          />
        </div>
      </section>

      {/* KPIs */}
      {useCase.kpis && useCase.kpis.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Business Impact"
              subtitle="Proven Results"
              variant="cs-style1 text-center"
            />
            <Spacing lg="60" md="40" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {useCase.kpis.map((kpi, index) => {
                const match = kpi.match(/(\d+[-\d%]*)/);
                const value = match ? match[1] : kpi.split(' ')[0];
                const label = kpi.replace(/\d+[-\d%]*\s*/, '').trim();
                return (
                  <MetricBadge
                    key={index}
                    value={value}
                    label={label}
                    accent="orange"
                    size="md"
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Integrations */}
      {useCase.integrations && useCase.integrations.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="System Integrations"
              subtitle="Compatible Systems"
              variant="cs-style1"
            />
            <Spacing lg="60" md="40" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {useCase.integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-background border border-border-default rounded-md p-4 text-center"
                >
                  <span className="text-text-primary font-medium">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Use Cases */}
      {useCase.related_use_cases && useCase.related_use_cases.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Related Use Cases"
              subtitle="Explore More Solutions"
              variant="cs-style1"
            />
            <Spacing lg="60" md="40" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCase.related_use_cases.map((relatedSlug, index) => (
                <Link
                  key={index}
                  href={`/use-cases/${relatedSlug}`}
                  className="bg-surface border border-border-default rounded-md p-6 hover:border-calterio-orange transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-text-primary font-medium">
                      {relatedSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                    <Icon icon="bi:arrow-right" className="text-calterio-orange" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="bg-background border border-border-default rounded-md p-12 text-center">
            <h2 className="text-4xl font-semibold text-text-primary mb-4">
              Ready to Implement This Solution?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Request an architecture walkthrough to see how Calterio Platform can solve your {useCase.industry.toLowerCase()} manufacturing challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                {useCase.cta}
                <Icon icon="bi:arrow-right" className="ml-2" />
              </a>
              <a
                href="/architecture"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Architecture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, howToSchema]) }}
      />
    </SEOLayout>
  );
}

