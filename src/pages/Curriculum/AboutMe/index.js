import React from 'react';
import Contact from '../../Contact';


import {
  Container,
  Text
} from './styled';


function AboutMe() {
  return (
      <Container>
        <Contact size="1rem"/>
        <Text>
          <h2 className="title">Sobre Mim</h2>
          <hr />
          <p>
            Com experiências anteriores, descobri que gosto de lidar com pessoas
            e ajudá-las a resolver problemas. Descobri na programação essa
            oportunidade e hoje, como Desenvolvedor Web, tenho o objetivo de
            produzir códigos cada vez melhores e com maior velocidade. Nos
            últimos meses executei projetos utilizando: HTML, CSS, JavaScript,
            React, NodeJS, MySQL, MongoDB, socketIO, Python, entre outras.
          </p>
        </Text>
      </Container>
  );
}

export default AboutMe;
