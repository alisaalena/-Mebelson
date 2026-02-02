import React from 'react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    { title: 'Безопасность корпусной мебели', code: 'Стандарт ГОСТ РФ' },
    { title: 'Экологичные материалы', code: 'Класс эмиссии E1' },
    { title: 'Качество кухонных систем', code: 'Гарантия надежности' },
    { title: 'Пожарная безопасность', code: 'Проверено экспертами' },
    { title: 'Надежность детской мебели', code: 'Забота о детях' },
    { title: 'Соответствие стандартам ЕАС', code: 'Заводское качество' },
  ];

  return (
    <div className="pt-8">
      <div className="section-header">
        <div className="max-w-xl">
          <h2>Гарантия <span style={{color: 'var(--me-red)'}}>качества</span> и безопасности</h2>
          <p style={{fontSize: '14px', color: '#6B7280', marginTop: '8px'}}>Вся наша мебель проходит строгий контроль качества. Мы используем только экологичные и безопасные материалы.</p>
        </div>
      </div>
      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <div key={i} className="cert-item">
            <div className="cert-icon">
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="cert-info">
              <h4>{cert.title}</h4>
              <p>{cert.code}</p>
            </div>
            <button style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#D1D5DB' }}>
              <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;