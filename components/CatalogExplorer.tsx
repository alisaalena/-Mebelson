import React, { useState } from 'react';

interface CatalogExplorerProps {
  onOpenCatalog: (pdfUrl: string) => void;
}

const CatalogExplorer: React.FC<CatalogExplorerProps> = ({ onOpenCatalog }) => {
  const [activeYear, setActiveYear] = useState('Все');

  const catalogs = [
    { id: '1', year: '2025', title: 'Коллекция: Корпусная мебель 2025', label: 'MEBELSON 2025', size: '24 Mb', color: 'red' },
    { id: '2', year: '2024', title: 'Идеи для Вашей КУХНИ', label: 'KITCHEN 2024', size: '12 Mb', color: 'dark' },
    { id: '3', year: '2024', title: 'Уютные СПАЛЬНИ', label: 'BEDROOM 2024', size: '8.5 Mb', color: 'gray-dark' },
    { id: '4', year: '2023', title: 'Гостиные и Прихожие', label: 'LIVING ROOM 23', size: '15 Mb', color: 'gray' },
  ];

  const filtered = activeYear === 'Все' ? catalogs : catalogs.filter(c => c.year === activeYear);

  return (
    <div className="pt-8">
      <div className="section-header">
        <div className="max-w-xl">
          <h2>Ваш персональный <span style={{color: 'var(--me-red)'}}>Гид по Стилю</span></h2>
          <p style={{fontSize: '14px', color: '#6B7280', marginTop: '8px'}}>Мы собрали готовые интерьерные решения, чтобы вам было проще выбрать мебель для себя и близких.</p>
        </div>
        <div className="tabs-container">
          {['Все', '2025', '2024'].map(year => (
            <button 
              key={year}
              onClick={() => setActiveYear(year)}
              className={`tab-btn ${activeYear === year ? 'active' : ''}`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-grid">
        {filtered.map(cat => (
          <div key={cat.id} className="cat-card">
            <div className={`cat-card-top ${cat.color}`}>
              <div className="year-badge">{cat.year}</div>
              <div className="cat-card-label">{cat.label}</div>
            </div>
            <div className="cat-card-body">
              <h4 className="cat-title">{cat.title}</h4>
              <div className="cat-meta">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Интерактивный PDF • {cat.size}</span>
              </div>
              
              <button onClick={() => onOpenCatalog('#')} className="btn-red">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Смотреть
              </button>
              
              <a href="#" className="download-link">Скачать файл</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogExplorer;