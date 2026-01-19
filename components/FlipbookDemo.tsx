
import React, { useEffect, useRef } from 'react';

interface FlipbookDemoProps {
  pdfUrl: string;
}

declare global {
  interface Window {
    jQuery: any;
    _df: any;
  }
}

const FlipbookDemo: React.FC<FlipbookDemoProps> = ({ pdfUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Интеграция с DearFlip (предполагается, что скрипты dFlip загружены в Bitrix)
    if (window._df && containerRef.current) {
      // Пример инициализации плагина в контейнере
      // На продакшене здесь будет вызов API купленного плагина
      console.log('Инициализация DearFlip для:', pdfUrl);
    }
  }, [pdfUrl]);

  return (
    <div className="flex flex-col h-full">
      <div 
        ref={containerRef}
        className="flex-grow bg-gray-50 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-4 border-2 border-dashed border-gray-200"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-mebelson-red/10 text-mebelson-red rounded-full flex items-center justify-center mx-auto mb-4">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <h3 className="text-xl font-bold text-mebelson-dark mb-2 tracking-tight">3D-просмотр DearFlip</h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Здесь будет инициализирован профессиональный плагин для реалистичного листания PDF.
          </p>
          <p className="mt-4 text-[10px] font-black uppercase text-mebelson-red tracking-widest bg-red-50 inline-block px-3 py-1 rounded">
            PDF: {pdfUrl.split('/').pop()}
          </p>
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Powered by DearFlip 3D Technology</span>
        <a 
          href={pdfUrl} 
          download 
          className="flex items-center space-x-2 text-xs font-bold text-mebelson-dark hover:text-mebelson-red transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          <span>Скачать для печати</span>
        </a>
      </div>
    </div>
  );
};

export default FlipbookDemo;
