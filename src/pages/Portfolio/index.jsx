import React from "react";
import Caminho from "../components/Caminho";
import LinkVoltar from "../components/LinkVoltar";
import data from "./data";
import Card from "../components/Card";
import { ContainerCards, PContainer } from "./styled";

function Portfolio() {
  return (
    <PContainer>
      <Caminho page="Portfolio" />
      <ContainerCards className="main">
        {data.map((item) => (
          <Card item={item} />
        ))}
        <br />
      </ContainerCards>
      <LinkVoltar />
    </PContainer>
  );
}

export default Portfolio;
