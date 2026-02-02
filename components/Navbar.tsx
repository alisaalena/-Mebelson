import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-main">
      <div className="container">
        <div className="navbar-inner">
          <a href="/" className="logo-box">
            MEBELSON
          </a>
          
          <div className="hidden lg:flex items-center nav-group">
            <a href="#" className="nav-link">Каталог мебели</a>
            <a href="#catalogs" className="nav-link active">Электронные каталоги</a>
            <a href="#" className="nav-link">Где купить</a>
            <a href="#" className="nav-link">Контакты</a>
          </div>

          <div className="search-container">
            <button className="search-btn" aria-label="Поиск">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;