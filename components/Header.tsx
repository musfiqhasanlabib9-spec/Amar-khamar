
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
// Fixed: TRANSLATIONS is exported from constants, not types
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  lang: 'bn' | 'en';
  setLang: (lang: 'bn' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const t = (TRANSLATIONS as any)[lang];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl">🌾</span>
          <span className="text-2xl font-bold text-green-700 tracking-tight">
            {t.appName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-gray-600 hover:text-green-700 font-medium">
            {t.buyProducts}
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-green-700 font-medium">
            {t.joinFarmer}
          </Link>
          <Link to="/admin" className="text-gray-400 hover:text-gray-600 text-sm">
            Admin
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
            className="px-3 py-1 rounded-full border-2 border-green-600 text-green-700 font-semibold hover:bg-green-50 transition-colors"
          >
            {lang === 'bn' ? 'English' : 'বাংলা'}
          </button>
          
          <Link 
            to="/farmer-dashboard" 
            className="md:hidden p-2 rounded-full bg-green-100 text-green-700"
          >
            🧑‍🌾
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
