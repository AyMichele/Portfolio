import React from 'react';
import PathTile from './PathTile.js';

const style = {
    width: "680px",
    height: "460px",
    border: "1px solid grey",
    background: "white",
    zIndex: 3,
}

const Field = ({ searchField,  onClick }) => {
    let tiles = []
    for(let i = 0; i < 23; i++){
        for(let j = 0; j < 34; j++){
            tiles.push(<PathTile key={"x:" + j + ": y" + i}  value={searchField[i][j]} onClick={() => onClick(i, j)}/>)
        }  
    }
    return (
        <div style={style}>
            {tiles}
        </div>
    )
}


export default Field;
