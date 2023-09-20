import React, { PureComponent } from 'react';

import Button from '../button/button';
import { Heart2 } from '../../utils/svgs';

import Deg from '../../utils/images/deg.png';

import './card.scss';

class Card extends PureComponent {
  render() {
    const { image, code, description, rate, price, onClick, onAddToCartClick } =
      this.props.data;

    return (
      <div className="cardContainer" onClick={onClick}>
        <img src={image} alt={code} className="cardImage" />
        <div className="outerDegContainer">
          <div className="innerDegContainer">
            <img src={Deg} alt="360 Deg" className="deg" />
          </div>
        </div>
        <div className="lowerCard">
          <p className="lowerCardCode">{code}</p>
          <p className="lowerCardDescription">{description}</p>
          {rate}
          <p className="lowerCardPrice">{price} EGP</p>
          <div className="lowerCardBtnsContainer">
            <Button
              title="ADD TO CART"
              type="borderedFill2"
              onClick={e => {
                e.stopPropagation();
                onAddToCartClick();
              }}
            />
            <div className="heartContainer">
              <Heart2 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
