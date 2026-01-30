
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
 * Represents a single message in the AI Consultant chat interface.
 * Used to track conversation history between the user and the Gemini model.
 */
export interface Message {
  role: 'user' | 'model';
  text: string;
}

/**
 * Defines the structure of a subscription or pricing plan for the service.
 */
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}
