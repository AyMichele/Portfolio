import React from 'react';
import Tile from './Tile';
import Food from './Food';

const style = {
  width: "800px",
  height: "600px",
  border: "1px solid grey",
  background: "black"
}

const Field = ({gameField, food}) => (
    <div style={style}> 
      {gameField.map((field, i) => (
        <Tile key={i} value = {field} />
      ))}
      <Food value = {food}/>
    </div>
)

export default Field;