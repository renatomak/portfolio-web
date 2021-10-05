import { Link } from "react-router-dom";
import { Container } from "./styled";
import { ImArrowLeft } from 'react-icons/im'

function GoBack() {
  return (
    <Container>
      <Link to="/"><ImArrowLeft /> Voltar ao início</Link>
    </Container>
  );
}

export default GoBack;
