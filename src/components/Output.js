import React from 'react';
import '../css/Output.css';
import PropTypes from 'prop-types';

const Output = ({picked, rollItem, pickItem, isRolling}) => {
  return (
    <div className="output-wrap">
      <div className="output"><span className={picked === '?' || isRolling ? "" : "pick"}>{picked}</span></div>
      {isRolling ? <button className="btn btn-stop" onClick={pickItem}>Stop</button> : <button className="btn btn-roll" onClick={rollItem}>Roll</button>}
    </div>
  );
}

Output.propTypes = {
  picked : PropTypes.string,
  rollItem : PropTypes.func,
  pickItem : PropTypes.func,
  isRolling : PropTypes.bool
}

export default Output;