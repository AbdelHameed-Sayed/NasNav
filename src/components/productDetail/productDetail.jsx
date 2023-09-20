import React, { PureComponent } from 'react';

import CustomizeProduct from '../customizeProduct/customizeProduct';
import Carousel from '../carousel/carousel';
import ThumbnailImages from '../thumbnailImages/ThumbnailImages';

import './productDetail.scss';

class ProductDetail extends PureComponent {
  render() {
    return (
      <>
        <div className="UpperProductContainer">
          <ThumbnailImages />
          <CustomizeProduct />
        </div>
        <div className="LowerProductContainer">
          <Carousel />
        </div>
      </>
    );
  }
}

export default ProductDetail;
