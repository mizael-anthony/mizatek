
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: 'The Future of AI Integration in Web Development',
      excerpt: 'Explore how artificial intelligence is transforming the landscape of web development and what it means for businesses.',
      date: '2024-06-15',
      category: 'AI Integration',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Building Scalable APIs: Best Practices for 2024',
      excerpt: 'Learn the essential strategies for creating robust, scalable APIs that can grow with your business needs.',
      date: '2024-06-10',
      category: 'API Development',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first approach in modern application development and user experience design.',
      date: '2024-06-05',
      category: 'Mobile Development',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Security Best Practices for Modern Web Applications',
      excerpt: 'Essential security measures every web application should implement to protect user data and maintain trust.',
      date: '2024-05-28',
      category: 'Security',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'The Rise of Progressive Web Apps (PWAs)',
      excerpt: 'How Progressive Web Apps are bridging the gap between web and mobile applications.',
      date: '2024-05-20',
      category: 'Web Development',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Optimizing Database Performance at Scale',
      excerpt: 'Strategies for maintaining high performance as your database grows and handles more complex queries.',
      date: '2024-05-15',
      category: 'Database',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-mizatech-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-mizatech-dark">
            {t('blog.title')}
          </h1>
          <p className="mt-6 text-xl text-mizatech-gray max-w-2xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mizatech-gray h-5 w-5" />
              <Input
                type="text"
                placeholder={t('blog.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-mizatech-orange focus:border-mizatech-orange"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-mizatech-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-mizatech-dark group-hover:text-mizatech-orange transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-mizatech-gray mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-mizatech-gray mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-mizatech-orange text-mizatech-orange hover:bg-mizatech-orange hover:text-white"
                  >
                    <Link to={`/blog/${article.id}`}>
                      {t('blog.readmore')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-mizatech-gray">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-mizatech-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on web development, AI integration, and technology trends.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border-0"
            />
            <Button className="bg-mizatech-orange hover:bg-orange-600 text-white px-6 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
