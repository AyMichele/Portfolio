import React, { useState } from "react"
import Field from './Field'
import './pathFinderStyle.css'


const leaveButtonStyle = {
    height: "30px",
    width: "70px",
    fontSize: "12px",
    fontWeight: "bolder",
    border: "none",
    zIndex: 6,
    marginTop: "-40px",
    marginRight: "0px",
    position: "relative",

}

const headerStyle = {
    position: "relative",
    marginLeft: "75px",
}



const PathFinder = (props) => {
    let field = []
    for (let i = 0; i < 23; i++) {
        field.push(new Array(34).fill(null).map(() => ({ "name": "", "predecessor": "", "fromStart": null })));
    }
    const [searchField, setSearchField] = useState(field);
    const [character, setCharacter] = useState("");
    const [mouseLoc, setMouseLoc] = useState([]);


    const trackBack = (cx, cy) => {
        let copy = [...searchField];
        let back = false;

        while (!back) {
            let x = copy[cx][cy].predecessor[0];
            let y = copy[cx][cy].predecessor[1];

            if (copy[x][y].name === "S") {
                back = true;
                break;
            }

            copy[x][y].name = "wayBack";
            cx = x;
            cy = y;
        }


        setSearchField(copy)
    }

    const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

    const searchGoal = () => {
        let controller = [[1, -1], [0, -1], [1, 1], [-1, -1], [1, 0], [-1, 0], [-1, 1], [0, 1],];


        let found = false;
        let queue = [];
        queue.push([...mouseLoc]);
        let cx = 0;
        let cy = 0;
        let arr = [...searchField];
        while (!found) {
            let lastPos = queue.shift();
            for (let con = 0; con < controller.length; con++) {

                let x = lastPos[0] + controller[con][0];
                let y = lastPos[1] + controller[con][1];

                if (x > 22 || x < 0 || y > 33 || y < 0) {
                    break;
                }

                if (arr[x][y].fromStart === null) {
                    arr[x][y].predecessor = [lastPos[0], lastPos[1]];
                    arr[x][y].fromStart = arr[lastPos[0]][lastPos[1]].fromStart + 1;
                    arr[x][y].name = "P";
                    queue.push([x, y])
                }

                if (arr[x][y].name === "G") {
                    arr[x][y].predecessor = [lastPos[0], lastPos[1]];
                    arr[x][y].fromStart = arr[lastPos[0]][lastPos[1]].fromStart + 1;
                    arr[x][y].name = "G";
                    cx = x;
                    cy = y;
                    found = true;
                }
                setSearchField(arr);
            }
            if (queue.length < 1) {
                break;
            }


        }


        if (found) {
            trackBack(cx, cy);
        }

    }



    const setStart = () => {
        let copyOfChar = character;
        copyOfChar = "S";
        setCharacter(copyOfChar);
    }



    const setGoal = () => {
        let copy = character;
        copy = "G";
        setCharacter(copy)
    }

    const setObstacle = () => {
        let copy = character;
        copy = "O";
        setCharacter(copy)
    }

    const handleClick = (i, j) => {
        let copy = [...searchField];
        let pos = { "name": character, "predecessor": "", "fromStart": "" };
        if (character === "S") {
            let copyOfMouseLoc = [...mouseLoc];
            copyOfMouseLoc[0] = i;
            copyOfMouseLoc[1] = j;
            setMouseLoc(copyOfMouseLoc)
            pos.fromStart = 0;
        }
        copy[i][j] = pos;
        setSearchField(copy)

    }

    return (
        <div>
            <div>
                <button style={leaveButtonStyle} className="float-right mt-1" onClick={props.activatePathFinder}> back</button>
            </div>
            <div className="mt-5">
                <Field searchField={searchField} onClick={handleClick} />
                <button onClick={setStart}>Start</button>
                <button onClick={setGoal}>Goal</button>
                <button onMouseDown={setObstacle}>Obstacle</button>
                <button onClick={searchGoal}>Search</button>
            </div>

        </div>
    )
}


export default PathFinder;