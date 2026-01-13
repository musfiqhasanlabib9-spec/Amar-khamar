
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS, CATEGORIES } from '../constants';

interface RegistrationProps {
  lang: Language;
}

const Registration: React.FC<RegistrationProps> = ({ lang }) => {
  const t = (TRANSLATIONS as any)[lang];
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    category: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    navigate('/farmer-dashboard');
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t.joinFarmer}
            </h2>
            <div className="flex space-x-1">
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className={`h-2 w-8 rounded-full ${step >= i ? 'bg-green-600' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-slate-700 flex items-center">
                    <span className="mr-2">👤</span> {t.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-green-600 focus:ring-0 outline-none text-lg"
                    placeholder={lang === 'bn' ? 'আপনার পূর্ণ নাম' : 'Your Full Name'}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold text-slate-700 flex items-center">
                    <span className="mr-2">📱</span> {t.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-green-600 focus:ring-0 outline-none text-lg"
                    placeholder="017XXXXXXXX"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.name || !formData.phone}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-green-700 disabled:opacity-50 transition-all"
                >
                  {lang === 'bn' ? 'পরবর্তী' : 'Next'} →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="space-y-2">
                  <label className="text-lg font-bold text-slate-700 flex items-center">
                    <span className="mr-2">📍</span> {t.district}
                  </label>
                  <select
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-green-600 focus:ring-0 outline-none text-lg bg-white"
                    value={formData.district}
                    onChange={e => setFormData({...formData, district: e.target.value})}
                  >
                    <option value="">{lang === 'bn' ? 'জেলা নির্বাচন করুন' : 'Select District'}</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Bogra">Bogra</option>
                    <option value="Natore">Natore</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full bg-gray-100 text-gray-600 py-4 rounded-xl font-bold text-lg"
                  >
                    {lang === 'bn' ? 'পিছনে' : 'Back'}
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.district}
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    {lang === 'bn' ? 'পরবর্তী' : 'Next'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <label className="text-lg font-bold text-slate-700 block mb-4">
                  {t.farmingCategory}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData({...formData, category: cat.id})}
                      className={`p-4 rounded-2xl border-2 text-center transition-all ${
                        formData.category === cat.id 
                          ? 'border-green-600 bg-green-50 text-green-700' 
                          : 'border-gray-100 bg-white hover:border-green-200'
                      }`}
                    >
                      <div className="text-3xl mb-1">{cat.icon}</div>
                      <div className="font-bold">{lang === 'bn' ? cat.bn : cat.en}</div>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full bg-gray-100 text-gray-600 py-4 rounded-xl font-bold text-lg"
                  >
                    {lang === 'bn' ? 'পিছনে' : 'Back'}
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.category}
                    className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-800 disabled:opacity-50"
                  >
                    {t.register}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
