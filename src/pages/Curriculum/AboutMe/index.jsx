import React from 'react';
import Contact from '../../Contact';

import { Article, Container } from './styled';

function AboutMe() {
  return (
    <Container>
      <div id="div-contact">
        <Contact size="1rem" />
      </div>
      <Article>
        <h2 className="title" data-testid="about-me">Sobre Mim</h2>
        <hr />
        <p data-testid="abstract">
          Com experiências anteriores, descobri que gosto de lidar com pessoas e
          ajudá-las a resolver problemas. Descobri na programação essa
          oportunidade e hoje, como Desenvolvedor Web, tenho o objetivo de
          produzir códigos cada vez melhores e com maior velocidade. Nos últimos
          meses executei projetos utilizando: HTML, CSS, JavaScript, React,
          NodeJS, MySQL, MongoDB, socketIO, Python, entre outras.
        </p>
      </Article>
    </Container>
  );
}

export default AboutMe;
