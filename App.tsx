import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogExplorer from './components/CatalogExplorer';
import LeafletsSection from './components/LeafletsSection';
import CertificatesSection from './components/CertificatesSection';
import FlipbookDemo from './components/FlipbookDemo';
import Footer from './components/Footer';

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
    <div className="mebelson-page flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        <div id="catalogs" style={{ scrollMarginTop: '100px' }}>
          <section className="container pt-24">
            <div className="mb-12 border-b border-gray-100 pb-8">
               <h2 className="uppercase tracking-tighter">
                 Ваш персональный <span className="text-mebelson-red">Гид по стилю</span>
               </h2>
               <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-4">Выбирайте мебель с удовольствием в удобном формате журнала</p>
            </div>
            <CatalogExplorer onOpenCatalog={openCatalog} />
          </section>
        </div>
        
        <div id="leaflets" style={{ scrollMarginTop: '100px' }}>
          <LeafletsSection onOpenLeaflet={openCatalog} />
        </div>
        
        <div id="certificates" style={{ scrollMarginTop: '100px' }}>
          <CertificatesSection />
        </div>
      </main>

      <Footer />

      {isFlipbookOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', padding: '1.5rem' }}>
          <button 
            onClick={closeCatalog}
            className="eye-btn"
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 1100, transform: 'none' }}
            aria-label="Закрыть"
          >
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-6xl bg-white rounded-3xl p-8 overflow-hidden relative shadow-2xl">
            <div style={{ height: '75vh' }}>
              <FlipbookDemo pdfUrl={activePdf} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;