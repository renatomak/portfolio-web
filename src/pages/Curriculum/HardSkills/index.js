import React from 'react';
import { Container, ProgrammingLanguages, Software } from './styled';
import { languages, abilities } from '../../../store';

const HardSkills = () => {
  return (
    <Container>
      <Software>
        <h2 className="title">Habilidades </h2>
        <hr />
        <ul>
          {abilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Software>

      <ProgrammingLanguages>
        <h2 className="title">Linguagens </h2>
        <hr />
        <ul>
          {languages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ProgrammingLanguages>
    </Container>
  );
};

export default HardSkills;
