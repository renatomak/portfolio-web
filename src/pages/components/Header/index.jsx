import React from 'react';
import { Link } from "react-router-dom";
import { Navigation } from "./styled";

function Header() {

  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/curriculo">Currículo</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Header;
