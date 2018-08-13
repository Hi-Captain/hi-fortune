import React from 'react';

const Output = ({picked, pickItem}) => {
  return (
    <div>
      <button onClick={pickItem}>Go</button>
      <div>{picked}</div>
    </div>
  );
}

export default Output;