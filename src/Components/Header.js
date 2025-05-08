import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src="https://placehold.co/160x40?text=Placeholder" alt="Placeholder" className="site-logo" />
      <Nav />
    </header>
  );
}

export default Header;
