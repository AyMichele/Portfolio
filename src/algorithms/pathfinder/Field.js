import React from 'react';
import PathTile from './PathTile.js';

const style = {
    width: "650px",
    height: "450px",
    border: "1px solid grey",
    background: "black",
    marginTop: "-20px",
    zIndex: 3,
}

const Field = ({ searchField }) => {
    return (
        <div style={style}>
            {searchField.map((tile, i) => (
                <PathTile key={i} value={tile} />
            ))}
        </div>
    )
}


export default Field;