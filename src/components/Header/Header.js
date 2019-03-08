import React from 'react';
import './Header.css';

// TODO: create <Link> that will go to a how to page

const Header = props => {
  const { refresh } = props;
  return (
    <header className="header">
      <h1 className="header__h1">ipaddressinfo.com</h1>
      <button type="button" className="header__btn" onClick={refresh}>
        clear
      </button>
    </header>
  );
};

export default Header;
