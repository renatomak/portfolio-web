import React from "react";
import renatoProfile from '../../img/renato-profile.jpg';
import { Container, ProfileTitle } from './styled';

function Home() {
  return (
    <Container>
      <div className="profile-pic">
        <img src={ renatoProfile } alt="Foto de Renato Marques" />
      </div>

      <ProfileTitle >
        <h1>
          Renato <span><br />Marques da Silva</span>
        </h1>
        <h2>Desenvolvedor Web Front-end | HTML | CSS | React</h2>
      </ProfileTitle>
    </Container>
  );
}

export default Home;
