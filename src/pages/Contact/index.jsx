import React from 'react';
import PropTypes from 'prop-types';
import { GoMarkGithub } from 'react-icons/go';
import { ImLinkedin } from 'react-icons/im';
import Container from './styled';

const Contact = (props) => {
  const { size } = props;
  return (
    <>
      <Container className="main" style={{ fontSize: { size } }}>
        <h3>E-mail:</h3>
        <p data-testid="email">renato.mark.silva@gmail.com</p>

        <h3>Telefone:</h3>
        <p data-testid="phone">(062) 9 9464-4482</p>

        <h3 data-testid="social">Redes Sociais:</h3>
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
      </Container>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  size: PropTypes.number.isRequired,
};
