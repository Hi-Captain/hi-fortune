import React, { Component } from 'react';
import '../css/Item.css'
import PropTypes from 'prop-types';

class Item extends Component {

  static propTypes = {
    children: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func
  }

  render() {
    const { children, index, delItem } = this.props
    return (
      <div className="item">
        <span className="item__index">{index}.</span>
        <span className="item__value">{children}</span>
        <button className="btn-del" onClick={() => delItem()}>x</button>
      </div>
    );
  }
}



export default Item;
