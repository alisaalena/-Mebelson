
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
               <img 
                 src="https://mebelson.ru/include/sotbit_origami/images/logo.svg" 
                 alt="Mebelson" 
                 className="h-8 w-auto grayscale opacity-70" 
               />
               <span className="text-xl font-black text-mebelson-dark tracking-tighter">MEBELSON</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed text-sm">
              Мебельная фабрика Mebelson — это современное производство корпусной мебели с 15-летней историей. Мы создаем пространство для жизни.
            </p>
            <div className="space-y-2 text-sm font-medium">
              <p className="flex items-center space-x-2">
                <span className="text-mebelson-red">Адрес:</span>
                <span>г. Ижевск, ул. Торговая, 15</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-mebelson-red">Телефон:</span>
                <span className="font-bold">8 (800) 201-94-66</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest text-mebelson-red">Ресурсы</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://mebelson.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors">Основной сайт</a></li>
              <li><a href="#catalogs" className="hover:text-mebelson-red transition-colors">Каталоги мебели</a></li>
              <li><a href="#downloads" className="hover:text-mebelson-red transition-colors">База материалов</a></li>
              <li><a href="#ai" className="hover:text-mebelson-red transition-colors">AI-Помощник</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Категории</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://mebelson.ru/catalog/kukhni/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors">Кухни</a></li>
              <li><a href="https://mebelson.ru/catalog/detskie/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors">Детские</a></li>
              <li><a href="https://mebelson.ru/catalog/spalni/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors">Спальни</a></li>
              <li><a href="https://mebelson.ru/catalog/prikhozhie/" target="_blank" rel="noopener noreferrer" className="hover:text-mebelson-red transition-colors">Прихожие</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
          <p>© 2025 МЕБЕЛЬНАЯ ФАБРИКА MEBELSON. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-mebelson-red transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-mebelson-red transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
