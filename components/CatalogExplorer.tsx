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
    <div className="pt-4">
      <div className="section-header">
        <div className="max-w-xl">
          <h2>Ваш персональный <span style={{color: 'var(--me-red)'}}>Гид по Стилю</span></h2>
          <p style={{fontSize: '15px', color: 'var(--me-gray-text)', marginTop: '12px', lineHeight: '1.6'}}>
            Мы собрали лучшие интерьерные решения в удобном формате журнала. Листайте, вдохновляйтесь и создавайте дом своей мечты вместе с Mebelson.
          </p>
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
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Интерактивная 3D-версия • {cat.size}</span>
              </div>
              
              <button onClick={() => onOpenCatalog(cat.pdfUrl)} className="btn-red">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Листать онлайн
              </button>
              
              <a href={cat.pdfUrl} download className="download-link">Скачать PDF</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogExplorer;