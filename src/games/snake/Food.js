import React from 'react';



const Food = (foodCoordinates) => {
    const size = 10;
    const style = {
        width: size,
        height: size,
        background: "red",
        marginLeft: (foodCoordinates.value[0] * size),
        marginTop: (foodCoordinates.value[1] * size),
        zIndex: 0,
        borderRadius: "3.5px"
    }
    return (
        <div style = {style} className="position-absolute"></div>
    )
}

export default Food;