import React from 'react';

interface LeafletsSectionProps {
  onOpenLeaflet: (pdfUrl: string) => void;
}

const LeafletsSection: React.FC<LeafletsSectionProps> = ({ onOpenLeaflet }) => {
  const leaflets = [
    { title: 'Стиль Nordic', info: 'Идеи для светлой гостиной', pdfUrl: '#' },
    { title: 'Лофт: Тренды', info: 'Современные решения для кухни', pdfUrl: '#' },
    { title: 'Детская Dream', info: 'Комфорт для самых маленьких', pdfUrl: '#' },
  ];

  return (
    <div className="pt-8">
      <div className="section-header">
        <div className="max-w-xl">
          <h2>Коротко о <span style={{color: 'var(--me-red)'}}>главном</span></h2>
          <p style={{fontSize: '14px', color: '#6B7280', marginTop: '8px'}}>Компактные подборки с популярными сериями и полезными советами по обустройству дома.</p>
        </div>
      </div>
      <div className="catalog-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
        {leaflets.map((item, i) => (
          <div key={i} className="cat-card" style={{flexDirection: 'row', alignItems: 'center', padding: '16px', gap: '16px', height: 'auto'}}>
            <div style={{width: '60px', height: '80px', background: '#F3F4F6', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D1D5DB'}}>
               <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div style={{flexGrow: 1}}>
              <h4 style={{fontSize: '15px', fontWeight: '800', margin: 0}}>{item.title}</h4>
              <p style={{fontSize: '11px', color: '#9CA3AF', margin: '4px 0 0', textTransform: 'uppercase', fontWeight: '600'}}>{item.info}</p>
            </div>
            <button 
              onClick={() => onOpenLeaflet(item.pdfUrl)}
              className="btn-red"
              style={{width: '44px', height: '44px', padding: 0, flexShrink: 0}}
            >
              <svg style={{width: '20px', height: '20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeafletsSection;