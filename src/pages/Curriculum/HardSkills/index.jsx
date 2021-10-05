import React from 'react';
import { Container, ProgrammingLanguages, Software } from './styled';
import { languages, abilities } from '../../../store';

const HardSkills = () => (
  <Container>
    <Software>
      <h2 className="title">Habilidades </h2>
      <hr />
      <article>
        <ul>
          {abilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </Software>

    <ProgrammingLanguages>
      <h2 className="title">Linguagens </h2>
      <hr />
      <article>
        <ul>
          {languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </ProgrammingLanguages>
  </Container>
);

export default HardSkills;
