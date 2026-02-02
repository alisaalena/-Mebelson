import React from 'react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    { title: 'Безопасность корпусной мебели', code: 'СТАНДАРТ ГОСТ РФ' },
    { title: 'Экологичные материалы', code: 'КЛАСС ЭМИССИИ E1' },
    { title: 'Качество кухонных систем', code: 'ЕВРОПЕЙСКИЕ СТАНДАРТЫ' },
    { title: 'Пожарная безопасность', code: 'ПРОВЕРЕНО ЭКСПЕРТАМИ' },
    { title: 'Надежность детской мебели', code: 'ЗАБОТА О САМЫХ МАЛЕНЬКИХ' },
    { title: 'Соответствие стандартам ЕАС', code: 'ГАРАНТИЯ ФАБРИКИ' },
  ];

  return (
    <div className="pt-8">
      <div className="section-header">
        <h2 style={{ fontSize: '32px', fontWeight: 800 }}>Сертификаты качества</h2>
      </div>
      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <div key={i} className="cert-item">
            <div className="cert-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="cert-info">
              <h4>{cert.title}</h4>
              <p>{cert.code}</p>
            </div>
            <button className="cert-download-btn" title="Скачать">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;