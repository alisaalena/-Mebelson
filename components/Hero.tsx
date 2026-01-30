import React from 'react';

const Hero: React.FC = () => {
  return (
    <header style={{ position: 'relative', backgroundColor: '#FBFBFB', padding: '4rem 0 5rem', borderBottom: '1px solid #eee' }}>
      <div className="container">
        <div style={{ maxWidth: '900px' }}>
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: 'white', border: '1px solid #eee', fontSize: '10px', fontWeight: 900, color: '#E31E24', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '2rem', borderRadius: '99px' }}>
            Коллекции 2026: Идеи для вашего пространства
          </div>
          <h1 className="font-black uppercase tracking-tighter" style={{ fontSize: '5rem', lineHeight: 0.9, marginBottom: '2rem' }}>
            Вдохновение <br/>
            для <span className="text-mebelson-red">Вашего Дома</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2.5rem', maxWidth: '36rem', lineHeight: 1.6, fontWeight: 500 }}>
            Листайте наши интерактивные каталоги, чтобы найти идеальное решение для кухни, спальни или детской. Мы создаем мебель, в которой хочется жить.
          </p>
          <div className="flex items-center" style={{ gap: '1rem' }}>
            <a href="#catalogs" className="btn-primary">
              Посмотреть коллекции
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1.5rem', paddingLeft: '1.5rem', borderLeft: '1px solid #ddd' }}>
               <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', color: '#999', margin: 0 }}>Более 500+</p>
                  <p style={{ fontSize: '12px', fontWeight: 700, margin: 0 }}>Готовых решений</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;