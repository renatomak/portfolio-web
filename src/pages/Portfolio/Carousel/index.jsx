import React from 'react';
import './materialize.css';
import { Carousel } from 'react-materialize';

const index = (props) => (
  <Carousel
    carouselId="Carousel-40"
    options={{
      dist: -100,
      duration: 200,
      fullWidth: false,
      indicators: false,
      noWrap: false,
      numVisible: 5,
      onCycleTo: null,
      padding: 0,
      shift: 0,
    }}
  >
    {props.projects.map(({
      id, imgPath, title, subtitle, moreInfo,
    }) => (
      <div className="flip-container" key={id}>
        <div className="flipper">
          <img src={imgPath} alt="imagem da aplicação" />
        </div>
        <div className="text-hover">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <a href={moreInfo} rel="noreferrer" target="_blank">
            <h3>Acesse aqui</h3>
          </a>
        </div>
      </div>
    ))}
  </Carousel>
);

export default index;
