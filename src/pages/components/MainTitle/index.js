import { Container, Describe } from './styled'

export const MainTitle = (props) => {
    const { image, marginTop } = props;
    return (
    <Container className={`main-title ${marginTop}`} >
        <div className="profile-picture">
            <img src={image} alt="Foto Renato Marques" width="300px" />
        </div>
        <Describe>
            <h1>Desenvolvedor Web</h1>
            <h2>Renato Marques</h2>
            <h3> HTML | CSS | JavaScript | React | NodeJS | MySQL | MongoDB | Python </h3>
        </Describe>
    </Container>
)}