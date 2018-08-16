import React from 'react';
import '../css/Input.css';
import PropTypes from 'prop-types';

const Input = ({ value, typing, addItem }) => {

  const enterKey = (e) => {
    if(e.key === 'Enter'){
      addItem()
    }
  }
  return (
    <div className="input-wrap">
      <input className="input" type="text" placeholder="입력하세요. ( 최대 13자 )" maxLength="13" onChange={typing} value={value} onKeyPress={enterKey}/>
      <button className="btn btn-add" onClick={addItem}>Add</button>
    </div>
  );
}

Input.propTypes = {
  value : PropTypes.string,
  typing : PropTypes.func,
  addItem : PropTypes.func
}

export default Input;
