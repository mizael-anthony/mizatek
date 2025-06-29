import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.blog'), href: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/69e3f754-3f9a-4a43-9b1e-80306de43c65.png" 
                alt="Mizatech"
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-bold text-mizatech-dark">Mizatech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-mizatech-orange border-b-2 border-mizatech-orange'
                    : 'text-mizatech-gray hover:text-mizatech-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'en'
                    ? 'bg-white text-mizatech-dark shadow-sm'
                    : 'text-mizatech-gray hover:text-mizatech-dark'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === 'fr'
                    ? 'bg-white text-mizatech-dark shadow-sm'
                    : 'text-mizatech-gray hover:text-mizatech-dark'
                }`}
                aria-label="Passer au français"
              >
                FR
              </button>
            </div>
            
            <Button 
              asChild
              className="bg-mizatech-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              <Link to="/contact">{t('home.hero.cta')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
