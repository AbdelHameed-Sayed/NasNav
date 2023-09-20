import React, { PureComponent } from 'react';

import Button from '../button/button';
import { Cam, Heart, Minus, Plus, Share, Stars } from '../../utils/svgs';

import Deg from '../../utils/images/deg.png';

import { connect } from 'react-redux';

import './customizeProduct.scss';

class CustomizeProduct extends PureComponent {
  render() {
    const actionBtnsArray = [
      {
        id: 1,
        title: (
          <div className="actionSvgContainer">
            <div className="actionSvg">
              <Heart />
            </div>
            <p className="actionTilte">add to wishlist</p>
          </div>
        ),
        type: 'custom',
      },

      {
        id: 2,
        title: (
          <div className="actionSvgContainer">
            <div className="actionSvg">
              <Cam />
            </div>
            <p className="actionTilte">video call</p>
          </div>
        ),
        type: 'custom',
      },
      {
        id: 3,
        title: (
          <div className="actionSvgContainer noMargin">
            <div className="actionSvg">
              <Share />
            </div>
            <p className="actionTilte">share</p>
          </div>
        ),
        type: 'custom',
      },
    ];

    const productData = this.props.singleProduct;
    return (
      <div className="customizeProductContainer">
        <div className="customizeProductTitleContainer">
          <div>
            <p className="header">{productData.title}</p>
            <Stars />
          </div>

          <div>
            <Button
              title={<img src={Deg} alt="360 Deg" className="degPng" />}
              type="bordered"
            />
          </div>
        </div>

        <p className="price">
          {productData.price}EGP
          <span className="oldPrice">{productData.oldPrice}EGP</span>
        </p>

        <p className="description">{productData.description}</p>

        <div>
          <p className="size">size</p>
          <div>
            {productData.sizes?.map(item => (
              <Button key={item.id} title={item.title} type={item.type} />
            ))}
          </div>
        </div>

        <div>
          <p className="color">color</p>
          <div className="colorBtnsContainer">
            {productData.colors?.map(item => (
              <Button key={item.id} title={item.title} type={item.type} />
            ))}
          </div>
        </div>

        <div className="buyContainer">
          <div className="incrementDecrementContainer">
            <Button title={<Minus />} type="custom" />
            <p>1</p>
            <Button title={<Plus />} type="custom" />
          </div>

          <Button title="BUY NOW" type="borderedFill" />
        </div>

        <div className="actionContainer">
          {actionBtnsArray.map(item => (
            <Button key={item.id} title={item.title} type={item.type} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleProduct: state.products.singleProduct,
});

export default connect(mapStateToProps)(CustomizeProduct);
