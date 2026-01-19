
import React from 'react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    { title: 'ГОСТ: Корпусная мебель', code: '№001245-2024' },
    { title: 'Сертификат: Кухонные модули', code: '№001246-2024' },
    { title: 'Эко-сертификат материалов', code: '№001247-2024' },
    { title: 'Пожарная безопасность', code: '№001248-2024' },
    { title: 'ГОСТ: Детская мебель', code: '№001249-2024' },
    { title: 'Таможенный союз (EAC)', code: '№001250-2024' },
  ];

  return (
    <section className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-mebelson-dark uppercase tracking-tight mb-12">
          Наши <span className="text-mebelson-red">Сертификаты</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-mebelson-border flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-16 bg-red-50 text-mebelson-red flex items-center justify-center rounded border border-red-100 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-mebelson-dark text-sm leading-tight group-hover:text-mebelson-red transition-colors">{cert.title}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{cert.code}</p>
                </div>
              </div>
              <button className="text-gray-300 hover:text-mebelson-red transition-colors p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
           <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Все сертификаты обновлены: Январь 2025</p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
