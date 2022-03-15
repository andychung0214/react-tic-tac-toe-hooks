import React, { useEffect } from 'react';
import useState from 'react-usestateref' 

import Square from "./Square";
import '../Game.css'


function Board() {
    const status = 'Next player: X';
    const [squares, setSquares, squaresRef] = useState([]);

    function renderSuare(i){
        return <Square onClick={() => handleClick(i)} value = {squares[i]}  />
    }

    function handleClick(i) {
        const squares = squaresRef.current.slice();
        squares[i] = 'X';
        setSquares(squares);
    }

    useEffect(() => {
        setSquares(Array(9).fill(null));
    
    }, [])
    

  return (
    <div>
        <div className='status'>{status}</div>
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