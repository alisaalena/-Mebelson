
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-mebelson-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-[80px] md:h-[100px]">
        {/* БЛОК ЛОГОТИПА */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-3 group">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://mebelson.ru/include/sotbit_origami/images/logo.svg" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <span className="text-mebelson-dark font-[900] text-2xl md:text-3xl tracking-tighter uppercase">
              Mebelson
            </span>
          </a>
        </div>
        
        {/* Меню навигации - ПЛАНИРОВЩИК УДАЛЕН */}
        <div className="hidden lg:flex items-center space-x-8 font-semibold text-[14px] uppercase tracking-wider">
          <a href="https://mebelson.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors text-mebelson-dark">Сайт</a>
          <a href="#catalogs" className="hover:text-mebelson-red transition-colors text-mebelson-dark">Каталоги</a>
          <a href="#downloads" className="hover:text-mebelson-red transition-colors text-mebelson-dark">Материалы</a>
          <a href="#ai" className="hover:text-mebelson-red transition-colors text-mebelson-dark">AI-Помощник</a>
        </div>

        {/* Поиск */}
        <div className="flex items-center">
          <button className="text-mebelson-dark hover:text-mebelson-red p-2 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
