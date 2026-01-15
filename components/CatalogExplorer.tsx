
import React from 'react';

interface CatalogExplorerProps {
  activeYear: 'Все' | '2025' | '2024';
  onOpenCatalog: () => void;
}

const CatalogExplorer: React.FC<CatalogExplorerProps> = ({ activeYear, onOpenCatalog }) => {
  const allCatalogs = [
    { 
      id: '1', 
      title: 'Каталог: Корпусная мебель 2025', 
      label: 'MEBELSON 2025',
      year: '2025', 
      type: 'PDF', 
      info: '48 страниц',
      color: 'bg-mebelson-red' 
    },
    { 
      id: '2', 
      title: 'Каталог КУХНИ', 
      label: 'KITCHEN 2024',
      year: '2024', 
      type: 'PDF', 
      info: '12 Mb',
      color: 'bg-[#333333]' 
    },
    { 
      id: '3', 
      title: 'Каталог СПАЛЬНИ', 
      label: 'BEDROOM 2024',
      year: '2024', 
      type: 'PDF', 
      info: '8.5 Mb',
      color: 'bg-[#666666]' 
    },
    { 
      id: '4', 
      title: 'Гостиные и Прихожие', 
      label: 'LIVING ROOM 24',
      year: '2024', 
      type: 'PDF', 
      info: '15 Mb',
      color: 'bg-[#888888]' 
    },
  ];

  const filteredCatalogs = activeYear === 'Все' 
    ? allCatalogs 
    : allCatalogs.filter(c => c.year === activeYear);

  return (
    <div className="pb-24 min-h-[400px]">
      <div className="container mx-auto">
        {filteredCatalogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCatalogs.map(catalog => (
              <div key={catalog.id} className="bg-white rounded-2xl shadow-sm border border-mebelson-border overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 group">
                {/* Cover Area */}
                <div className={`${catalog.color} aspect-[3/4] relative flex items-center justify-center p-8 transition-transform group-hover:scale-105 duration-700`}>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {catalog.year}
                  </div>
                  <div className="text-white text-center">
                    <h3 className="font-black text-2xl leading-tight tracking-tighter px-4 drop-shadow-xl mb-2">
                      {catalog.label}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto opacity-50 rounded-full"></div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button 
                       onClick={onOpenCatalog}
                       className="bg-white text-mebelson-red p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform"
                     >
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                     </button>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h4 className="font-bold text-mebelson-dark text-base mb-2 leading-tight min-h-[40px]">
                    {catalog.title}
                  </h4>
                  
                  <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-bold mb-6 uppercase tracking-widest">
                     <div className="bg-gray-100 px-2 py-1 rounded text-gray-500">{catalog.type}</div>
                     <span>•</span>
                     <span>{catalog.info}</span>
                  </div>
                  
                  <div className="mt-auto space-y-2">
                    <button 
                      onClick={onOpenCatalog}
                      className="w-full bg-mebelson-dark text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-mebelson-red transition-all shadow-lg active:scale-95"
                    >
                      <span>Открыть ридер</span>
                    </button>
                    
                    <button className="w-full bg-white text-gray-400 py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 border border-transparent hover:text-mebelson-dark transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      <span>Скачать PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-dashed border-gray-200 rounded-2xl">
            <p className="text-gray-400 font-medium italic">Каталогов за выбранный период не найдено.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogExplorer;