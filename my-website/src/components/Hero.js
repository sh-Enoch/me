'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700/25 bg-grid-16 mask-image-radial-gradient" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-purple-600 dark:text-purple-400">
              Enoch
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              Developpeur de logiciels
            </span>{' '}
            creating amazing digital experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
}