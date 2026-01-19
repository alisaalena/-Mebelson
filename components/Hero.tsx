
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-[#FBFBFB] pt-16 pb-20 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-white border border-gray-100 text-[10px] font-black text-mebelson-red uppercase tracking-[0.3em] mb-8 rounded-full shadow-sm">
            Коллекции 2025: Идеи для вашего пространства
          </div>
          <h1 className="text-5xl md:text-8xl font-[900] text-mebelson-dark mb-8 leading-[0.9] uppercase tracking-tighter">
            Вдохновение <br/>
            для <span className="text-mebelson-red">Вашего Дома</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
            Листайте наши интерактивные каталоги, чтобы найти идеальное решение для кухни, спальни или детской. Мы создаем мебель, в которой хочется жить.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#catalogs" className="px-10 py-5 bg-mebelson-dark text-white font-black text-[11px] uppercase tracking-widest rounded-2xl hover:bg-mebelson-red transition-all shadow-xl shadow-gray-200">
              Посмотреть коллекции
            </a>
            <div className="hidden sm:flex items-center space-x-4 ml-6 px-6 border-l border-gray-200">
               <div className="text-left">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">Более 500+</p>
                  <p className="text-xs font-bold text-mebelson-dark">Готовых решений</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
