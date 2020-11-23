import React from 'react';



const Food = (foodCoordinates) => {
    const size = 10;
    const style = {
      width: size,
      height: size,
      background: "red",
      marginLeft: (foodCoordinates.value[0] * size),
      marginTop: (foodCoordinates.value[1] * size),
    }
    return (
        <div style = {style} className="position-absolute"></div>
    )
}

export default Food;