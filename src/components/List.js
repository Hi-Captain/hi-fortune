import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render() {
    const { list } = this.props
    const items = list.map((value, i) => {
      return <Item key={i}>{value}</Item>
    })
    return (
      <div>
        {items}
      </div>
    );
  }
}

export default List;
