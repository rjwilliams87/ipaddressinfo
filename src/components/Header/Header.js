import React from 'react';
import './Header.css';

// TODO: turn h2s into <Link> / <button>
// what? will go to how to page
// clear will be passed func that clears App's state

const Header = () => {
  return (
    <header className="header">
      <h2>What?</h2>
      <h1>ipaddressinfo.com</h1>
      <h2>clear</h2>
    </header>
  );
};

export default Header;
