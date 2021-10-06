import React from 'react';
import Container from './styled';
import { languages, skills } from '../../../store';
import List from './List';

const HardSkills = () => (
  <Container>
    <List list={skills} title="Habilidades" />
    <List list={languages} title="Linguagens" />
  </Container>
);

export default HardSkills;
