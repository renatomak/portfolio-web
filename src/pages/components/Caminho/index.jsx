import React from "react";
import { Link } from "react-router-dom";
import { UlCaminho, Container } from "./styled";

function Caminho(props) {
  const { page } = props;
  return (
    <Container>
      <UlCaminho>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{">"}</li>
        <li>{page}</li>
      </UlCaminho>

      <h1>{page}</h1>
    </Container>
  );
}

export default Caminho;
