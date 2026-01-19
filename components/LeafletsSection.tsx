
import React from 'react';

const LeafletsSection: React.FC = () => {
  const leaflets = [
    { title: 'Стиль Nordic: Уют Севера', info: 'Готовые решения для гостиной', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
    { title: 'Лофт: Индустриальный шик', info: 'Тренды в дизайне кухонь', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400' },
    { title: 'Детская Dream: Территория игр', info: 'Безопасность и эргономика', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-mebelson-dark uppercase tracking-tight mb-12">
          Коротко <span className="text-mebelson-red">о главном</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaflets.map((item, i) => (
            <div key={i} className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-mebelson-red transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-mebelson-dark">{item.title}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{item.info}</p>
                </div>
                <button className="p-3 bg-white text-mebelson-red rounded-full shadow-sm hover:bg-mebelson-red hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeafletsSection;
