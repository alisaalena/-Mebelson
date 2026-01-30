
export interface Catalog {
  id: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  pdfUrl: string;
}

export interface DownloadMaterial {
  id: string;
  title: string;
  type: 'PDF' | 'ZIP' | 'IMG' | 'DOC' | 'XLSX';
  size: string;
  category: 'Сертификаты' | 'Фото' | 'Листовки' | 'Прайс-листы' | 'Документация';
}

/**
 * Сообщение в чате обратной связи.
 */
export interface Message {
  role: 'user' | 'model';
  text: string;
}

/**
 * Структура тарифного плана.
 */
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}
