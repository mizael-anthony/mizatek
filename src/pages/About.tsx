
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Circle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to solve complex challenges'
    },
    {
      title: 'Quality',
      description: 'Delivering excellence through rigorous testing and attention to detail'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest project management'
    },
    {
      title: 'Partnership',
      description: 'Building long-term relationships with our clients'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Mizatech founded with a vision for innovative solutions' },
    { year: '2019', event: 'First major enterprise client onboarded' },
    { year: '2021', event: 'Expanded services to include AI integration' },
    { year: '2023', event: 'Launched mobile development division' },
    { year: '2024', event: 'Achieved 100+ successful project deliveries' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mizatech-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-mizatech-dark">
                {t('about.title')}
              </h1>
              <p className="mt-6 text-xl text-mizatech-gray">
                Built on a foundation of technical excellence and client success
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-mizatech-dark mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-mizatech-gray leading-relaxed">
                {t('about.mission.description')}
              </p>
              <p className="mt-4 text-lg text-mizatech-gray leading-relaxed">
                We believe technology should serve people, not the other way around. 
                Our solutions are designed with user experience at the forefront, 
                ensuring they are intuitive, efficient, and scalable.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-mizatech-dark mb-6">
                {t('about.values.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-mizatech-dark mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-mizatech-gray">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-mizatech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="w-64 h-64 bg-mizatech-gray/20 rounded-full mx-auto flex items-center justify-center">
                <Circle className="h-32 w-32 text-mizatech-orange" />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-mizatech-dark mb-6">
                {t('about.founder.title')}
              </h2>
              <p className="text-lg text-mizatech-gray leading-relaxed mb-6">
                {t('about.founder.description')}
              </p>
              <p className="text-lg text-mizatech-gray leading-relaxed">
                Mizael's passion for technology and business acumen drives Mizatech's 
                commitment to delivering exceptional results. His hands-on approach 
                ensures every project receives the attention to detail it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-mizatech-dark">
              Our Journey
            </h2>
            <p className="mt-6 text-xl text-mizatech-gray max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-mizatech-orange text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-mizatech-gray">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
