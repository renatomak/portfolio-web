import { Container, Describe } from './styled'

export const MainTitle = (props) => {
    const { image } = props;
    return (
    <Container>
        <div className="profile-pic">
            <img src={image} alt="Foto de Renato Marques" width="300px" />
        </div>
        <Describe>
            <h1>Desenvolvedor Web</h1>
            <h2>Renato Marques</h2>
            <h3> HTML | CSS | JavaScript | React | NodeJS | MySQL | MongoDB | Python </h3>
        </Describe>
    </Container>
)}