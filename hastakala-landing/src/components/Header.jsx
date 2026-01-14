import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleHelp = () => {
    // Placeholder for help functionality
    console.log('Help clicked');
  };

  const handleLanguageToggle = () => {
    // Placeholder for language toggle functionality
    console.log('Language toggle clicked');
  };

  return (
    <header className="h-14 bg-[#713600] border-b border-gray-200 dark:border-gray-800 px-4 shadow-sm">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <button 
            className="text-2xl font-serif text-[#FFFFFF] dark:text-earth-cream hover:opacity-80 transition-opacity duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Hastakala - Scroll to top">
            Hastakala Crafts
          </button>
        </div>

        {/* Controls on the right */}
        <div className="flex items-center space-x-2">
          {/* Marketplace button */}
          <a
            href="https://hastakalacrafts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium text-white bg-[#8B5E3C] hover:bg-[#734A2F] rounded-full transition-all duration-200"
            aria-label="Visit Hastakala Marketplace"
          >
            Marketplace
          </a>

          {/* Help button */}
          <button
            onClick={handleHelp}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Get help"
          >
            Help
          </button>

          {/* Language toggle */}
          <button
            onClick={handleLanguageToggle}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            aria-label="Toggle language between English and Hindi"
          >
            EN | HI
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
