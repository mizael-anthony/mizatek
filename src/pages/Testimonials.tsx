
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

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
      content: 'The API architecture they designed is scalable, secure, and perfectly documented. Our development team loves working with it. Excellent communication throughout.',
      project: 'Financial API Platform'
    },
    {
      name: 'Lisa Thompson',
      company: 'EcoTech Solutions',
      role: 'VP of Technology',
      rating: 5,
      content: 'Mizatech transformed our outdated system into a modern, efficient platform. The project was delivered on time and within budget. Highly recommended!',
      project: 'Legacy System Modernization'
    },
    {
      name: 'Alex Martinez',
      company: 'StartupLab',
      role: 'Co-founder',
      rating: 5,
      content: 'From concept to deployment, Mizatech guided us through every step. Their expertise in both web and mobile development saved us significant time and resources.',
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
      <section className="py-24 bg-gradient-to-br from-mizatech-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-mizatech-dark">
            {t('testimonials.title')}
          </h1>
          <p className="mt-6 text-xl text-mizatech-gray max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with Mizatech
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-mizatech-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                100+
              </div>
              <div className="text-white">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                98%
              </div>
              <div className="text-white">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                50+
              </div>
              <div className="text-white">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-mizatech-orange mb-2">
                6+
              </div>
              <div className="text-white">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
