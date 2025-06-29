
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Circle, Settings, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      icon: Circle,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      features: ['React Native', 'iOS & Android', 'Cross-platform', 'Native Performance']
    },
    {
      icon: Settings,
      title: t('services.api.title'),
      description: t('services.api.description'),
      features: ['REST & GraphQL', 'Database Design', 'Security', 'Documentation']
    },
    {
      icon: Star,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: ['Machine Learning', 'Data Analysis', 'Automation', 'Integration']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mizatech-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-mizatech-dark">
            {t('services.title')}
          </h1>
          <p className="mt-6 text-xl text-mizatech-gray max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-mizatech-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-mizatech-orange/20 transition-colors">
                    <service.icon className="h-8 w-8 text-mizatech-orange" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-mizatech-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mizatech-gray mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-mizatech-gray">
                        <Circle className="h-2 w-2 text-mizatech-orange mr-3 fill-current" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-mizatech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-mizatech-dark">
              Our Process
            </h2>
            <p className="mt-6 text-xl text-mizatech-gray max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building with best practices and quality' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-mizatech-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-mizatech-dark mb-2">
                  {phase.title}
                </h3>
                <p className="text-mizatech-gray">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
