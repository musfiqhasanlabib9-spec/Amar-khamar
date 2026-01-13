
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_PRODUCTS } from '../constants';

interface FarmerDashboardProps {
  lang: Language;
}

const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ lang }) => {
  const t = (TRANSLATIONS as any)[lang];

  const stats = [
    { label: lang === 'bn' ? 'মোট বিক্রি' : 'Total Sales', value: '৳ ১২,৫০০', icon: '💰', color: 'bg-blue-50 text-blue-600' },
    { label: lang === 'bn' ? 'চলমান অর্ডার' : 'Active Orders', value: '৫ টি', icon: '📦', color: 'bg-orange-50 text-orange-600' },
    { label: lang === 'bn' ? 'পণ্য সংখ্যা' : 'My Products', value: '৩ টি', icon: '🥦', color: 'bg-green-50 text-green-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{t.farmerDashboard}</h1>
          <p className="text-slate-500">স্বাগতম, রহিম মিয়া! আপনার খামারের হিসাব দেখুন।</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center justify-center space-x-2">
          <span>➕</span>
          <span>{t.addProducts}</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
            </div>
            <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center text-3xl`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Orders List */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">সাম্প্রতিক অর্ডার (Recent Orders)</h2>
            <button className="text-green-600 font-bold text-sm">সব দেখুন</button>
          </div>
          <div className="divide-y divide-gray-50">
            {[1, 2, 3].map(order => (
              <div key={order} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">🥬</div>
                  <div>
                    <h4 className="font-bold text-slate-800">লাল শাক (২ কেজি)</h4>
                    <p className="text-sm text-slate-400">অর্ডার করেছেন: আকাশ রহমান</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">৳ ৬০</p>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full font-bold">অপেক্ষমান</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">আমার পণ্যসমূহ (My Products)</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MOCK_PRODUCTS.slice(0, 2).map(product => (
              <div key={product.id} className="border border-gray-100 p-4 rounded-2xl flex flex-col items-center text-center">
                <img src={product.image} className="w-full h-32 object-cover rounded-xl mb-3" />
                <h4 className="font-bold mb-1">{lang === 'bn' ? product.name_bn : product.name_en}</h4>
                <p className="text-green-700 font-bold mb-3">৳ {product.price} / {product.unit}</p>
                <div className="flex space-x-2 w-full">
                  <button className="flex-1 bg-gray-100 py-2 rounded-lg text-sm font-bold">এডিট</button>
                  <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-bold">মুছুন</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
