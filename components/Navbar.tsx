
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-mebelson-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-[80px] md:h-[100px]">
        {/* БЛОК ЛОГОТИПА - удалена текстовая часть Mebelson */}
        <div className="flex items-center">
          <a href="#" className="flex items-center group">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://xn--80adxhks.xn--90ahbybkgx2h.xn--p1ai/upload/sotbit_b2c/3a4/vmje78cvczxsdjqh0ktvqtr4z12a3kua/Logotip-Mebelson-gorizont.png" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </a>
        </div>
        
        {/* Меню навигации */}
        <div className="hidden lg:flex items-center space-x-8 font-black text-[11px] uppercase tracking-[0.15em]">
          <a href="https://mebelson.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors text-mebelson-dark">Сайт</a>
          <a href="#catalogs" className="hover:text-mebelson-red transition-colors text-mebelson-dark">Каталоги</a>
          <a href="#materials" className="hover:text-mebelson-red transition-colors text-mebelson-dark">Материалы</a>
          <a href="#ai" className="hover:text-mebelson-red transition-colors text-mebelson-dark">AI-Помощник</a>
        </div>

        {/* Поиск / Личный кабинет */}
        <div className="flex items-center space-x-4">
          <button className="text-mebelson-dark hover:text-mebelson-red p-2 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href="https://mebelson.ru/personal/" target="_blank" className="hidden sm:block px-6 py-3 bg-mebelson-dark text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-mebelson-red transition-all">
            Вход для партнеров
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;