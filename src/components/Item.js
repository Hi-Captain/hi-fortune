import React from 'react';
import '../css/Item.css'
import PropTypes from 'prop-types';

const Item = ({ children, index, delItem }) => {
  return (
    <div className="item">
      <span className="item__index">{index}.</span>
      <span className="item__value">{children}</span>
      <button className="btn-del" onClick={() => delItem()}>x</button>
    </div>
  );
}

Item.propTypes = {
  children: PropTypes.string,
  index: PropTypes.number,
  delItem: PropTypes.func
}

export default Item;
