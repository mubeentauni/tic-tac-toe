import React, { useState } from 'react';
import Board from './Board.jsx';
import '../styles/board.css';
import { boardSize, getPossibleWinningLines } from '../Helpers'

const Players = {
  X: 'X',
  O: 'O',
};

const RootContainer = () => {

  const [player, setPlayer] = useState(Players.X);
  const [squares, setSquare] = useState(Array(boardSize*boardSize).fill(null))


  const calculateWinner = () => {

    const winningPairs = getPossibleWinningLines();

    for (let box = 0; box < winningPairs.length; box++) {
      const boxes = [];
      
      for (let i = 0 ; i<boardSize ; i++ ) {
        boxes[i] = winningPairs[box][i];
      }
      // const [a, b, c] = winningPairs[box];
      const firstBox = squares[boxes[0]];
      if (firstBox){
        let istruthy = null;

        for(let b = 1 ; (b < boxes.length && (istruthy || istruthy === null)) ; b++){
          if (squares[boxes[b]] === firstBox) istruthy = true;
          else istruthy = false
        }

        if (istruthy) return firstBox;
      }
      // if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //   return squares[a];
      // }
    }
    return null;
  }

  const getStatus = () => {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (squares.indexOf(null) < 0) {
      status = 'Tie';
    }
    else {
      status = `Next player: ${player}` ;
    }
    return status;
  }

  return (
    <div class="board">
      <h1> Tic Tac Toe</h1>
        <Board 
          calculateWinner={calculateWinner}
          squares={squares}
          setSquare={setSquare}
          setPlayer={setPlayer}
          player={player}
        />
      <div className="status">
        {getStatus()}
      </div>
      <div>
        <button
          className="reset"
          onClick={() => setSquare(Array(boardSize*boardSize).fill(null))}
        >
          Reset board
        </button>
      </div>
    </div>
  )
};

export default RootContainer;