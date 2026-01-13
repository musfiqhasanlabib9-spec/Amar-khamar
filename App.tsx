
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Registration from './pages/Registration';
import FarmerDashboard from './pages/FarmerDashboard';
import ProductListing from './pages/ProductListing';
import AdminDashboard from './pages/AdminDashboard';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('bn');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-['Hind_Siliguri',_sans-serif]">
        <Header lang={lang} setLang={setLang} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/register" element={<Registration lang={lang} />} />
            <Route path="/products" element={<ProductListing lang={lang} />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard lang={lang} />} />
            <Route path="/admin" element={<AdminDashboard lang={lang} />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200 py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🌾</span>
                <span className="text-xl font-bold text-green-700">আমার খামার</span>
              </div>
              <p className="text-gray-500 max-w-xs">
                Helping Bangladeshi farmers connect directly with buyers through technology.
              </p>
            </div>
            
            <div className="flex space-x-8 text-sm font-bold text-gray-400">
              <a href="#" className="hover:text-green-700 transition-colors">গোপনীয়তা নীতি (Privacy)</a>
              <a href="#" className="hover:text-green-700 transition-colors">শর্তাবলী (Terms)</a>
              <a href="#" className="hover:text-green-700 transition-colors">যোগাযোগ (Contact)</a>
            </div>

            <div className="text-sm text-gray-400">
              © 2024 Amar Khamar. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
