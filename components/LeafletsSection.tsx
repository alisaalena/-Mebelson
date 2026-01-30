import React from 'react';

interface LeafletsSectionProps {
  onOpenLeaflet: (pdfUrl: string) => void;
}

/**
 * Секция листовок. 
 * Плейсхолдеры реализованы через CSS-блоки для исключения любых внешних ссылок и протоколов.
 */
const LeafletsSection: React.FC<LeafletsSectionProps> = ({ onOpenLeaflet }) => {
  const leaflets = [
    { title: 'Стиль Nordic', info: 'Готовые решения для гостиной', pdfUrl: 'PLACEHOLDER_LEAFLET_NORDIC_URL' },
    { title: 'Лофт: Шик', info: 'Тренды в дизайне кухонь', pdfUrl: 'PLACEHOLDER_LEAFLET_LOFT_URL' },
    { title: 'Детская Dream', info: 'Безопасность и эргономика', pdfUrl: 'PLACEHOLDER_LEAFLET_KIDS_URL' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-mebelson-dark uppercase tracking-tight mb-12">
          Коротко <span className="text-mebelson-red">о главном</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaflets.map((item, i) => (
            <div key={i} className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:border-mebelson-red transition-all">
              {/* CSS-плейсхолдер вместо изображения */}
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center p-8 overflow-hidden">
                <div className="text-center opacity-20">
                   <div className="w-12 h-12 border-2 border-current rounded-lg mx-auto mb-2 flex items-center justify-center">
                     <span className="font-black">IMG</span>
                   </div>
                   <div className="text-[10px] font-bold uppercase tracking-widest">Preview Block</div>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-mebelson-dark">{item.title}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{item.info}</p>
                </div>
                <button 
                  onClick={() => onOpenLeaflet(item.pdfUrl)}
                  className="p-3 bg-white text-mebelson-red rounded-full shadow-sm hover:bg-mebelson-red hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeafletsSection;