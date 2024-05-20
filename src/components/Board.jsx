import React from 'react';
import Box from './Box.jsx';
import '../styles/board.css';
import { boardSize, getBoxNo } from '../Helpers';

const Players = {
  X: 'X',
  O: 'O',
};

const Board = ({
  calculateWinner,
  squares,
  setSquare,
  setPlayer,
  player,
}) => {

  const handleClick = (boxNo) => {
    if (squares[boxNo] == null && !calculateWinner()) {
      const nextSquares = squares.slice();
      nextSquares[boxNo] = player;
      setSquare(nextSquares);
      const nextPlayer = player === Players.X ? Players.O : Players.X;
      setPlayer(nextPlayer);
    }
  }

  return (
    <>
      {[...new Array(boardSize)].map((x, rowIndex) => {
          return (
            <div className="board-row" key={rowIndex}>
              {[...new Array(boardSize)].map((y, colIndex) =>
              <Box
                row={rowIndex}
                col={colIndex}
                value={squares[getBoxNo(rowIndex,colIndex)]}
                boxNo={getBoxNo(rowIndex, colIndex)}
                onBoxClick={handleClick}
              />)
              }
            </div>
          );
        })}
    </>
  );
}

export default Board;