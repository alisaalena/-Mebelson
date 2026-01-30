
import React from 'react';

interface LeafletsSectionProps {
  onOpenLeaflet: (pdfUrl: string) => void;
}

/**
 * Секция листовок. 
 * Изображения заменены на SVG-заглушки для исключения внешних запросов к Unsplash.
 */
const LeafletsSection: React.FC<LeafletsSectionProps> = ({ onOpenLeaflet }) => {
  // SVG Placeholder Base64
  const placeholderImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23eeeeee'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23cccccc'%3EPLACEHOLDER%3C/text%3E%3C/svg%3E";

  const leaflets = [
    { title: 'Стиль Nordic', info: 'Готовые решения для гостиной', pdfUrl: 'PLACEHOLDER_LEAFLET_NORDIC_URL', img: placeholderImg },
    { title: 'Лофт: Шик', info: 'Тренды в дизайне кухонь', pdfUrl: 'PLACEHOLDER_LEAFLET_LOFT_URL', img: placeholderImg },
    { title: 'Детская Dream', info: 'Безопасность и эргономика', pdfUrl: 'PLACEHOLDER_LEAFLET_KIDS_URL', img: placeholderImg },
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
              <div className="aspect-[4/3] overflow-hidden bg-gray-200 flex items-center justify-center">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
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
