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
    <div className="mebelson-page min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        <div id="catalogs" style={{ scrollMarginTop: '100px' }}>
          <section className="container pt-24">
            <div className="mb-8" style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
               <h2 className="font-black uppercase tracking-tighter" style={{ fontSize: '3rem', margin: 0 }}>
                 Ваш персональный <span className="text-mebelson-red">Гид по стилю</span>
               </h2>
               <p style={{ color: '#999', fontWeight: 500, fontSize: '14px', marginTop: '0.5rem' }}>Выбирайте мебель с удовольствием в удобном формате журнала</p>
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.9)', padding: '1rem' }}>
          <button 
            onClick={closeCatalog}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'white', zIndex: 1100, backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '50%' }}
            aria-label="Закрыть"
          >
            <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div style={{ width: '100%', maxWidth: '1200px', backgroundColor: 'white', borderRadius: '2rem', padding: '2rem', overflow: 'hidden', position: 'relative' }}>
            <div style={{ height: '70vh' }}>
              <FlipbookDemo pdfUrl={activePdf} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;