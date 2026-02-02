import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="me-hero">
      <div className="container">
        <div className="me-hero-content">
          <div className="hero-tag" style={{ color: 'var(--me-red)', fontWeight: 800, marginBottom: '15px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Ваш уют — наша работа
          </div>
          <h1 className="me-hero-title">
            Вдохновение для <br/>
            <span>Вашего Дома</span>
          </h1>
          <p className="me-hero-descr">
            Листайте интерактивные коллекции Mebelson. Найдите идеи для кухни, спальни или детской, которые сделают вашу жизнь комфортнее и красивее.
          </p>
          <div className="flex">
            <a href="#catalogs" className="btn-red">
              Перейти к коллекции
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;