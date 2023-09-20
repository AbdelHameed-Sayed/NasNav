import React, { PureComponent } from 'react';

import Button from '../button/button';
import { ClearCircle, Trash } from '../../utils/svgs';

import Product2 from '../../utils/images/product2.png';
import Product3 from '../../utils/images/product3.png';
import Product4 from '../../utils/images/product4.png';
import Product5 from '../../utils/images/product5.png';
import Product1 from '../../utils/images/product1-1.png';

import { connect } from 'react-redux';
import { removeCartData, setShowCart } from '../../store/slices/cartSlice';

import './cart.scss';

class Cart extends PureComponent {
  render() {
    const images = { Product2, Product3, Product4, Product5, Product1 };

    const cartData = this.props.cartData?.itemsData;
    const cartNoOfItems = this.props.cartData?.noOfItems;

    const CartProduct = ({ item, idx }) => {
      return (
        <div className="cartProductDetailsOuterContainer">
          <div className="cartProductDetails">
            <div className="cartProductDetailsInnerContainer">
              <img
                src={images[item?.images[0]?.src]}
                alt="Product2"
                className="cartImage"
              />
              <div>
                <p className="productTitle">{item?.title}</p>
                <div>
                  <p className="productSize">
                    size : {item?.sizes?.[1]?.title}
                  </p>
                  <p className="productColor">color : white</p>
                </div>
                <p className="cartProductPrice">{item?.price} EGP</p>
              </div>
            </div>
            <Trash
              className="trash"
              onClick={() => {
                this.props.dispatch(removeCartData(idx));
              }}
            />
          </div>
          <div className="cartDivider" />
        </div>
      );
    };

    return (
      <div className="cartContainer">
        <>
          <div className="upperArrow" />
          <div className="cartHeaderContainer">
            <p className="productNumberInsideCart">MY CART ({cartNoOfItems})</p>
            <ClearCircle
              className="clearCircle"
              onClick={() => {
                this.props.dispatch(setShowCart(false));
              }}
            />
          </div>
        </>
        {cartData?.map((item, idx) => (
          <CartProduct key={item.id + idx * 2} item={item} idx={idx} />
        ))}
        <div className="cartModalPriceContainer">
          <p className="cartSubtotalTitle">Sub Total</p>
          <p className="cartSubtotalPrice">
            {this.props.cartData.totalPrice} EGP
          </p>
        </div>
        <div className="cartButtonContainer">
          <Button title="GO TO CART" type="borderedFill3" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartData: state.cart.cartData,
});

export default connect(mapStateToProps)(Cart);
