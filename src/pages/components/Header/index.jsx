import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const menuList = [
  { id: 1, to: '/', name: 'home' },
  { id: 2, to: '/portfolio', name: 'portfolio' },
  { id: 3, to: '/curriculum', name: 'curriculum' },
  { id: 4, to: '/contact', name: 'contact' },
];

function Header() {
  const [nameClass, setNameClass] = useState('');

  const handleClick = () => {
    if (!nameClass) setNameClass('active');
    else setNameClass('');
  };
  return (
    <header id="header" data-testid="header">
      <a id="logo" href="/">
        {/* Logo */}
      </a>
      <nav id="nav" className={nameClass}>
        <button type="button" id="btn-mobile" aria-expanded="false" onClick={handleClick}>
          Menu
          <span id="hamburger" />
        </button>
        <ul id="menu">
          {menuList.map(({ id, to, name }) => (
            <li key={id}>
              <Link to={to} onClick={handleClick} data-testid={name}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
