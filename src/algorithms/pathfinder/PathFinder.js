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


const buttonStyle = {
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

const buttonStyleCurrent = {
    borderRadius: "2px",
    background: "#8c8c8c",
    color: "lime",
    border: "none ",
    outline: "none ",
    padding: "2px",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "15px",
    paddingLeft: "5px",
    paddingRight: "5px",
}


const PathFinder = (props) => {
    let field = []
    for (let i = 0; i < 23; i++) {
        field.push(new Array(34).fill(null).map(() => ({ "name": "", "predecessor": "", "fromStart": null })));
    }
    const [searchField, setSearchField] = useState(field);
    const [character, setCharacter] = useState("");
    const [mouseLoc, setMouseLoc] = useState([]);
    const [thisButton, setThisButton] = useState(0);

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


    const searchGoal = () => {
        // Datenstruktur um alle umliegenden Punkte eines Punktes zu finden
        let controller = [[1, 1], [-1, -1], [1, 0], [-1, 0], [-1, 1], [0, 1], [1, -1], [0, -1]];
        let found = false;
        //Eine Schlage der bekannten Punkte
        let queue = [];
        // Fügt den Start als ersten bekannten Punkt ein
        queue.push([...mouseLoc]);
        let cx = 0;
        let cy = 0;
        let arr = [...searchField];


        while (!found) {
            // Der als letztes hinzugefügte Punkt in der Schlange
            let lastPos = queue.shift();
            //Sucht alle Punkte um diesen Punkt ab
            for (let con = 0; con < controller.length; con++) {

                let x = lastPos[0] + controller[con][0];
                let y = lastPos[1] + controller[con][1];
                // Wenn der Punkt außerhalb des Suchfeldes liegt verlass die Schleife
                if (x > 22 || x < 0 || y > 33 || y < 0) {
                    continue;
                }
                // Wenn der Punkt unbesucht ist
                if (arr[x][y].fromStart === null) {
                    //Speicher deinen Vorgänger 
                    arr[x][y].predecessor = [lastPos[0], lastPos[1]];
                    //Speicher entfernung vom Start
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
        setThisButton(5)
    }



    const setStart = () => {
        let copyOfChar = character;
        copyOfChar = "S";
        setCharacter(copyOfChar);
        setThisButton(1);
    }



    const setGoal = () => {
        let copy = character;
        copy = "G";
        setCharacter(copy)
        setThisButton(2);
    }

    const setObstacle = () => {
        let copy = character;
        copy = "OB";
        setCharacter(copy)
        setThisButton(3);
    }

    const restart = () => {
        let copy = searchField;
        for (let i = 0; i < copy.length; i++) {
            for (let j = 0; j < copy[i].length; j++) {
                copy[i][j].name = "";
                copy[i][j].predecessor = "";
                copy[i][j].fromStart = null;
            }
        }
        setCharacter(copy)
        setThisButton(5);
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
                <button style={thisButton === 1 ? buttonStyleCurrent : buttonStyle} onClick={setStart}>Start</button>
                <button style={thisButton === 2 ? buttonStyleCurrent : buttonStyle} onClick={setGoal}>Goal</button>
                <button style={thisButton === 3 ? buttonStyleCurrent : buttonStyle} onClick={setObstacle}>Obstacle</button>
                <button style={thisButton === 4 ? buttonStyleCurrent : buttonStyle} onClick={searchGoal}>Search</button>
                <button className="float-right" style={thisButton === 5 ? buttonStyleCurrent : buttonStyle} onClick={restart}>Restart</button>

            </div>

        </div>
    )
}


export default PathFinder;