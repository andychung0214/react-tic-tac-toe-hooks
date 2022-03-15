import React from 'react'
import Square from "./Square";
import '../Game.css'


function Board() {
    const status = 'Next player: X';

    function renderSuare(i){
        return <Square value = {i} />
    }

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