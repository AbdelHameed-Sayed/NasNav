import React, { PureComponent } from 'react';

import withRouter from '../../components/HOC/withRouter/withRouter';
import { Logo } from '../../utils/svgs';

import productsData from '../../utils/services/api.json';

import { connect } from 'react-redux';
import { setAllProducts } from '../../store/slices/productsSlice';

import './landing.scss';

class Landing extends PureComponent {
  constructor() {
    super();
    this.state = {
      loadingProgress: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(setAllProducts(productsData));
    const interval = setInterval(() => {
      if (this.state.loadingProgress < 100) {
        this.setState(prevState => ({
          loadingProgress: prevState.loadingProgress + 10,
        }));
      } else {
        clearInterval(interval);

        setTimeout(() => {
          this.props.navigate('details');
        }, 500);
      }
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <Logo />
        <div className="loader-container">
          <div
            className="loader"
            style={{
              width: `${this.state.loadingProgress}%`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Landing));
