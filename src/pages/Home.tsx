
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      rating: 5,
      content: 'Mizatech delivered our e-commerce platform ahead of schedule and exceeded all expectations. The attention to detail and technical expertise is outstanding.',
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CTO',
      rating: 5,
      content: 'The AI integration they built for our analytics platform has transformed how we process data. Highly professional team with exceptional technical skills.',
      project: 'AI Analytics Integration'
    },
    {
      name: 'Emma Rodriguez',
      company: 'MedTech Innovations',
      role: 'Product Manager',
      rating: 5,
      content: 'Working with Mizatech was seamless from start to finish. They understood our complex requirements and delivered a robust mobile application.',
      project: 'Healthcare Mobile App'
    },
    {
      name: 'David Kim',
      company: 'FinanceForward',
      role: 'Founder',
      rating: 5,
      content: 'The API architecture they designed is scalable, secure, and perfectly documented. Our development team loves working with it.',
      project: 'Financial API Platform'
    },
    {
      name: 'Lisa Thompson',
      company: 'EcoTech Solutions',
      role: 'VP of Technology',
      rating: 5,
      content: 'Mizatech transformed our outdated system into a modern, efficient platform. The project was delivered on time and within budget.',
      project: 'Legacy System Modernization'
    },
    {
      name: 'Alex Martinez',
      company: 'StartupLab',
      role: 'Co-founder',
      rating: 5,
      content: 'From concept to deployment, Mizatech guided us through every step. Their expertise saved us significant time and resources.',
      project: 'Full-Stack Development'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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

      {/* Testimonials Section */}
      <section className="py-24 bg-mizatech-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-mizatech-dark">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-xl text-mizatech-gray max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with Mizatech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-mizatech-gray leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="border-t pt-4">
                    <div className="font-semibold text-mizatech-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-mizatech-gray">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="text-xs text-mizatech-orange font-medium mt-1">
                      {testimonial.project}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                100+
              </div>
              <div className="text-mizatech-dark">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                98%
              </div>
              <div className="text-mizatech-dark">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                50+
              </div>
              <div className="text-mizatech-dark">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                6+
              </div>
              <div className="text-mizatech-dark">
                Years Experience
              </div>
            </div>
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
