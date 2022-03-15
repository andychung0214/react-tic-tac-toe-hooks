import React, { useEffect } from 'react';
import useState from 'react-usestateref' 

import Square from "./Square";
import '../Game.css'


function Board() {
    const [squares, setSquares, squaresRef] = useState([]);
    const [xIsNext, setXIsNext, xIsNextRef] = useState(false);

    function renderSuare(i){
        return <Square onClick={() => handleClick(i)} value = {squares[i]}  />
    }

    function handleClick(i) {
        const squares = squaresRef.current.slice();
        squares[i] = xIsNextRef.current ? 'X': 'O';
        setSquares(squares);
        setXIsNext(!xIsNextRef.current);
    }

    useEffect(() => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }, [])
    

  return (
    <div>
        <div className='status'>Next player: {xIsNext ? "X": "O"};</div>
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