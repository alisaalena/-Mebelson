
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
               <div className="text-2xl font-black text-mebelson-red uppercase tracking-tighter">
                 MEBELSON
               </div>
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
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest text-mebelson-red">Навигация</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#catalogs" className="hover:text-mebelson-red transition-colors">Каталоги мебели</a></li>
              <li><a href="#leaflets" className="hover:text-mebelson-red transition-colors">Листовки</a></li>
              <li><a href="#certificates" className="hover:text-mebelson-red transition-colors">Сертификаты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Информация</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-mebelson-red transition-colors">О фабрике</a></li>
              <li><a href="#" className="hover:text-mebelson-red transition-colors">Где купить</a></li>
              <li><a href="#" className="hover:text-mebelson-red transition-colors">Партнерам</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
          <p>© 2026 МЕБЕЛЬНАЯ ФАБРИКА MEBELSON. ЭТАЛОН ВЕРСТКИ.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-mebelson-red transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-mebelson-red transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
