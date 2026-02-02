import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-main">
      <div className="container flex items-center justify-between">
        <a href="/" className="logo-box">
          MEBELSON
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="nav-link">Каталог мебели</a>
          <a href="#catalogs" className="nav-link active">Электронные каталоги</a>
          <a href="#" className="nav-link">Где купить</a>
          <a href="#" className="nav-link">Контакты</a>
        </div>

        <div className="flex items-center">
          <button className="search-btn">
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;