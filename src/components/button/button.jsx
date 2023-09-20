import React, { PureComponent } from 'react';

import './button.scss';

class Button extends PureComponent {
  render() {
    return (
      <button className={this.props.type} {...this.props}>
        {this.props.title.toString().includes('<') ? (
          <div dangerouslySetInnerHTML={{ __html: this.props.title }}></div>
        ) : (
          this.props.title
        )}
      </button>
    );
  }
}

export default Button;
