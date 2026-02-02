import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="me-hero">
      <div className="container">
        <div className="me-hero-content">
          <div className="hero-tag">Ваш уют — наша работа</div>
          <h1 className="me-hero-title">
            Вдохновение для <br/>
            <span>Вашего Дома</span>
          </h1>
          <p className="me-hero-descr">
            Листайте интерактивные коллекции Mebelson. Найдите идеи для кухни, спальни или детской, которые сделают вашу жизнь комфортнее и красивее.
          </p>
          <div className="flex gap-4">
            <a href="#catalogs" className="btn-red" style={{ width: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
              Начать просмотр
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;