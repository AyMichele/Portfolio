import React, {useEffect, useRef, useState}  from "react";
import Field from './Field';





const Snake = (props) => {
    const [history, setHistory] = useState(Array(new Array(40, 30)));  
    const [foodCoos, setFoodCoos] = useState([Math.ceil(Math.random() * 41), Math.ceil(Math.random() * 31) ])
    let direction = "right";
    let speed = 300;
    let interval = undefined;

    const startGame  = () => {
        interval = setInterval(() => {
          moveSnake(direction)
        }, speed);
    }

    const stopGame  = () => {
      interval = clearInterval(interval);
    }
  
    const setFood = () => {
      let copy = [0, 0];
      copy[0] = Math.ceil(Math.random() * 31)
      copy[1] = Math.ceil(Math.random() * 41); 
      setFoodCoos(copy);
      console.log(copy)
    }



  const moveSnake = (direction) => {
    let copy = [...history];
    switch(direction){
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
        
    }
    detectCollisison(copy[0], foodCoos);
    setHistory(copy);
  }




    useEffect(() => {
      setInterval(interval)
      return () => clearInterval(interval);
    }, []);


    useEffect(() => {
      const handleDirection = (event) => {
        switch(event.keyCode){
          case 38:
              event.preventDefault();
              direction = "up"
            break;
          case 37:
              event.preventDefault();
              direction = "left"
            break;
          case 39:
              event.preventDefault();
              direction = "right"
            break;
          case 40:
              event.preventDefault();
              direction = "down"
            break;
        }
      };
      window.addEventListener('keydown', handleDirection);
      return () => {
        window.removeEventListener('keydown', handleDirection);
      };
  }, []);


    function detectCollisison(arrayOne, arrayTwo){
      if(arrayOne[0] == arrayTwo[0] && arrayOne[1] == arrayTwo[1]){
        console.log("hi")
        setFood();
      }
    }

    return (
        <div>
            <Field gameField = {history } food = {foodCoos} />
            <button onClick={startGame}>START</button>
            <button onClick={stopGame}>STOP</button>
        </div>
    )

    
}

export default Snake