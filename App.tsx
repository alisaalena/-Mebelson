
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
    <div className="mebelson-page min-h-screen">
      <Navbar />
      
      <Hero />
      
      <main className="container">
        <div className="breadcrumb">Главная / Электронные каталоги</div>
        
        <section id="catalogs" className="section-padding">
          <CatalogExplorer onOpenCatalog={openCatalog} />
        </section>
        
        <section id="leaflets" className="section-padding border-t border-gray-100">
          <LeafletsSection onOpenLeaflet={openCatalog} />
        </section>
        
        <section id="certificates" className="section-padding border-t border-gray-100 mb-20">
          <CertificatesSection />
        </section>
      </main>

      {isFlipbookOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)', padding: '1.5rem' }}>
          <button 
            onClick={closeCatalog}
            className="btn-red"
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 1100, width: 'auto', padding: '10px' }}
            aria-label="Закрыть"
          >
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-6xl bg-white rounded-xl p-8 overflow-hidden relative shadow-2xl">
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
