
import React, { useState } from 'react';
import { Language, Product } from '../types';
import { TRANSLATIONS, CATEGORIES, MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

interface ProductListingProps {
  lang: Language;
}

const ProductListing: React.FC<ProductListingProps> = ({ lang }) => {
  const t = (TRANSLATIONS as any)[lang];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showOrderModal, setShowOrderModal] = useState<Product | null>(null);

  const filteredProducts = selectedCategory 
    ? MOCK_PRODUCTS.filter(p => p.category === selectedCategory)
    : MOCK_PRODUCTS;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-extrabold text-slate-900">{t.buyProducts}</h1>
        
        {/* Horizontal Category Scroll */}
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 space-x-3 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-all ${
              !selectedCategory ? 'bg-green-600 text-white' : 'bg-white text-slate-600 border border-gray-200'
            }`}
          >
            {lang === 'bn' ? 'সবগুলো' : 'All'}
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-all flex items-center space-x-2 ${
                selectedCategory === cat.id ? 'bg-green-600 text-white' : 'bg-white text-slate-600 border border-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{lang === 'bn' ? cat.bn : cat.en}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product as any} 
            lang={lang} 
            onOrder={setShowOrderModal}
          />
        ))}
      </div>

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">{t.orderNow}</h2>
              <button 
                onClick={() => setShowOrderModal(null)}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-2xl mb-6">
              <img src={showOrderModal.image} className="w-20 h-20 object-cover rounded-xl mr-4" />
              <div>
                <h3 className="text-lg font-bold">{lang === 'bn' ? showOrderModal.name_bn : showOrderModal.name_en}</h3>
                <p className="text-green-700 font-bold">৳ {showOrderModal.price} / {showOrderModal.unit}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <label className="font-bold text-slate-700">{t.quantity}</label>
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-2xl">-</button>
                  <span className="text-2xl font-bold px-4">1</span>
                  <button className="w-12 h-12 rounded-xl border-2 border-green-600 bg-green-50 text-green-700 flex items-center justify-center text-2xl">+</button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-bold text-slate-700">পেমেন্ট পদ্ধতি (Payment Method)</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 border-2 border-green-600 bg-green-50 rounded-2xl flex flex-col items-center">
                    <span className="text-xs uppercase font-bold text-pink-600">bKash</span>
                    <span className="text-xs text-gray-500">বিকাশ</span>
                  </button>
                  <button className="p-4 border-2 border-gray-100 rounded-2xl flex flex-col items-center hover:border-green-200 transition-colors">
                    <span className="text-xs uppercase font-bold text-orange-600">Nagad</span>
                    <span className="text-xs text-gray-500">নগদ</span>
                  </button>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-xl shadow-lg hover:bg-green-700 transition-all mt-4">
                অর্ডার নিশ্চিত করুন (Confirm Order)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
