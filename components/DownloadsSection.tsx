
import React, { useState } from 'react';

const DownloadsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Все');

  const categories = ['Все', 'Сертификаты', 'Фото', 'Листовки', 'Прайс-листы'];

  const materials = [
    { title: 'Сертификат соответствия ГОСТ (Корпусная мебель)', type: 'PDF', size: '2.4 MB', cat: 'Сертификаты', id: 'm1' },
    { title: 'Архив фото высокого разрешения: Кухни 2024', type: 'ZIP', size: '1.2 GB', cat: 'Фото', id: 'm2' },
    { title: 'Листовка рекламная: Серия Nordic (A4)', type: 'PDF', size: '12 MB', cat: 'Листовки', id: 'm3' },
    { title: 'Прайс-лист для партнеров (Оптовый)', type: 'XLSX', size: '1.1 MB', cat: 'Прайс-листы', id: 'm4' },
    { title: 'Инструкции по сборке: Системы хранения', type: 'PDF', size: '8.4 MB', cat: 'Документация', id: 'm5' },
    { title: 'Brandbook Mebelson (Логотипы и цвета)', type: 'PDF', size: '28 MB', cat: 'Листовки', id: 'm6' },
    { title: 'Сертификат пожарной безопасности', type: 'PDF', size: '1.1 MB', cat: 'Сертификаты', id: 'm7' },
    { title: 'Фотогалерея: Спальни в интерьере', type: 'ZIP', size: '450 MB', cat: 'Фото', id: 'm8' },
  ];

  const filteredMaterials = activeTab === 'Все' 
    ? materials 
    : materials.filter(m => m.cat === activeTab);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-mebelson-dark mb-4 uppercase tracking-tighter">База материалов</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Скачивайте актуальные сертификаты, рекламные материалы и прайс-листы для вашего бизнеса.
            </p>
          </div>

          {/* Закладки (Табы) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeTab === cat
                    ? 'bg-mebelson-red text-white shadow-lg shadow-red-500/30'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Список материалов */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMaterials.length > 0 ? (
              filteredMaterials.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-[#FBFBFB] p-5 rounded-2xl border border-gray-100 flex items-center justify-between group hover:border-mebelson-red transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex items-center space-x-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-[10px] shadow-sm ${
                      item.type === 'PDF' ? 'bg-red-50 text-red-600' : 
                      item.type === 'ZIP' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                    }`}>
                      {item.type}
                    </div>
                    <div>
                      <h5 className="font-bold text-mebelson-dark text-xs mb-1 group-hover:text-mebelson-red transition-colors line-clamp-1">{item.title}</h5>
                      <div className="flex items-center space-x-3 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                        <span className="text-mebelson-red/60">{item.cat}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-3 bg-white text-gray-300 rounded-full border border-gray-100 group-hover:bg-mebelson-red group-hover:text-white group-hover:border-mebelson-red transition-all shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 text-sm font-medium italic">В данной категории пока нет доступных файлов.</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center space-x-2 text-[10px] font-black text-mebelson-dark uppercase tracking-[0.2em] border-b-2 border-mebelson-red pb-1 hover:text-mebelson-red transition-all">
              <span>Открыть облачное хранилище</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;