import React from 'react'
import '../App.css';

function Square(props) {
    return (
        <button className={"square " + props.shade}
            onClick={props.onClick}
            style={props.style}
            key={props.keyVal}
        >

        </button>
    )
}

export default Square
