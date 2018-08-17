import React, { Component } from 'react';
import '../css/Input.css';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    value : PropTypes.string,
    typing : PropTypes.func,
    addItem : PropTypes.func
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value
  }
  
  _enterKey = (e) => {
    if(e.key === 'Enter'){
      this.props.addItem()
    }
  }

  render(){
    const { value, typing, addItem } = this.props
    const { _enterKey } = this
    return (
      <div className="input-wrap">
        <input className="input" type="text" placeholder="입력하세요. ( 최대 12자 )" maxLength="12" onChange={typing} value={value} onKeyPress={_enterKey}/>
        <button className="btn btn-add" onClick={addItem}>Add</button>
      </div>
    );
  }
}

export default Input;
