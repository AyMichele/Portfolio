import React from 'react';



const Tile = (snakeCoodinates) =>{
    const size = 10;
    const style = {
      width: size,
      height: size,
      background: "white",
      border: "0.1px solid grey",
      marginLeft: (snakeCoodinates.value[0] * size),
      marginTop: (snakeCoodinates.value[1] * size),
      zIndex: 1,
      
    }
  
    return(
        <div style = {style} className="position-absolute"></div>
    )
}

export default Tile;