/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Field from './Field';
import useInterval from './interval';
import './snakeStyle.css'



/*--------------------------------------------------------
  -######################################################- 
  -                        STYLE                         - 
  -######################################################-  
  --------------------------------------------------------*/


const gameWindow = {
    marginTop: "100px",
}


const leaveButtonStyle = {
    height: "30px",
    width: "70px",
    fontSize: "12px",
    fontWeight: "bolder",
    border: "none",
    zIndex: 6,
    marginTop: "-50px"
}

const youDiedStyle = {
    fontSize: "75px",
    color: "#b30000",
    marginLeft: "160px",
    marginTop: "170px",
}



const buttonStyle = {
    zIndex: 4,
    borderRadius: "2px",
    background: "#8c8c8c",
    color: "white",
    border: "none ",
    outline: "none ",
    padding: "2px",
    boxShadow: "-1px -1px 3px #404040",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "15px",
    paddingLeft: "5px",
    paddingRight: "5px",
}



const pointsStyle = {
    zIndex: 5,
    position: "absolute",
    marginTop: "-45px",
}

/*--------------------------------------------------------------------*/

const Snake = (props) => {
    const [snakePos, setSnakePos] = useState([[32, 22]]);
    const [foodCoos, setFoodCoos] = useState([Math.ceil(Math.random() * 33), Math.ceil(Math.random() * 23)]) //[Math.ceil(Math.random() * 41), Math.ceil(Math.random() * 31) ]
    const [isRunning, setIsRunning] = useState(false);
    const [points, setPoints] = useState(0);
    const [speed, setSpeed] = useState(260);
    const [gameLost, setGameLost] = useState(false);
    const [direction, setDirection] = useState("")


    const gameLoop = () => {
        loseGame(gameLost)
        if (!gameLost) {
            moveSnake()
        }
    }

    const startGame = () => {
        setIsRunning(!isRunning)
    }

    const restartGame = () => {
        setIsRunning(false);
        setSpeed(280);
        setPoints(0);
        setSnakePos([[32, 22]]);
        setFoodCoos([Math.ceil(Math.random() * 33), Math.ceil(Math.random() * 23)]);
        setGameLost(false);
        setDirection("")
    }

    const loseGame = (gameLost) => {
        if (gameLost) {
            startGame();
        }
    }

    function eatFood(oldSnake, copy, arrayOne, arrayTwo) {
        if (arrayOne[0] === arrayTwo[0] && arrayOne[1] === arrayTwo[1]) {
            setGameParams();
            increaseSnake(oldSnake, copy);
        }
    }

    const selfCollision = (snake) => {
        for (let i = 1; i < snake.length; i++) {
            if (snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]) {
                setGameLost(true);
            }
        }
    }

    const outOfField = (arrayOne) => {
        if (arrayOne[0][0] >= 66 || arrayOne[0][0] < 0 || arrayOne[0][1] >= 46 || arrayOne[0][1] < 0) {
            setGameLost(true);
        }
    }

    const increaseSnake = (oldSnake, copy) => {
        copy.push(oldSnake);
        return copy;
    }

    const maintainSnakeOrder = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = [...arr[i - 1]];
        }
        return arr;
    }

    const setGameParams = () => {
        let copy = [0, 0];
        copy[0] = Math.ceil(Math.random() * 31)
        copy[1] = Math.ceil(Math.random() * 41);
        setFoodCoos(copy);
        setPoints(Math.ceil((points + 1.5) * 1.1 * 1.2))
        if (speed - ((points / 2) * 0.02) < 140) {
            setSpeed(140)
        } else {
            setSpeed(speed - ((points / 2) * 0.02))
        }
    }



    const moveSnake = () => {
        let copy = [...snakePos];
        eatFood(copy[copy.length - 1], copy, copy[0], foodCoos);
        copy = maintainSnakeOrder(copy)
        switch (direction) {
            case "right":
                copy[0][0] += 1;
                break;
            case "left":
                copy[0][0] -= 1;
                break;
            case "up":
                copy[0][1] -= 1;
                break;
            case "down":
                copy[0][1] += 1;
                break;
            default:
                copy[0][0] += 1;
        }
        setSnakePos(copy);
        outOfField(copy);
        selfCollision(copy);
    }

    useInterval(() => {
        gameLoop()
    }, isRunning ? speed : null);


    useEffect(() => {
        const handleDirection = (event) => {
            switch (event.keyCode) {
                case 38:
                    event.preventDefault();
                    setDirection("up")
                    break;
                case 37:
                    event.preventDefault();
                    setDirection("left")
                    break;
                case 39:
                    event.preventDefault();
                    setDirection("right")
                    break;
                case 40:
                    event.preventDefault();
                    setDirection("down")
                    break;
                default:
                    setDirection("right")
            }
        };
        window.addEventListener('keydown', handleDirection);
        return () => {
            window.removeEventListener('keydown', handleDirection);
        };
    }, []);


    let youDied = gameLost ? "YOU DIED" : null;
    let startNStop = isRunning ? "STOP" : "START";
    return (
        <div style={gameWindow}>
            <div>
                <button style={leaveButtonStyle} className="float-right position-relative" onClick={props.activateSnake}> back -></button>
            </div>
            <div>
                <h5 style={pointsStyle}>Points {points}</h5>
                <h5 style={pointsStyle}>Points {points}</h5>
            </div>
            <div className="overlayer"></div>
            <div style={youDiedStyle} className="position-absolute">{youDied}</div>
            <Field gameField={snakePos} food={foodCoos} />
            <button style={buttonStyle} onClick={startGame}>{startNStop}</button>
            <button style={buttonStyle} onClick={restartGame}>RESTART</button>
        </div>
    )

}
export default Snake