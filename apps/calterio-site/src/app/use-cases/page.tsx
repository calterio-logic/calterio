import Link from 'next/link';
import { getAllUseCases } from '@/lib/yaml-loader';
import SystemCard from '@/app/ui/Card';
import SectionHeading from '@/app/ui/SectionHeading';
import Spacing from '@/app/ui/Spacing';

export default async function UseCasesPage() {
  const useCases = await getAllUseCases();

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Use Cases"
            subtitle="Industry Solutions"
            variant="cs-style1"
          />
          <p className="text-xl text-text-secondary max-w-3xl mt-6">
            Explore how Calterio Platform transforms manufacturing operations across industries. 
            Each use case demonstrates real-world applications with measurable business impact.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <SystemCard
                key={index}
                title={useCase.title}
                description={`${useCase.industry} - ${useCase.meta_description.substring(0, 100)}...`}
                iconName="mdi:application"
                link={`/use-cases/${useCase.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Target Industries"
            subtitle="Manufacturing Sectors"
            variant="cs-style1 text-center"
          />
          <Spacing lg="60" md="40" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Agro Processing',
              'Automotive',
              'Electronics',
              'Pharmaceutical',
              'Chemical',
              'Textile',
              'Food & Beverage',
              'Aerospace',
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-surface border border-border-default rounded-md p-6 text-center hover:border-calterio-orange transition-colors"
              >
                <span className="text-text-primary font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

