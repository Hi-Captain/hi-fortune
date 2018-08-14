import React from 'react';
import '../css/Input.css';

const Input = ({ value, typing, addItem }) => {

  const enterKey = (e) => {
    if(e.key === 'Enter'){
      addItem()
    }
  }
  return (
    <div className="input-wrap">
      <input className="input" type="text" onChange={typing} value={value} onKeyPress={enterKey}/>
      <button className="btn btn-add" onClick={addItem}>Add</button>
    </div>
  );
}

export default Input;
