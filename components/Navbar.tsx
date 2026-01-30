
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-mebelson-border sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-[80px] md:h-[100px]">
        <div className="flex items-center">
          <a href="/" className="flex items-center group">
            {/* Путь к локальному логотипу в структуре Bitrix */}
            <div className="text-2xl font-black text-mebelson-red uppercase tracking-tighter">
               MEBELSON
            </div>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 font-black text-[11px] uppercase tracking-[0.2em]">
          <a href="#catalogs" className="text-mebelson-dark hover:text-mebelson-red transition-colors">Каталоги</a>
          <a href="#leaflets" className="text-mebelson-dark hover:text-mebelson-red transition-colors">Листовки</a>
          <a href="#certificates" className="text-mebelson-dark hover:text-mebelson-red transition-colors">Сертификаты</a>
        </div>

        <div className="flex items-center">
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden lg:block">Инфо-портал</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
