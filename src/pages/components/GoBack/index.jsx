import React from 'react';
import { Link } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import Container from './styled';

function GoBack() {
  return (
    <Container>
      <Link to="/">
        <ImArrowLeft />
        {' '}
        Voltar ao início
      </Link>
    </Container>
  );
}

export default GoBack;
