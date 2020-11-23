import React from 'react';



const Tile = (snakeCoodinates) =>{
    const size = 10;
    const style = {
      width: size,
      height: size,
      background: "white",
      marginLeft: (snakeCoodinates.value[0] * size),
      marginTop: (snakeCoodinates.value[1] * size),
    }
  
    return(
        <div style = {style} className="position-absolute"></div>
    )
}

export default Tile;