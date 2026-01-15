
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-[#FBFBFB] pt-12 pb-24 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <div className="inline-block px-4 py-2 bg-white border border-gray-100 text-[10px] font-black text-mebelson-red uppercase tracking-[0.25em] mb-8 rounded-full shadow-sm">
              Партнерский Портал v4.0
            </div>
            <h1 className="text-5xl md:text-7xl font-[900] text-mebelson-dark mb-8 leading-[0.95] uppercase tracking-tighter">
              Мебель для <br/>
              <span className="text-mebelson-red">Вашего успеха</span>
            </h1>
            <p className="text-base text-gray-500 mb-12 max-w-lg leading-relaxed font-medium">
              Обеспечьте своих менеджеров лучшими инструментами продаж. Используйте интерактивные каталоги Mebelson вместо громоздких PDF.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#catalogs" className="px-10 py-5 bg-mebelson-dark text-white font-black text-[11px] uppercase tracking-widest rounded-2xl hover:bg-mebelson-red transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-200">
                Смотреть каталоги
              </a>
              <a href="#materials" className="px-10 py-5 bg-white text-mebelson-dark border border-gray-200 font-black text-[11px] uppercase tracking-widest rounded-2xl hover:border-mebelson-red hover:text-mebelson-red transition-all">
                База материалов
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 opacity-40 grayscale">
               <img src="https://mebelson.ru/include/sotbit_origami/images/logo.svg" className="h-6" alt="brand" />
               <div className="h-4 w-px bg-gray-300"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest">15 лет на рынке</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white p-3 rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000" 
                alt="Mebelson Interior" 
                className="w-full h-auto object-cover rounded-[2.5rem]"
              />
            </div>
            {/* Декор */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-mebelson-red/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gray-100 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
