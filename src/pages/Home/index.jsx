import React from "react";
import renatoProfile from '../../img/renato-profile2.jpg';
import HardSkill from "../components/HardSkill";
import { Container, ProfileTitle } from './styled';

function Home() {
  return (
    <Container>
      <div className="profile-pic">
        <img src={ renatoProfile } alt="Foto de Renato Marques" width="300px" />
      </div>

      <ProfileTitle >
        <h1>
          Renato Marques<br/><span>Desenvolvedor Web</span>
        </h1>
        <HardSkill />
      </ProfileTitle>
    </Container>
  );
}

export default Home;
