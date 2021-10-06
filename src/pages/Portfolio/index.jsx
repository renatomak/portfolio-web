import React from 'react';
import GoBack from '../components/GoBack';
import { projects } from '../../store';
import Carousel from './Carousel';
import Container from './styled';

function Portfolio() {
  return (
    <Container>
      <h1 className="title">Projetos</h1>
      <Carousel projects={projects} />
      <GoBack />
    </Container>
  );
}

export default Portfolio;
