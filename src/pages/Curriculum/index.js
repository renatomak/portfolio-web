import React from 'react';
import GoBack from '../components/GoBack';


import {
  Container
} from './styled';
import { MainTitle } from '../components/MainTitle';
import AboutMe from './AboutMe';
import HardSkills from './HardSkills';
import Experience from './Experience';
import { experience, formation, education } from '../../store';

function Curriculum() {
  return (
    <Container className="main">
      <MainTitle image={'/images/renato02.jpg'} marginTop="curriculum" />
      <AboutMe />
      <HardSkills />
      
      <h2 className="title">Experiência de Trabalho</h2>
      <hr />
      {experience.map((item) => (
        <Experience content={item} />
      ))}

      <h2 className="title">Formação acadêmica</h2>
      <hr />
      {formation.map((item) => (
        <Experience content={item} />
      ))}

      <h2 className="title">Cursos</h2>
      <hr />
      {education.map((item) => (
        <Experience content={item} />
      ))}

      <GoBack />
    </Container>
  );
}

export default Curriculum;
