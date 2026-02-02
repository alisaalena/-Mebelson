
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogExplorer from './components/CatalogExplorer';
import LeafletsSection from './components/LeafletsSection';
import CertificatesSection from './components/CertificatesSection';
import FlipbookDemo from './components/FlipbookDemo';

// Определение типов для данных из Bitrix
interface MebelsonData {
  catalogs: any[];
  leaflets: any[];
}

declare global {
  interface Window {
    mebelsonData?: MebelsonData;
  }
}

const App: React.FC = () => {
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const [activePdf, setActivePdf] = useState<string>('');
  const [data, setData] = useState<MebelsonData>({ catalogs: [], leaflets: [] });

  useEffect(() => {
    // Инициализация данных из глобальной переменной Bitrix или заглушки
    const bitrixData = window.mebelsonData || {
      catalogs: [
        { id: '1', year: '2025', title: 'Коллекция: Корпусная мебель 2025', label: 'MEBELSON 2025', size: '24 Mb', color: 'red', pdfUrl: '/upload/cat_2025.pdf' },
        { id: '2', year: '2024', title: 'Идеи для Вашей КУХНИ', label: 'KITCHEN 2024', size: '12 Mb', color: 'dark', pdfUrl: '/upload/kitchen_2024.pdf' },
        { id: '3', year: '2024', title: 'Уютные СПАЛЬНИ', label: 'BEDROOM 2024', size: '8.5 Mb', color: 'gray-dark', pdfUrl: '/upload/bedroom_2024.pdf' },
        { id: '4', year: '2023', title: 'Гостиные и Прихожие', label: 'LIVING ROOM 23', size: '15 Mb', color: 'gray', pdfUrl: '/upload/living_2023.pdf' },
      ],
      leaflets: [
        { title: 'Стиль Nordic', info: 'Идеи для светлой гостиной', pdfUrl: '/upload/nordic.pdf' },
        { title: 'Лофт: Тренды', info: 'Современные решения для кухни', pdfUrl: '/upload/loft.pdf' },
        { title: 'Детская Dream', info: 'Комфорт для самых маленьких', pdfUrl: '/upload/kids.pdf' },
      ]
    };
    setData(bitrixData);
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

  return (
    <div className="mebelson-page min-h-screen">
      <Navbar />
      <Hero />
      
      <main className="container">
        <div className="breadcrumb">Главная / Гид по стилю</div>
        
        <section id="catalogs" className="section-padding">
          <CatalogExplorer 
            catalogs={data.catalogs} 
            onOpenCatalog={openCatalog} 
          />
        </section>
        
        <section id="leaflets" className="section-padding border-t border-gray-100">
          <LeafletsSection 
            leaflets={data.leaflets} 
            onOpenLeaflet={openCatalog} 
          />
        </section>
        
        <section id="certificates" className="section-padding border-t border-gray-100 mb-20">
          <CertificatesSection />
        </section>
      </main>

      {/* Модальное окно DearFlip */}
      {isFlipbookOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)', padding: '20px' }}>
          <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl relative flex flex-col" style={{ height: '90vh' }}>
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">3D Просмотр каталога</span>
              <button onClick={closeCatalog} className="btn-red" style={{ width: 'auto', height: '32px', padding: '0 12px', fontSize: '11px' }}>
                Закрыть
              </button>
            </div>
            <div className="flex-grow overflow-hidden">
              <FlipbookDemo pdfUrl={activePdf} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
