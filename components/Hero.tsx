import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="me-hero">
      <div className="container">
        <div className="me-hero-content">
          <div className="hero-tag">Ваш уют — наша главная работа</div>
          <h1 className="me-hero-title">
            Вдохновение для <br/>
            <span style={{color: 'var(--me-red)'}}>Вашего Дома</span>
          </h1>
          <p className="me-hero-descr">
            Листайте интерактивные коллекции Mebelson. Найдите идеи для кухни, спальни или детской, которые сделают вашу жизнь комфортнее и красивее уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalogs" className="btn-red" style={{ width: 'auto', minWidth: '240px' }}>
              Перейти к коллекциям
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;