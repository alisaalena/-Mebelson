import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="py-24 bg-[#FBFBFB] border-b border-gray-100 animate-fade-in">
      <div className="container">
        <div className="max-w-4xl">
          <div className="hero-tag">
            Коллекции 2026: Идеи для вашего пространства
          </div>
          <h1 className="font-black uppercase tracking-tighter">
            Вдохновение <br/>
            для <span className="text-mebelson-red">Вашего Дома</span>
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed font-medium mt-8">
            Листайте наши интерактивные каталоги, чтобы найти идеальное решение для кухни, спальни или детской. Мы создаем мебель, в которой хочется жить.
          </p>
          <div className="flex items-center gap-8">
            <a href="#catalogs" className="btn-primary">
              Посмотреть коллекции
            </a>
            <div className="hidden sm:flex items-center space-x-4 pl-8 border-l border-gray-200">
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