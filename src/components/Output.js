import React from 'react';
import '../css/Output.css'

const Output = ({picked, pickItem}) => {
  return (
    <div className="output-wrap">
      <button className="btn btn-go" onClick={pickItem}>Go</button>
      <div>{picked}</div>
    </div>
  );
}

export default Output;