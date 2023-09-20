import React, { PureComponent } from 'react';

import Card from '../card/card';
import { Card3stars, Card4stars, Card5stars } from '../../utils/svgs';

import Product2 from '../../utils/images/product2.png';
import Product3 from '../../utils/images/product3.png';
import Product4 from '../../utils/images/product4.png';
import Product5 from '../../utils/images/product5.png';
import Product1 from '../../utils/images/product1-1.png';

import { connect } from 'react-redux';
import { setSingleProduct } from '../../store/slices/productsSlice';
import { setCartData } from '../../store/slices/cartSlice';

import './carousel.scss';

class Carousel extends PureComponent {
  render() {
    const rates = { Card3stars, Card4stars, Card5stars };
    const images = { Product2, Product3, Product4, Product5, Product1 };
    const cardData = this.props.data || [];
    return (
      <>
        <p className="title">you may also like</p>

        <div className="cardsContainer">
          {cardData.map(item => (
            <Card
              key={item.id}
              data={{
                image: images[item?.images[0]?.src],
                code: item.code,
                description: item.description,
                rate: React.createElement(rates[item.rate]),
                price: item.price,
                onClick: () => {
                  this.props.dispatch(setSingleProduct(item));
                },
                onAddToCartClick: () => {
                  this.props.dispatch(setCartData(item));
                },
              }}
            />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.products.allProducts,
});

export default connect(mapStateToProps)(Carousel);
