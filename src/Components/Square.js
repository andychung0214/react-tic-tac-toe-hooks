import React, {useState} from 'react'
import '../Game.css'

function Square(props) {
    const [element, setElement] = useState("");
  return (
    <button className='square' onClick={() => props.onClick()}>
        {props.value}
    </button>
  )
}

export default Square