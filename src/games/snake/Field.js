import React from 'react';
import Tile from './Tile';
import Food from './Food';

const style = {
  width: "660px",
  height: "461px",
  border: "1px solid grey",
  background: "black",
  marginTop: "-20px",
  zIndex: 3,
}

const Field = ({ gameField, food }) => (
  <div style={style}>
    {gameField.map((field, i) => (
      <Tile key={i} value={field} />
    ))}
    <Food value={food} />
  </div>
)

export default Field;