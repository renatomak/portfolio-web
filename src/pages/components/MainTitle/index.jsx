import React from 'react';
import PropTypes from 'prop-types';
import { Container, Describe } from './styled';

const MainTitle = ({ image, marginTop }) => (
  <Container className={`main-title ${marginTop}`}>
    <div className="profile-picture">
      <img src={image} alt="Foto Renato Marques" width="300px" />
    </div>
    <Describe>
      <h1 data-testid="title">Desenvolvedor Web</h1>
      <h2 data-testid="sub-title">Renato Marques</h2>
      <h3 data-testid="hard-skills">
        HTML | CSS | JavaScript | React | NodeJS | MySQL | MongoDB | Python
      </h3>
    </Describe>
  </Container>
);

export default MainTitle;

MainTitle.propTypes = {
  image: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
};
