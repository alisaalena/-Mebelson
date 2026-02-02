import React from 'react';

interface Leaflet {
  title: string;
  info: string;
  pdfUrl: string;
}

interface LeafletsSectionProps {
  leaflets: Leaflet[];
  onOpenLeaflet: (pdfUrl: string) => void;
}

const LeafletsSection: React.FC<LeafletsSectionProps> = ({ leaflets, onOpenLeaflet }) => {
  return (
    <div className="pt-8">
      <div className="section-header">
        <div className="max-w-xl">
          <h2 style={{ fontSize: '32px', fontWeight: 800 }}>Коротко о <span style={{color: 'var(--me-red)'}}>главном</span></h2>
          <p style={{fontSize: '15px', color: '#6B7280', marginTop: '10px', lineHeight: '1.5'}}>
            Компактные подборки с популярными сериями и полезными советами по обустройству дома. Горизонтальные листовки формата А4.
          </p>
        </div>
      </div>
      
      <div className="leaflet-grid">
        {leaflets.map((item, i) => (
          <div key={i} className="leaflet-card">
            <div className="leaflet-card-top">
              <div className="leaflet-card-label">MEBELSON A4</div>
              <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.1)', color: '#fff', fontSize: '10px', padding: '3px 6px', borderRadius: '4px', fontWeight: 700 }}>
                A4 LANDSCAPE
              </div>
            </div>
            <div className="leaflet-card-body">
              <div>
                <h4 className="leaflet-title">{item.title}</h4>
                <p className="leaflet-info">{item.info}</p>
              </div>
              
              <div>
                <button 
                  onClick={() => onOpenLeaflet(item.pdfUrl)}
                  className="btn-red"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Смотреть онлайн
                </button>
                <a href={item.pdfUrl} download className="download-link">Скачать файл</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeafletsSection;