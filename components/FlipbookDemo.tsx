
import React, { useState } from 'react';

const FlipbookDemo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6;

  const pages = [
    { title: "Mebelson 2025", subtitle: "Новая коллекция корпусной мебели", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
    { title: "Кухонные системы", subtitle: "Инновации в каждой детали", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
    { title: "Модульные гостиные", subtitle: "Ваше пространство — ваши правила", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" },
    { title: "Детские комнаты", subtitle: "Безопасность и вдохновение", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
    { title: "Прихожие", subtitle: "Первое впечатление начинается здесь", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
    { title: "Контакты", subtitle: "Свяжитесь с нами для заказа", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" }
  ];

  const next = () => setCurrentPage(p => Math.min(totalPages - 1, p + 1));
  const prev = () => setCurrentPage(p => Math.max(0, p - 1));

  return (
    <div className="flex flex-col h-full">
      {/* Reader Container */}
      <div className="relative flex-grow bg-gray-100 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-4 md:p-8">
        {/* Progress Bar Top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-mebelson-red transition-all duration-300" 
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          ></div>
        </div>

        {/* Page Display */}
        <div className="relative w-full max-w-2xl aspect-[3/4] bg-white shadow-2xl rounded-sm overflow-hidden transform transition-all duration-500">
          <img 
            src={pages[currentPage].img} 
            alt={pages[currentPage].title} 
            className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-xl font-bold mb-1 uppercase tracking-wider">{pages[currentPage].title}</h3>
            <p className="text-sm opacity-80">{pages[currentPage].subtitle}</p>
          </div>
          
          {/* Page Corner Fold Effect (Visual only) */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-white/20 backdrop-blur-sm -rotate-45 translate-x-6 -translate-y-6"></div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prev}
          disabled={currentPage === 0}
          className="absolute left-4 p-4 rounded-full bg-white/80 hover:bg-white shadow-lg text-mebelson-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={next}
          disabled={currentPage === totalPages - 1}
          className="absolute right-4 p-4 rounded-full bg-white/80 hover:bg-white shadow-lg text-mebelson-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Footer Controls */}
      <div className="mt-8 flex items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Страница</span>
          <div className="flex space-x-1">
            {pages.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all ${i === currentPage ? 'bg-mebelson-red w-6' : 'bg-gray-200'}`}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="text-sm font-black text-mebelson-dark">
          {currentPage + 1} / {totalPages}
        </div>

        <div className="flex space-x-2">
           <button className="p-2 text-gray-400 hover:text-mebelson-red transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
           </button>
        </div>
      </div>
    </div>
  );
};

export default FlipbookDemo;
