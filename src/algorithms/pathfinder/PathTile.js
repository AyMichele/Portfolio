import React from 'react';
import './pathFinderStyle.css'




const PathTile = ({ value, onClick }) => {
    let color = "";
    let filler = ""
    switch (value.name) {
        case "S":
            color = "M";
            filler = value.name;
            break;
        case "G":
            color = "C";
            filler = value.name;
            break;
        case "O":
            color = "O";
            break;
        case "P":
            color = "G";
            break;
        case "wayBack":
            color = "wayBack";
            filler = "";
            break;
        default:
            color = "W";
    }

    return (
        <div className={color} onClick={onClick}>{filler}</div>
    )
}


export default PathTile;