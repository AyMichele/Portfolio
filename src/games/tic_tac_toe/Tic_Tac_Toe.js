import React, {useState } from "react";
import Board from './Board';
import { setPlayer } from "./computer";
import { calculateWinner } from './helper'



/*--------------------------------------------------------
  -######################################################- 
  -                        STYLE                         - 
  -######################################################-  
  --------------------------------------------------------*/


const leaveButtonStyle = {
  height: "30px",
  width: "70px",
  fontSize: "12px",
  fontWeight: "bolder",
  border: "none",

}

const gameModeStyle = {
  borderRadius: "5px",
  background: "#00e600",
  color: "white",
  border: "none ",
  outline: "none ",
  boxShadow: "2px 2px 4px #404040 inset",
  padding: "2px",
}

const buttonStyle = {
  borderRadius: "5px",
  background: "#8c8c8c",
  color: "white",
  border: "none ",
  outline: "none ",
  padding: "2px",
  boxShadow: "-1px -1px 3px #404040",
}

const restartButtonStyleOff = {
  borderRadius: "5px",
  background: "#8c8c8c",
  color: "white",
  border: "none ",
  outline: "none ",
  boxShadow: "2px 2px 4px #404040 inset",
  padding: "2px",
}

const restartButtonStyleOn = {
  borderRadius: "5px",
  background: "#00e600",
  color: "white",
  border: "none ",
  outline: "none ",
  boxShadow: "-2px -2px 4px #404040",
  padding: "2px",
}


const xStyle = {
  borderRadius: "5px",
  background: "#8c8c8c",
  color: "red",
  border: "none ",
  outline: "none ",
  padding: "2px",
  width: "120px",
  height: "35px",
  margin: "10px",
  fontSize: "25x",
  fontWeight: "bold",
  boxShadow: "-2px -2px 5px #0d0d0d",
}

const oStyle = {
  borderRadius: "5px",
  background: "#8c8c8c",
  color: "green",
  border: "none ",
  outline: "none ",
  padding: "2px",
  width: "120px",
  height: "35px",
  margin: "10px",
  fontSize: "25x",
  fontWeight: "bold",
  boxShadow: "-2px -2px 5px #0d0d0d",
}


const xoContainer = {
  width: "400px",
  height: "275px",
  background: "#333333",
  marginTop: "150px",
  marginLeft: "50px",
  borderRadius: "10px",
  color: "#e6e6e6"
}

const invinsibleBorder = {
  width: "500px",
  height: "700px",
}

let restart = restartButtonStyleOff;

/*--------------------------------------------------------------------*/


const TicTacToe = (props) => {
  const [history, setHistory] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState((Math.random() > 0.5));
  const [count, setCount] = useState(0);
  const [twoPlayerMode, setTwoPlayerMode] = useState(true);
  const [vsComputerMode, setVSComputerMode] = useState(false);
  const [choosePlayer, setChoosePlayer] = useState(false);
  const [youAre, setYouAre] = useState("");
  const winner = calculateWinner(history, count);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    let squares = [...history]
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xO;
    setHistory(squares)
    setXIsNext(!xIsNext);
    setCount(count + 1)
  }

  if (youAre != "" && xO != youAre && !winner) {
    let squares = [...history];
    squares[setPlayer(squares)] = xO
    setHistory(squares)
    setXIsNext(!xIsNext);
    setCount(count + 1)
  }

  const restartGame = () => {
    setCount(0);
    setHistory(Array(9).fill(""))
    setXIsNext((Math.random() > 0.5));
    restart = restartButtonStyleOff;
  }

  const activateTwoPlayer = () => {
    setTwoPlayerMode(true);
    setChoosePlayer(false);
    setYouAre("")
    restartGame();
  }

  const activateVsComputer = () => {
    setTwoPlayerMode(false);
    setChoosePlayer(true)
    setVSComputerMode(true)
    restartGame();
  }

  const playerChosen = (e) => {
    setChoosePlayer(false);
    setXIsNext((Math.random() > 0.5));
    setYouAre(e.target.value);
  }

  let gameStand = null;
  if (winner === "TIE") {
    gameStand =
      <div>
        <h3 className="mt-3" >TIE</h3>
      </div>
    restart = restartButtonStyleOn;
  } else if (winner === "X" || winner === "O") {
    gameStand =
      <div>
        <h3 className="mt-3" > THE WINNER IS {winner}</h3>
      </div>
    restart = restartButtonStyleOn;
  }



  let choose = null;
  if (choosePlayer) {
    choose =
      <div style={invinsibleBorder} className="flex-colum text-center position-absolute justify-content-center">
        <div style={xoContainer} className="flex-colum text-center position-absolute justify-content-center">
          <button onClick={e => playerChosen(e)} value="X" className="p-2  mt-5" style={xStyle}>X</button>
          <button onClick={e => playerChosen(e)} value="O" className="p-2  mt-5 " style={oStyle}>O</button>
          <h3 className=" p-2 mt-5">CHOOSE YOUR PLAYER</h3>
        </div>
      </div>
  } if (!choosePlayer) {
    choose = <div></div>;
  }

  if (vsComputerMode) {
    var yourPlayer =
      <div>
        <h3 className="mt-3" >You are {youAre}</h3>
      </div>
  } if (twoPlayerMode) {
    yourPlayer = <div></div>;
  }



  return (
    <div className="text-center" >
      <div>
        <button style={leaveButtonStyle} className="float-right position-relative" onClick={props.selectedTTT}> back -></button>
      </div>
      {choose}
      <h1 className="mb-3" >Tic Tac Toe</h1>
      <Board squares={history} onClick={handleClick} />
      <div>
        <button style={twoPlayerMode ? gameModeStyle : buttonStyle} className="m-3 pl-1 pr-1" onClick={activateTwoPlayer}>2 PLAYER</button>
        <button style={twoPlayerMode ? buttonStyle : gameModeStyle} className="m-3 pl-1 pr-1" onClick={activateVsComputer}>VS COMPUTER</button>
        <button style={restart} className="m-3 pl-1 pr-1" onClick={restartGame}>RESTART</button>
      </div>
      <div>
        {gameStand}
      </div>
      <div>
        {yourPlayer}
      </div>
    </div>
  )
}


export default TicTacToe;