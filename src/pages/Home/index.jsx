import React from "react";
import renatoProfile from '../../img/renato-profile2.jpg';
import { MainTitle } from "../components/MainTitle";
import { Container} from './styled';

function Home() {
  return (
    <Container>
      <div className="profile-pic">
        <img src={ renatoProfile } alt="Foto de Renato Marques" width="300px" />
      </div>

      <MainTitle />
    </Container>
  );
}

export default Home;
