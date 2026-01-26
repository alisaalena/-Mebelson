
import React from 'react';

interface CatalogExplorerProps {
  onOpenCatalog: (pdfUrl: string) => void;
}

const CatalogExplorer: React.FC<CatalogExplorerProps> = ({ onOpenCatalog }) => {
  const catalogs = [
    { id: '1', title: 'Общий каталог 2026', label: 'MEBELSON 2026', pdfUrl: '/upload/catalogs/main_2026.pdf', color: 'bg-mebelson-red' },
    { id: '2', title: 'Кухонные системы', label: 'KITCHEN 2024', pdfUrl: '/upload/catalogs/kitchen.pdf', color: 'bg-[#333333]' },
    { id: '3', title: 'Детская мебель', label: 'KIDS 2024', pdfUrl: '/upload/catalogs/kids.pdf', color: 'bg-[#666666]' },
    { id: '4', title: 'Спальни и Гостиные', label: 'HOME 2024', pdfUrl: '/upload/catalogs/living.pdf', color: 'bg-[#888888]' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {catalogs.map(catalog => (
        <div key={catalog.id} className="bg-white rounded-2xl shadow-sm border border-mebelson-border overflow-hidden flex flex-col transition-all hover:shadow-2xl group">
          <div className={`${catalog.color} aspect-[3/4] relative flex items-center justify-center p-8 overflow-hidden`}>
            <div className="text-white text-center z-10">
              <h3 className="font-black text-2xl tracking-tighter mb-2">{catalog.label}</h3>
              <div className="w-10 h-1 bg-white/40 mx-auto rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <button onClick={() => onOpenCatalog(catalog.pdfUrl)} className="bg-white text-mebelson-red p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
               </button>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-mebelson-dark mb-4 min-h-[40px] leading-tight">{catalog.title}</h4>
            <div className="space-y-2">
              <button onClick={() => onOpenCatalog(catalog.pdfUrl)} className="w-full bg-mebelson-dark text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-mebelson-red transition-all">
                Смотреть
              </button>
              <a href={catalog.pdfUrl} download className="w-full bg-white text-gray-400 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 border border-gray-100 hover:text-mebelson-dark hover:border-mebelson-dark transition-all">
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
