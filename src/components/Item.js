import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Item;
