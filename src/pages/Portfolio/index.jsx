import React from "react";
import LinkVoltar from "../components/LinkVoltar";
import {projects} from "../../store";
import Card from "../components/Card";
import { ContainerCards, PContainer } from "./styled";

function Portfolio() {
  return (
    <PContainer>
      <ContainerCards className="main">
        {projects.map((item) => (
          <Card item={item} />
        ))}
        <br />
      </ContainerCards>
      <LinkVoltar />
    </PContainer>
  );
}

export default Portfolio;
