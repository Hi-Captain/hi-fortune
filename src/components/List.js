import React, { Component } from 'react';
import Item from './Item';
import '../css/List.css';
import PropTypes from 'prop-types';

class List extends Component {
  
  static propTypes = {
    list : PropTypes.array,
    delItem : PropTypes.func
  }

  render() {
    const { list, delItem } = this.props
    const items = list.map((value, i) => {
      return <Item key={i} index={i + 1} delItem={() => {delItem(i)}}>{value}</Item>
    })
    return (
      <div className="list-wrap">
        {items}
      </div>
    );
  }
}

export default List;
