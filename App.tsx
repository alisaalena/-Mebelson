
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogExplorer from './components/CatalogExplorer';
import LeafletsSection from './components/LeafletsSection';
import CertificatesSection from './components/CertificatesSection';
import FlipbookDemo from './components/FlipbookDemo';

const App: React.FC = () => {
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const [activePdf, setActivePdf] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openCatalog = (pdfUrl: string) => {
    setActivePdf(pdfUrl);
    setIsFlipbookOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCatalog = () => {
    setIsFlipbookOpen(false);
    setActivePdf('');
    document.body.style.overflow = 'auto';
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        <div id="catalogs" className="scroll-mt-[100px]">
          <section className="container mx-auto px-4 pt-24">
            <div className="mb-12 border-b border-gray-100 pb-8">
               <h2 className="text-3xl md:text-5xl font-black text-mebelson-dark uppercase tracking-tighter">
                 Ваш персональный <span className="text-mebelson-red">Гид по стилю</span>
               </h2>
               <p className="text-gray-400 font-medium text-sm mt-2">Выбирайте мебель с удовольствием в удобном формате журнала</p>
            </div>
            <CatalogExplorer onOpenCatalog={openCatalog} />
          </section>
        </div>
        
        <div id="leaflets" className="scroll-mt-[100px]">
          <LeafletsSection onOpenLeaflet={openCatalog} />
        </div>
        
        <div id="certificates" className="scroll-mt-[100px]">
          <CertificatesSection />
        </div>
      </main>

      {isFlipbookOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <button 
            onClick={closeCatalog}
            className="absolute top-6 right-6 text-white hover:text-mebelson-red transition-colors z-[1100] bg-white/10 p-2 rounded-full"
            aria-label="Закрыть"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-6xl bg-white rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl relative transform animate-in zoom-in-95 duration-500">
            <div className="h-[65vh] md:h-[75vh]">
              <FlipbookDemo pdfUrl={activePdf} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
