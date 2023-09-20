import React, { Component } from 'react';

import Button from '../button/button';
import Cart from '../cart/cart';
import { Bag, Hamburger, Logo, Profile, Search } from '../../utils/svgs';

import { connect } from 'react-redux';
import { setShowCart } from '../../store/slices/cartSlice';

import './header.scss';

class Header extends Component {
  render() {
    const pureButtonsData = [
      { id: 1, title: 'products', onClick: () => {} },
      { id: 2, title: 'best seller', onClick: () => {} },
      { id: 3, title: 'new arrival', onClick: () => {} },
      { id: 4, title: 'about us', onClick: () => {} },
      { id: 5, title: 'contact us', onClick: () => {} },
    ];
    const svgButtonsData = [
      { id: 1, title: <Search />, onClick: () => {} },
      {
        id: 2,
        title: (
          <div className="relative">
            <Bag />
            <span className="counter">{this.props.noOfItems}</span>
          </div>
        ),
        onClick: () => {
          this.props.dispatch(setShowCart(true));
        },
      },
      { id: 3, title: <Profile />, onClick: () => {} },
    ];

    return (
      <div className="outerHeaderContainer">
        <div className="headerContainer">
          <Hamburger className="hamburger" />
          <Logo className="logo" />

          {pureButtonsData.map(item => (
            <Button
              key={item.id}
              title={item.title}
              onClick={item.onClick}
              type="pure"
            />
          ))}

          <div className="svgButtonsContainer">
            {svgButtonsData.map(item => (
              <Button
                key={item.id}
                title={item.title}
                onClick={item.onClick}
                type="svg"
              />
            ))}
          </div>
        </div>
        {this.props.showCart && (
          <>
            <div className="backdrop" />
            <Cart />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showCart: state.cart.showCart,
  noOfItems: state.cart.cartData.noOfItems,
});

export default connect(mapStateToProps)(Header);
