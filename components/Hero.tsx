import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="me-hero border-b border-gray-100">
      <div className="container">
        <div className="me-hero-content">
          <div className="hero-tag" style={{ color: 'var(--me-red)', fontWeight: 700, marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase' }}>
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