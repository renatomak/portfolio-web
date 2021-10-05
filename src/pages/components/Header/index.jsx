import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  const menuList = [
    { id: 1, to: '/', name: 'Home' },
    { id: 2, to: '/portfolio', name: 'Portfolio' },
    { id: 3, to: '/curriculum', name: 'Curriculum' },
    { id: 4, to: '/contact', name: 'Contact' },
  ];
  const [nameClass, setNameClass] = useState('');

  const handleClick = () => {
    if (!nameClass) setNameClass('active');
    else setNameClass('');
  };
  return (
    <header id="header">
      <a id="logo" href="/">
        {/* Logo */}
      </a>
      <nav id="nav" className={nameClass}>
        <button id="btn-mobile" aria-expanded="false" onClick={handleClick}>
          Menu
          <span id="hamburger"></span>
        </button>
        <ul id="menu">
          {menuList.map(({ id, to, name }) => (
            <li key={id}>
              <Link to={to} onClick={handleClick}>
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
