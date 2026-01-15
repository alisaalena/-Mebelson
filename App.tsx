
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatalogExplorer from './components/CatalogExplorer';
import DownloadsSection from './components/DownloadsSection';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import FlipbookDemo from './components/FlipbookDemo';

const App: React.FC = () => {
  const [activeYear, setActiveYear] = useState<'Все' | '2025' | '2024'>('Все');
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  const openCatalog = () => {
    setIsFlipbookOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCatalog = () => {
    setIsFlipbookOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans scroll-smooth">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Content */}
        <div className="container mx-auto px-4 pt-12">
          <nav className="text-[13px] text-gray-400 mb-8 flex items-center space-x-2">
            <a href="/" className="hover:text-mebelson-red transition-colors">Главная</a>
            <span>/</span>
            <span className="text-mebelson-dark">Электронные каталоги</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-mebelson-dark">
              Электронные каталоги и буклеты
            </h1>
            
            {/* Year Filters */}
            <div className="flex bg-white border border-mebelson-border rounded-lg p-1 shadow-sm">
              {(['Все', '2025', '2024'] as const).map((year) => (
                <button 
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${
                    activeYear === year 
                      ? 'bg-[#FFF0F0] text-mebelson-red' 
                      : 'hover:bg-mebelson-light text-mebelson-dark'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Раздел Каталогов */}
        <CatalogExplorer activeYear={activeYear} onOpenCatalog={openCatalog} />
        
        {/* Раздел Материалов */}
        <DownloadsSection />
        
        {/* AI Помощник */}
        <AIConsultant />
      </main>

      {/* 3D Catalog Modal */}
      {isFlipbookOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button 
            onClick={closeCatalog}
            className="absolute top-6 right-6 text-white hover:text-mebelson-red transition-colors z-[110]"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-5xl bg-white rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl relative">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-mebelson-dark">Интерактивный просмотр каталога</h2>
              <p className="text-gray-500 text-sm">Используйте стрелки для перелистывания страниц</p>
            </div>
            <FlipbookDemo />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
