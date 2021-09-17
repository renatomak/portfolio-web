import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";
import { ContatoContainer } from "./styled";

const Contact = (props) => {
  const { size } = props;
  return (
    <>
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
        <a
          href="https://www.linkedin.com/in/renato-marques-desenvolvedor-web-emformacao/"
          target="_blank"
          rel="noreferrer"
          className="social-img"
          alt="Link para o linkedin"
        >
          <ImLinkedin />
        </a>
      </ContatoContainer>
    </>
  );
};

export default Contact;
