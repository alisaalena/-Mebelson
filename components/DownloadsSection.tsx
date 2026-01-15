
import React from 'react';

const DownloadsSection: React.FC = () => {
  const materials = [
    { title: 'Сертификат соответствия ГОСТ (Корпусная мебель)', type: 'PDF', size: '2.4 MB', cat: 'Сертификаты', id: 'm1' },
    { title: 'Архив фото высокого разрешения: Кухни 2024', type: 'ZIP', size: '1.2 GB', cat: 'Фото', id: 'm2' },
    { title: 'Листовка рекламная: Серия Nordic (A4)', type: 'PDF', size: '12 MB', cat: 'Листовки', id: 'm3' },
    { title: 'Прайс-лист для партнеров (Оптовый)', type: 'XLSX', size: '1.1 MB', cat: 'Прайс-листы', id: 'm4' },
    { title: 'Инструкции по сборке: Системы хранения', type: 'PDF', size: '8.4 MB', cat: 'Документация', id: 'm5' },
    { title: 'Brandbook Mebelson (Логотипы и цвета)', type: 'PDF', size: '28 MB', cat: 'Дизайн', id: 'm6' },
  ];

  return (
    <section id="downloads" className="py-24 bg-mebelson-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-3xl font-extrabold text-mebelson-dark mb-4">База материалов</h2>
              <p className="text-slate-500 font-medium text-sm">Все необходимое для работы вашего торгового зала и наполнения сайта.</p>
            </div>
            <button className="text-[10px] font-bold text-mebelson-red uppercase tracking-widest border-b-2 border-mebelson-red pb-1 hover:text-mebelson-dark hover:border-mebelson-dark transition-all">
              Перейти во внешнее хранилище
            </button>
          </div>

          <div className="space-y-3">
            {materials.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded border border-slate-100 flex items-center justify-between group hover:border-mebelson-red transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-6">
                  <div className={`w-12 h-12 rounded flex items-center justify-center font-bold text-[10px] ${
                    item.type === 'PDF' ? 'bg-red-50 text-red-600' : 
                    item.type === 'ZIP' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {item.type}
                  </div>
                  <div>
                    <h5 className="font-bold text-mebelson-dark text-sm mb-1 group-hover:text-mebelson-red transition-colors">{item.title}</h5>
                    <div className="flex items-center space-x-3 text-[9px] text-slate-400 font-extrabold uppercase tracking-widest">
                      <span>{item.cat}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <button className="p-3 bg-slate-50 text-slate-400 rounded-full hover:bg-mebelson-red hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
