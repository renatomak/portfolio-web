import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Hamburger } from './styled';
import './styles.css';

function Header() {
  const [nameClass, setNameClass] = useState('');

  const handleClick = () => {
    if (!nameClass) setNameClass('active');
    else setNameClass('');
  };
  return (
    <header id="header">
      <a id="logo" href="">
        {/* Logo */}
      </a>
      <nav id="nav" className={nameClass}>
        <button id="btn-mobile" aria-expanded="false" onClick={handleClick}>
          Menu
          <span id="hamburger"></span>
        </button>
        <ul id="menu">
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={handleClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/curriculum" onClick={handleClick}>
              Curriculum
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    // <Navigation className={nameClass}>
    //   <Hamburger aria-expanded="false" onClick={handleClick} >
    //     {' '}
    //     Menu
    //     <span id="hamburger"></span>
    //   </Hamburger>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/portfolio">Portfolio</Link>
    //     </li>
    //     <li>
    //       <Link to="/curriculum">Curriculum</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //   </ul>
    // </Navigation>
  );
}

export default Header;
