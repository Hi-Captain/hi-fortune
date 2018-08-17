import React, { Component } from 'react';
import '../css/Output.css';
import PropTypes from 'prop-types';

class Output extends Component {
  static propTypes = {
    picked : PropTypes.string,
    rollItem : PropTypes.func,
    pickItem : PropTypes.func,
    isRolling : PropTypes.bool
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.picked === '?' && nextProps.picked === '?'? false : true)
  }
  
  render(){
    const {picked, rollItem, pickItem, isRolling} = this.props
    return (
      <div className="output-wrap">
        <div className="output"><span className={picked === '?' || isRolling ? "" : "pick"}>{picked}</span></div>
        {isRolling ? <button className="btn btn-stop" onClick={pickItem}>Stop</button> : <button className="btn btn-roll" onClick={rollItem}>Roll</button>}
      </div>
    );
  }
}

export default Output;