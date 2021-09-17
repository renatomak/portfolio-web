import React from "react";
import { Link } from "react-router-dom";
import { ALink } from "./styled";
import { ImArrowLeft } from 'react-icons/im'

function LinkVoltar() {
  return (
    <ALink>
      <Link to="/"><ImArrowLeft /> Voltar ao início</Link>
    </ALink>
  );
}

export default LinkVoltar;
