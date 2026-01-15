
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
  type: 'PDF' | 'ZIP' | 'IMG' | 'DOC';
  size: string;
  category: 'Сертификаты' | 'Фото' | 'Листовки' | 'Прайс-листы';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

/**
 * Interface representing a pricing tier for the service.
 * Used in the Pricing component.
 */
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}
