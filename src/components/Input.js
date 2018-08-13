import React from 'react';

const Input = ({ value, typing, addItem }) => {

  const enterKey = (e) => {
    if(e.key === 'Enter'){
      addItem()
    }
  }
  return (
    <div className="input">
      <input type="text" onChange={typing} value={value} onKeyPress={enterKey}/>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default Input;
