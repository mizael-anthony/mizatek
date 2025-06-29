
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Legal = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mizatech-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-mizatech-dark">
            {t('legal.title')}
          </h1>
          <p className="mt-6 text-xl text-mizatech-gray max-w-2xl mx-auto">
            Legal documents and policies governing our services
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Privacy Policy */}
          <Card id="privacy" className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-mizatech-dark">
                {t('legal.privacy.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-mizatech-gray leading-relaxed mb-4">
                <strong>Last updated:</strong> December 2024
              </p>
              
              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Information Collection</h3>
              <p className="text-mizatech-gray leading-relaxed">
                We collect information you provide directly to us, such as when you contact us through our website forms, 
                request quotes, or communicate with us via email or phone.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Use of Information</h3>
              <p className="text-mizatech-gray leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                respond to your inquiries, and communicate with you about our services.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Information Security</h3>
              <p className="text-mizatech-gray leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Contact Us</h3>
              <p className="text-mizatech-gray leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our contact form.
              </p>
            </CardContent>
          </Card>

          {/* Terms of Service */}
          <Card id="terms" className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-mizatech-dark">
                {t('legal.terms.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-mizatech-gray leading-relaxed mb-4">
                <strong>Last updated:</strong> December 2024
              </p>
              
              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Services</h3>
              <p className="text-mizatech-gray leading-relaxed">
                Mizatech provides web development, mobile development, API creation, and AI integration services. 
                All services are provided subject to these terms and conditions.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Project Terms</h3>
              <p className="text-mizatech-gray leading-relaxed">
                Project scope, timeline, and deliverables will be defined in separate project agreements. 
                Changes to project scope may affect timeline and cost.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Payment Terms</h3>
              <p className="text-mizatech-gray leading-relaxed">
                Payment terms will be specified in individual project contracts. 
                Generally, projects require a deposit before work begins.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Limitation of Liability</h3>
              <p className="text-mizatech-gray leading-relaxed">
                Our liability for any claim arising from our services is limited to the amount paid for the specific service.
              </p>
            </CardContent>
          </Card>

          {/* Legal Mentions */}
          <Card id="mentions" className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-mizatech-dark">
                {t('legal.mentions.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Company Information</h3>
              <p className="text-mizatech-gray leading-relaxed">
                <strong>Company Name:</strong> Mizatech<br />
                <strong>Founder:</strong> Mizael<br />
                <strong>Services:</strong> Web Development, Mobile Development, API Creation, AI Integration
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Website Information</h3>
              <p className="text-mizatech-gray leading-relaxed">
                This website is operated by Mizatech and is designed to provide information about our services 
                and facilitate communication with potential clients.
              </p>

              <h3 className="text-lg font-semibold text-mizatech-dark mt-6 mb-3">Intellectual Property</h3>
              <p className="text-mizatech-gray leading-relaxed">
                All content on this website, including text, graphics, logos, and software, 
                is the property of Mizatech and is protected by copyright laws.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Legal;
