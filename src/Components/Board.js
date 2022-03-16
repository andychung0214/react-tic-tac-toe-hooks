import React, { useEffect } from 'react';
import useState from 'react-usestateref' 

import Square from "./Square";
import '../Game.css'


function Board() {
    const [squares, setSquares, squaresRef] = useState([]);
    const [xIsNext, setXIsNext, xIsNextRef] = useState(false);
    const [desc, setDesc , descRef] = useState("");
    

    function renderSuare(i){
        return <Square onClick={() => handleClick(i)} value = {squares[i]}  />
    }

    function handleClick(i) {
        const squares = squaresRef.current.slice();
        
        squares[i] = xIsNextRef.current ? 'X': 'O';
        setSquares(squares);
        setXIsNext(!xIsNextRef.current);

        initRun();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
    }

    function initRun(){
        const winner = calculateWinner(squaresRef.current);
        let status;
        if (winner) {
          status = 'Winner:' + winner;
          setDesc(status);
        } else {
          let canvas = xIsNextRef.current ? 'X' : 'O';
          status = 'Next player: ' + canvas;
          setDesc(status);

        }
    }

    useEffect(() => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        initRun();
    }, [])

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    

  return (
    <div>
        <div className='status'>
            {descRef.current}
        </div>
        <div className='board-row'>
            {renderSuare(0)}
            {renderSuare(1)}
            {renderSuare(2)}
        </div>
        <div className='board-row'>
            {renderSuare(3)}
            {renderSuare(4)}
            {renderSuare(5)}
        </div>
        <div className='board-row'>
            {renderSuare(6)}
            {renderSuare(7)}
            {renderSuare(8)}
        </div>
    </div>
  )
}

export default Board