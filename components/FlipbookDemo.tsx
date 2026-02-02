
import React, { useEffect, useRef } from 'react';

interface FlipbookDemoProps {
  pdfUrl: string;
}

declare global {
  interface Window {
    jQuery: any;
    _df: any; // Глобальный объект DearFlip
  }
}

const FlipbookDemo: React.FC<FlipbookDemoProps> = ({ pdfUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // В Bitrix ассеты DearFlip должны быть подключены в header.php
    // Пример программной инициализации плагина dFlip
    if (window._df && containerRef.current) {
      try {
        // Создаем инстанс флипбука в контейнере
        window._df.create(containerRef.current, {
          source: pdfUrl,
          outline: true,
          webgl: true, // Включаем 3D движок
          backgroundColor: "#ffffff",
          direction: 1 // RTL/LTR
        });
      } catch (err) {
        console.error("Ошибка инициализации DearFlip:", err);
      }
    } else {
      console.warn("DearFlip (dFlip) не обнаружен. Проверьте подключение скриптов в Bitrix.");
    }

    return () => {
      // Очистка при размонтировании (если API DearFlip поддерживает dispose)
    };
  }, [pdfUrl]);

  return (
    <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4">
      {/* Контейнер для DearFlip */}
      <div 
        ref={containerRef} 
        className="w-full h-full rounded-lg shadow-inner overflow-hidden"
        style={{ minHeight: '400px' }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mebelson-red"></div>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Загрузка 3D-движка...
          </p>
          <span className="text-[10px] text-gray-300">Файл: {pdfUrl}</span>
        </div>
      </div>
    </div>
  );
};

export default FlipbookDemo;
