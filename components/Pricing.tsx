
import React from 'react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Старт",
      price: "$29",
      features: [
        "До 3 активных каталогов",
        "3D эффект листания",
        "Базовая аналитика",
        "Размещение на нашем домене",
        "Поддержка 24/7"
      ],
      cta: "Начать бесплатно"
    },
    {
      name: "Бизнес",
      price: "$79",
      features: [
        "До 20 активных каталогов",
        "Ваш собственный домен",
        "Интерактивные видео-вставки",
        "Полная SEO оптимизация",
        "Gemini AI ассистент",
        "Удаление логотипа сервиса"
      ],
      cta: "Выбрать Бизнес",
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Неограниченное кол-во каталогов",
        "API интеграция",
        "Персональный менеджер",
        "Корпоративный дизайн",
        "Закрытый доступ по паролю",
        "SLA 99.9%"
      ],
      cta: "Связаться с нами"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Гибкие тарифные планы</h2>
          <p className="text-slate-600">Начните бесплатно и масштабируйтесь вместе с нами</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-8 rounded-3xl border ${plan.recommended ? 'border-blue-500 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} transition-all`}
            >
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Популярный выбор
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline space-x-1 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500">/мес</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.recommended 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
