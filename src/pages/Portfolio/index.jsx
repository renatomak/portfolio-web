import React from "react";
import LinkVoltar from "../components/LinkVoltar";
import {projects} from "../../store";
import Carousel from '../components/Carousel';
import { ContainerCards, PContainer } from "./styled";

function Portfolio() {
  return (
    <PContainer>
      <ContainerCards className="main carousel">
        <Carousel projects={projects}/>
        <br />
      </ContainerCards>
      <LinkVoltar />
    </PContainer>
  );
}

export default Portfolio;
