import React, { Component } from 'react';
import Item from './Item';
import '../css/List.css'

class List extends Component {
  render() {
    const { list } = this.props
    const items = list.map((value, i) => {
      return <Item key={i}>{value}</Item>
    })
    return (
      <div className="list-wrap">
        {items}
      </div>
    );
  }
}

export default List;
