import React from 'react';
import { Container, ProgrammingLanguages, Software } from './styled';
import { languages, abilities } from '../../../store';

const HardSkills = () => {
  return (
    <Container>
      <Software>
        <h2 className="title">Habilidades </h2>
        <hr />
        <article>
          <ul>
            {abilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </Software>

      <ProgrammingLanguages>
        <h2 className="title">Linguagens </h2>
        <hr />
        <article>
          <ul>
            {languages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </ProgrammingLanguages>
    </Container>
  );
};

export default HardSkills;
