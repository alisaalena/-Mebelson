import React from 'react';

interface CatalogExplorerProps {
  onOpenCatalog: (pdfUrl: string) => void;
}

const CatalogExplorer: React.FC<CatalogExplorerProps> = ({ onOpenCatalog }) => {
  const catalogs = [
    { id: '1', title: 'Общий каталог 2026', label: 'MEBELSON 2026', pdfUrl: 'PLACEHOLDER_CATALOG_MAIN_URL', color: 'bg-mebelson-red' },
    { id: '2', title: 'Кухонные системы', label: 'KITCHEN 2024', pdfUrl: 'PLACEHOLDER_CATALOG_KITCHEN_URL', color: 'bg-mebelson-dark' },
    { id: '3', title: 'Детская мебель', label: 'KIDS 2024', pdfUrl: 'PLACEHOLDER_CATALOG_KIDS_URL', color: 'bg-[#666]' },
    { id: '4', title: 'Спальни и Гостиные', label: 'HOME 2024', pdfUrl: 'PLACEHOLDER_CATALOG_HOME_URL', color: 'bg-[#888]' },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4">
      {catalogs.map(catalog => (
        <div key={catalog.id} className="catalog-card">
          <div className={`card-cover ${catalog.color}`}>
            <div className="font-black text-white uppercase tracking-tighter" style={{ textAlign: 'center', zIndex: 1, padding: '2rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{catalog.label}</div>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'rgba(255,255,255,0.4)', margin: '0 auto', borderRadius: '2px' }}></div>
            </div>
            <div className="card-overlay">
               <button onClick={() => onOpenCatalog(catalog.pdfUrl)} style={{ backgroundColor: 'white', color: '#E31E24', padding: '1rem', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                 <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
               </button>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h4 className="font-bold" style={{ marginBottom: '1rem', fontSize: '1rem', height: '2.5rem', overflow: 'hidden' }}>{catalog.title}</h4>
            <div className="flex" style={{ flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                onClick={() => onOpenCatalog(catalog.pdfUrl)} 
                className="btn-primary" 
                style={{ padding: '0.75rem', width: '100%', borderRadius: '0.75rem' }}
              >
                Смотреть
              </button>
              <a 
                href={catalog.pdfUrl} 
                download 
                className="flex items-center justify-center font-bold uppercase tracking-widest" 
                style={{ fontSize: '10px', padding: '0.75rem', color: '#aaa', border: '1px solid #eee', borderRadius: '0.75rem', gap: '0.5rem' }}
              >
                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                <span>PDF</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogExplorer;