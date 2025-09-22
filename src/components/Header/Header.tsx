import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/imagens/Logo.svg"
          alt="BeTalent"
          className="header-logo-img"
        />
      </div>
    </header>
  );
};

export default Header;