import React from 'react';
import { Container, ProgrammingLanguages, Software } from './styled';

const HardSkills = () => {
  return (
    <Container>
      <Software>
        <h2 className="title">Habilidades </h2>
        <hr />
        <ul>
          <li>Excel</li>
          <li>Word</li>
          <li>PowerPoint</li>
          <li>Workbench</li>
          <li>Gimp</li>
          <li>Linux</li>
          <li>Git</li>
          <li>Trello</li>
          <li>pgAdmin4</li>
        </ul>
      </Software>

      <ProgrammingLanguages>
        <h2 className="title">Linguagens </h2>
        <hr />
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>PostgreSQL</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </ProgrammingLanguages>
    </Container>
  );
};

export default HardSkills;
