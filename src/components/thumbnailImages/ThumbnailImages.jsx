import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import Product2 from '../../utils/images/product2.png';
import Product3 from '../../utils/images/product3.png';
import Product4 from '../../utils/images/product4.png';
import Product5 from '../../utils/images/product5.png';
import Product1 from '../../utils/images/product1-1.png';
import Product12 from '../../utils/images/product1-2.png';
import Product13 from '../../utils/images/product1-3.png';
import Product14 from '../../utils/images/product1-4.png';
import Product15 from '../../utils/images/product1-5.png';

import './ThumbnailImages.scss';

class ThumbnailImages extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      bigImage: this.props.singleProduct.images[0],
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.singleProduct.images[0].src !==
      this.props.singleProduct.images[0].src
    ) {
      this.setState({
        bigImage: this.props.singleProduct.images[0],
      });
    }
  }

  render() {
    const images = {
      Product2,
      Product3,
      Product4,
      Product5,
      Product1,
      Product12,
      Product13,
      Product14,
      Product15,
    };

    const singleProduct = this.props.singleProduct;

    const SmallImage = ({ src, alt, noMargin, onClick }) => (
      <div
        className={`smallImageInnerContainer ${noMargin ? 'noMargin' : null}`}
        onClick={onClick}
      >
        <img className="smallImage" src={src} alt={alt} />
      </div>
    );

    const BigImage = () => (
      <div className="bigImageContainer">
        <img
          className="bigImage"
          src={images[this.state.bigImage.src]}
          alt={this.state.bigImage.alt}
        />
        <div className="discount">10% Off</div>
      </div>
    );
    return (
      <div className="thumbnailContainer">
        <div>
          {singleProduct.images?.map(item => (
            <SmallImage
              key={item.id}
              src={images[item.src]}
              alt={item.alt}
              noMargin={item.id === singleProduct.images?.length}
              onClick={() => {
                this.setState(() => ({
                  bigImage: item,
                }));
              }}
            />
          ))}
        </div>
        <BigImage />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleProduct: state.products.singleProduct,
});

export default connect(mapStateToProps)(ThumbnailImages);
