import React, { Component } from 'react';

import './breadCrumb.scss';

class BreadCrumb extends Component {
  render() {
    const routes = [
      { id: 1, title: 'Home', onClick: () => {} },
      { id: 2, title: 'All Rugs', onClick: () => {} },
      { id: 3, title: 'Kilim & Tulu', onClick: () => {} },
      { id: 4, title: 'Name Of Product', onClick: () => {} },
    ];
    return (
      <div className="breadcrumbContainer">
        <div className="marginStart">
          {routes.map(item => (
            <p className="breadcrumbItems" key={item.id} onClick={item.onClick}>
              {item.title} {item.id !== routes.length ? ' / ' : null}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default BreadCrumb;
