import React from 'react';
import "./Game.css";

import Board from "./Components/Board";

function Game() {
  return (
    <div className='game'>
        <div className='gmae-board'>
            <Board />
        </div>
        <div className='game-info'>
            <div></div>
            <ol></ol>
        </div>
    </div>

  )
}

export default Game