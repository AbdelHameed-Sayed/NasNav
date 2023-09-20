import React, { PureComponent } from 'react';

import Header from '../../components/header/header';
import BreadCrumb from '../../components/breadCrumb/breadCrumb';
import ProductDetail from '../../components/productDetail/productDetail';

class ProductDetails extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <BreadCrumb />
        <ProductDetail />
      </>
    );
  }
}

export default ProductDetails;
