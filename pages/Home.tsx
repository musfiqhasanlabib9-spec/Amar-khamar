
import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = (TRANSLATIONS as any)[lang];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative bg-green-50 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 max-w-3xl leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl">
            {t.heroSub}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Link 
              to="/products" 
              className="flex-1 btn-large bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center shadow-lg"
            >
              🛒 {t.buyProducts}
            </Link>
            <Link 
              to="/register" 
              className="flex-1 btn-large bg-white hover:bg-gray-50 text-green-700 border-2 border-green-600 font-bold flex items-center justify-center shadow-sm"
            >
              🧑‍🌾 {t.joinFarmer}
            </Link>
          </div>
        </div>

        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Trust Indicators */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🛡️', title: t.verifiedFarmers, desc: 'Every farmer is manually verified' },
          { icon: '💳', title: t.securePayments, desc: 'Secure bKash, Nagad or Cash on Delivery' },
          { icon: '🚜', title: t.directFromFarms, desc: 'Fresh products without middlemen' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
            <span className="text-4xl">{item.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{t.featuredProducts}</h2>
            <div className="h-1 w-20 bg-green-600 mt-2 rounded-full"></div>
          </div>
          <Link to="/products" className="text-green-700 font-bold hover:underline">
            {lang === 'bn' ? 'সব দেখুন' : 'View All'} →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard 
              key={product.id} 
              product={product as any} 
              lang={lang} 
              onOrder={() => {}} 
            />
          ))}
        </div>
      </section>

      {/* Why Platform */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{t.whyUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-800">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-2">{t.fairPrice}</h3>
              <p className="text-slate-400">Farmers keep 100% of their earnings without commission cuts.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-800">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">{t.noMiddlemen}</h3>
              <p className="text-slate-400">Consumers get lower prices by bypassing local wholesalers.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-800">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-2">{t.safeTrans}</h3>
              <p className="text-slate-400">Escrow-like payment protection for every single order.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
