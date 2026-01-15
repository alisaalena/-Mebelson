
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Секция каталогов. scroll-mt-[100px] компенсирует липкий Navbar высотой 100px */}
        <div id="catalogs" className="scroll-mt-[100px]">
          <section className="container mx-auto px-4 pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
              <div>
                 <h2 className="text-3xl md:text-5xl font-black text-mebelson-dark uppercase tracking-tighter leading-none mb-4">
                   Каталоги <br/><span className="text-mebelson-red">Продукции</span>
                 </h2>
                 <p className="text-gray-400 font-medium text-sm">Выберите год выпуска для фильтрации ассортимента</p>
              </div>
              
              <div className="flex bg-gray-100 rounded-2xl p-1.5 shadow-inner">
                {(['Все', '2025', '2024'] as const).map((year) => (
                  <button 
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all ${
                      activeYear === year 
                        ? 'bg-white text-mebelson-red shadow-md' 
                        : 'text-gray-400 hover:text-mebelson-dark'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <CatalogExplorer activeYear={activeYear} onOpenCatalog={openCatalog} />
          </section>
        </div>
        
        <div id="materials" className="scroll-mt-[100px]">
          <DownloadsSection />
        </div>
        
        <div id="ai" className="scroll-mt-[100px]">
          <AIConsultant />
        </div>
      </main>

      {isFlipbookOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <button 
            onClick={closeCatalog}
            className="absolute top-6 right-6 text-white hover:text-mebelson-red transition-colors z-[110] bg-white/10 p-2 rounded-full backdrop-blur-xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-6xl bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl relative transform animate-in zoom-in-95 duration-500">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-black text-mebelson-dark uppercase tracking-tight">Интерактивный ридер</h2>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">Используйте стрелки для перелистывания</p>
            </div>
            <div className="h-[60vh] md:h-[70vh]">
              <FlipbookDemo />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;