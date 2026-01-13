
import React from 'react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
  lang: Language;
  onOrder: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onOrder }) => {
  const t = (TRANSLATIONS as any)[lang];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3]">
        <img 
          src={product.image} 
          alt={product.name_en} 
          className="w-full h-full object-cover"
        />
        {product.isVerified && (
          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-lg">
            <span className="mr-1">✓</span> {t.verifiedFarmers}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-800">
            {lang === 'bn' ? product.name_bn : product.name_en}
          </h3>
          <div className="text-green-700 font-bold">
            ৳ {product.price} / {product.unit}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 flex items-center mb-4">
          <span className="mr-1 opacity-60">📍</span> {product.location}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600 mr-2">
              {product.farmerName[0]}
            </div>
            <span className="text-xs font-medium text-gray-700">{product.farmerName}</span>
          </div>
          <button
            onClick={() => onOrder(product)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors"
          >
            {t.orderNow}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
