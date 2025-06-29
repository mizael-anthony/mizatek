
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Star, Users, Circle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Cutting-edge technologies and best practices'
    },
    {
      icon: Star,
      title: 'Quality Assurance', 
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Dedicated support and transparent communication'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mizatech-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-mizatech-dark leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="mt-6 text-xl text-mizatech-gray max-w-2xl">
                {t('home.hero.subtitle')}
              </p>
              <div className="mt-8">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-mizatech-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link to="/contact">{t('home.hero.cta')}</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
                alt="Modern technology workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-mizatech-orange text-white p-6 rounded-lg shadow-lg">
                <Circle className="h-8 w-8 mb-2" />
                <p className="font-semibold">AI-Powered Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-mizatech-dark">
              {t('home.intro.title')}
            </h2>
            <p className="mt-6 text-xl text-mizatech-gray max-w-3xl mx-auto">
              {t('home.intro.description')}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-mizatech-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-mizatech-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-mizatech-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-mizatech-gray">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mizatech-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="mt-8">
            <Button 
              asChild 
              size="lg"
              className="bg-mizatech-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link to="/contact">{t('home.hero.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
