import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="container flex items-center justify-between h-[80px] md:h-[100px]">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="text-3xl font-[900] text-[#E31E24] uppercase tracking-tighter" style={{ letterSpacing: '-0.05em' }}>
               MEBELSON
            </div>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 font-bold text-[11px] uppercase tracking-[0.2em]">
          <a href="#catalogs" className="hover:text-[#E31E24] transition-colors">Каталоги</a>
          <a href="#leaflets" className="hover:text-[#E31E24] transition-colors">Листовки</a>
          <a href="#certificates" className="hover:text-[#E31E24] transition-colors">Сертификаты</a>
        </div>

        <div className="flex items-center">
           <span className="text-[10px] font-extrabold text-[#9CA3AF] uppercase tracking-widest hidden lg:block">Визуальный гид 2026</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;