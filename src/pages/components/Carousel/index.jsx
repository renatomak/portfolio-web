import React from 'react';
import './materialize.css';
import { Carousel } from 'react-materialize';

const index = (props) => {
  return (
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
      {props.projects.map((item) => (
        <div className="flip-container">
          <div className="flipper">
            <img src={item.imgPath} alt="imagem da aplicação" />
          </div>
          <div className="text-hover">
            <h1>{item.title}</h1>
            <h2>{item.subtitle}</h2>
            <a href={item.moreInfo} rel="noreferrer" target="_blank">
              <h3>Acesse aqui</h3>
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default index;
