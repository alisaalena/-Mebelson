import React, { useState } from 'react';

interface Catalog {
  id: string;
  year: string;
  title: string;
  label: string;
  size: string;
  color: string;
  pdfUrl: string;
}

interface CatalogExplorerProps {
  catalogs: Catalog[];
  onOpenCatalog: (pdfUrl: string) => void;
}

const CatalogExplorer: React.FC<CatalogExplorerProps> = ({ catalogs, onOpenCatalog }) => {
  const [activeYear, setActiveYear] = useState('Все');

  const filtered = activeYear === 'Все' ? catalogs : catalogs.filter(c => c.year === activeYear);

  return (
    <div className="section-catalogs-inner">
      <div className="section-header">
        <h2>Электронные каталоги и буклеты</h2>
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
              <div>
                <h4 className="cat-title">{cat.title}</h4>
                <div className="cat-meta">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.6 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>PDF • {cat.size}</span>
                </div>
              </div>
              
              <div>
                <button onClick={() => onOpenCatalog(cat.pdfUrl)} className="btn-red">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Смотреть онлайн
                </button>
                <a href={cat.pdfUrl} download className="download-link">Скачать файл</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogExplorer;