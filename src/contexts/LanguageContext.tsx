import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.testimonials': 'Testimonials',
    
    // Home
    'home.hero.title': 'Web & Mobile Development + AI Integration',
    'home.hero.subtitle': 'Transform your business with cutting-edge technology solutions. We build secure, scalable applications that drive growth.',
    'home.hero.cta': 'Get a Quote',
    'home.intro.title': 'Why Choose Mizatech?',
    'home.intro.description': 'We combine technical expertise with business acumen to deliver solutions that exceed expectations. Our commitment to quality and innovation sets us apart.',
    
    // Services
    'services.title': 'Our Services',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, responsive websites built with the latest technologies',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.description': 'Native and cross-platform mobile applications',
    'services.api.title': 'API Creation',  
    'services.api.description': 'Robust and scalable API solutions for seamless integration',
    'services.ai.title': 'AI Integration',
    'services.ai.description': 'Intelligent automation and AI-powered features',
    
    // About
    'about.title': 'About Mizatech',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To empower businesses through innovative technology solutions that drive growth and efficiency.',
    'about.values.title': 'Our Values',
    'about.founder.title': 'Meet Mizael',
    'about.founder.description': 'Founder and lead developer with over 10 years of experience in creating innovative digital solutions.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.booking.title': 'Book a Free Consultation',
    'contact.booking.description': 'Schedule a 30-minute call to discuss your project and get expert advice.',
    'contact.booking.cta': 'Book a Call',
    'contact.booking.benefit1': '30-minute free consultation',
    'contact.booking.benefit2': 'Expert technical advice',
    'contact.booking.benefit3': 'Project scope discussion',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.project': 'Project Type',
    'contact.form.budget': 'Budget',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.privacy': 'Your information is secure and will only be used to respond to your inquiry.',
    
    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.legal': 'Legal Mentions',
    'footer.rights': '© 2024 Mizatech. All rights reserved.',
    
    // Legal
    'legal.title': 'Legal Information',
    'legal.privacy.title': 'Privacy Policy',
    'legal.terms.title': 'Terms of Service',
    'legal.mentions.title': 'Legal Mentions',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    
    // Blog
    'blog.title': 'Latest Articles',
    'blog.search': 'Search articles...',
    'blog.readmore': 'Read More',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.testimonials': 'Témoignages',
    
    // Home
    'home.hero.title': 'Développement Web & Mobile + Intégration IA',
    'home.hero.subtitle': 'Transformez votre entreprise avec des solutions technologiques de pointe. Nous créons des applications sécurisées et évolutives qui stimulent la croissance.',
    'home.hero.cta': 'Demander un Devis',
    'home.intro.title': 'Pourquoi Choisir Mizatech ?',
    'home.intro.description': 'Nous combinons expertise technique et sens des affaires pour livrer des solutions qui dépassent les attentes. Notre engagement envers la qualité et l\'innovation nous distingue.',
    
    // Services
    'services.title': 'Nos Services',
    'services.web.title': 'Développement Web',
    'services.web.description': 'Sites web modernes et responsifs construits avec les dernières technologies',
    'services.mobile.title': 'Développement Mobile',
    'services.mobile.description': 'Applications mobiles natives et multiplateformes',
    'services.api.title': 'Création d\'API',
    'services.api.description': 'Solutions API robustes et évolutives pour une intégration transparente',
    'services.ai.title': 'Intégration IA',
    'services.ai.description': 'Automatisation intelligente et fonctionnalités alimentées par l\'IA',
    
    // About
    'about.title': 'À Propos de Mizatech',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Autonomiser les entreprises grâce à des solutions technologiques innovantes qui stimulent la croissance et l\'efficacité.',
    'about.values.title': 'Nos Valeurs',
    'about.founder.title': 'Rencontrez Mizael',
    'about.founder.description': 'Fondateur et développeur principal avec plus de 10 ans d\'expérience dans la création de solutions numériques innovantes.',
    
    // Contact
    'contact.title': 'Nous Contacter',
    'contact.booking.title': 'Réserver une Consultation Gratuite',
    'contact.booking.description': 'Planifiez un appel de 30 minutes pour discuter de votre projet et obtenir des conseils d\'experts.',
    'contact.booking.cta': 'Réserver un Appel',
    'contact.booking.benefit1': 'Consultation gratuite de 30 minutes',
    'contact.booking.benefit2': 'Conseils techniques d\'experts',
    'contact.booking.benefit3': 'Discussion sur la portée du projet',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise',
    'contact.form.project': 'Type de Projet',
    'contact.form.budget': 'Budget',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.privacy': 'Vos informations sont sécurisées et ne seront utilisées que pour répondre à votre demande.',
    
    // Footer
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.legal': 'Mentions Légales',
    'footer.rights': '© 2024 Mizatech. Tous droits réservés.',
    
    // Legal
    'legal.title': 'Informations Légales',
    'legal.privacy.title': 'Politique de Confidentialité',
    'legal.terms.title': 'Conditions d\'Utilisation',
    'legal.mentions.title': 'Mentions Légales',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    
    // Blog
    'blog.title': 'Derniers Articles',
    'blog.search': 'Rechercher des articles...',
    'blog.readmore': 'Lire Plus',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
