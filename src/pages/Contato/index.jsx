import React from "react";
import Caminho from "../components/Caminho";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import LinkVoltar from "../components/LinkVoltar";
import { ContatoContainer } from "./styled";

const index = () => {
  return (
    <>
      <Caminho page="Contato" />
      <ContatoContainer className="main">
        <h3>E-mail:</h3>
        <p>renato.mark.silva@gmail.com</p>

        <h3>Telefone:</h3>
        <p>(062) 9 9464-4482</p>

        <h3>Redes Sociais:</h3>
        <a
          className="social-img"
          rel="noreferrer"
          href="https://github.com/renatomak"
          target="_blank"
          alt="Link para o GitHub"
        >
          <GoMarkGithub />
        </a>
/*
        <a
          href="https://www.facebook.com/renato.marques.98478672/"
          target="_blank"
          rel="noreferrer"
          className="social-img"
          alt="Link para o facebook"
        >
          <FaFacebook />
        </a>*/
        <a
          href="https://www.linkedin.com/in/renato-marques-desenvolvedor-web-emformacao/"
          target="_blank"
          rel="noreferrer"
          className="social-img"
          alt="Link para o linkedin"
        >
          <ImLinkedin />
        </a>
        <LinkVoltar />
      </ContatoContainer>
    </>
  );
};

export default index;
