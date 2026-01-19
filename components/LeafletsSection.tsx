
import React from 'react';

const LeafletsSection: React.FC = () => {
  const leaflets = [
    { title: 'Серия Nordic 2025', info: 'PDF, 12 Mb', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
    { title: 'Кухонные системы Loft', info: 'PDF, 8 Mb', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400' },
    { title: 'Детские модули Dream', info: 'PDF, 15 Mb', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-mebelson-dark uppercase tracking-tight mb-12">
          Рекламные <span className="text-mebelson-red">Листовки</span>
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
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{item.info}</p>
                </div>
                <button className="p-3 bg-white text-mebelson-red rounded-full shadow-sm hover:bg-mebelson-red hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
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
