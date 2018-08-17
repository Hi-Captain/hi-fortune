import React, { Component } from 'react';
import Item from './Item';
import '../css/List.css';
import PropTypes from 'prop-types';

class List extends Component {
  
  static propTypes = {
    list : PropTypes.array,
    delItem : PropTypes.func,
    clearItem :PropTypes.func
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.list !== nextProps.list
  }

  render() {
    const { list, delItem, clearItem } = this.props
    const items = list.map((value, i) => {
      return <Item key={i} index={list.length - i} delItem={() => {delItem(i)}}>{value}</Item>
    })
    return (
      <div className="list-wrap">
        <div className="list">{items}</div>
        <button className="btn btn-clear" onClick={clearItem}>Clear</button>
      </div>
    );
  }
}

export default List;
