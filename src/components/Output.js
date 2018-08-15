import React from 'react';
import '../css/Output.css'

const Output = ({picked, rollItem, pickItem, isRolling}) => {
  return (
    <div className="output-wrap">
      <div className="output"><span>{picked}</span></div>
      {isRolling ? <button className="output__btn btn btn-stop" onClick={pickItem}>Stop</button> : <button className="output__btn btn btn-roll" onClick={rollItem}>Roll</button>}
    </div>
  );
}

export default Output;