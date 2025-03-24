import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Banner from '../components/Blog/banner';
import Article from '../components/Blog/article';
import NewsletterSubscription from '../components/Blog/NewsletterSubscription';
import Footer from '../components/footer';
import { ArrowUp } from 'lucide-react';

const ArticlePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 300;
    setShowButton(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative font-urbanist">
      <Header />
      <Banner />
      <main className="container px-4 py-8 mx-auto md:px-8 lg:px-16">
        <Article />
      </main>
      <NewsletterSubscription />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed flex items-center gap-2 p-4 text-white transition-all rounded-full shadow-lg bottom-8 right-4 bg-primary-mainPink hover:bg-pink-600"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ArticlePage;