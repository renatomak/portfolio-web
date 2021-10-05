import React from 'react';
import LinkVoltar from '../components/LinkVoltar';
import { projects } from '../../store';
import Carousel from './Carousel';
import { Container } from './styled';

function Portfolio() {
  return (
    <Container>
      <Carousel projects={projects} />
      <LinkVoltar />
    </Container>
  );
}

export default Portfolio;
