
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-mebelson-light pt-20 pb-28 overflow-hidden">
      {/* Decorative element typical for modern furniture landing pages */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-200/30 -skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 text-[10px] font-bold text-mebelson-orange uppercase tracking-[0.2em] mb-8 rounded">
              B2B Платформа v3.0
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-mebelson-dark mb-8 leading-[1.1]">
              Ваш бизнес в <br/>
              <span className="text-mebelson-blue">формате 3D</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
              Обеспечьте своих менеджеров лучшим инструментом продаж. Забудьте про тяжелые PDF — используйте интерактивные флипбуки Mebelson.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#catalogs" className="px-10 py-5 bg-mebelson-blue text-white font-extrabold text-xs uppercase tracking-[0.15em] rounded hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/20">
                Открыть каталоги
              </a>
              <a href="#downloads" className="px-10 py-5 bg-white text-mebelson-blue border border-mebelson-blue font-extrabold text-xs uppercase tracking-[0.15em] rounded hover:bg-mebelson-light transition-all">
                База материалов
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-mebelson-blue to-mebelson-orange rounded-xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-2xl overflow-hidden border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mebelson Interior" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
