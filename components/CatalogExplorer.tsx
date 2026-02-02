import React from 'react';

interface CatalogExplorerProps {
  onOpenCatalog: (pdfUrl: string) => void;
}

const CatalogExplorer: React.FC<CatalogExplorerProps> = ({ onOpenCatalog }) => {
  const catalogs = [
    { id: '1', title: 'Общий каталог 2026', label: 'MEBELSON 2026', pdfUrl: '#', color: 'bg-gradient-red' },
    { id: '2', title: 'Кухонные системы', label: 'KITCHEN 2024', pdfUrl: '#', color: 'bg-[#1A1A1A]' },
    { id: '3', title: 'Детская мебель', label: 'KIDS 2024', pdfUrl: '#', color: 'bg-[#444]' },
    { id: '4', title: 'Спальни и Гостиные', label: 'HOME 2024', pdfUrl: '#', color: 'bg-[#666]' },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {catalogs.map(catalog => (
        <div key={catalog.id} className="catalog-card group">
          <div className={`card-cover ${catalog.color}`}>
            <div className="text-white text-center z-10 p-8">
              <div className="font-black text-2xl tracking-tighter mb-2">{catalog.label}</div>
              <div className="w-10 h-1 bg-white/40 mx-auto rounded-full"></div>
            </div>
            <div className="card-overlay">
               <button onClick={() => onOpenCatalog(catalog.pdfUrl)} className="eye-btn">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
               </button>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-mebelson-dark mb-4 min-h-[40px] leading-tight">{catalog.title}</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => onOpenCatalog(catalog.pdfUrl)} 
                className="btn-primary" 
                style={{ padding: '0.8rem', width: '100%', borderRadius: '0.75rem', fontSize: '10px' }}
              >
                Смотреть
              </button>
              <a 
                href={catalog.pdfUrl} 
                download 
                className="w-full bg-white text-gray-400 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2 border border-gray-100 hover:text-mebelson-dark hover:border-mebelson-dark transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
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