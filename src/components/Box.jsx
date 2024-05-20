import React from 'react';
import '../styles/box.css';

const Box = ({row, col, value, boxNo, onBoxClick}) => {
  return (
    <button className={`square`}
      onClick={() => onBoxClick(boxNo)}
      >

      <p className="value">{value}</p>
    </button>
  )
}


export default Box;