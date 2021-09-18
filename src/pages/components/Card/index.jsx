import React from 'react';
// import { CardImg, ContainerCard } from './styled';
import './card.css';

function Card(props) {
  const { title, subtitle, imageFront, imageBack, moreInfo } = props.item;
  return (
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <img src={imageFront} id="front" alt="front page"/>
        </div>
        <a href={moreInfo} rel="noreferrer" target="_blank" >
          <div class="back">
            <img src={imageBack} id="back" alt="back page"/>
            <div className="text-houver">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <h3>Acesse aqui</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
