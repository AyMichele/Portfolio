import React, { useState } from "react";
import './calcStyle.css'

const calContainer = {
    width: "260px",
    height: "300px",
    padding: "20px",
    paddingBottom: "50px",
    paddingTop: "40px",
    marginTop: "100px",
    borderRadius: "1px",
    backgroundColor: "#9966ff",
}

const textAreaStyle = {
    resize: "none",
    height: "30px",
    width: "162px",
    border: "0.5px solid grey",
    borderRadius: "2px",
    padding: "4px",
    backgroundColor: "white",
    
}

const cStyle = {
    height: "30px",
    width: "30px"

}

const leaveButtonStyle = {
    height: "30px",
    width: "70px",
    fontSize: "12px",
    fontWeight: "bolder",
    border: "none",
    position: "absolute",
    marginTop: "106px",
    marginLeft: "175px"
}

const Calculator = (props) => {
    const [field, setField] = useState("");

    const typeIn = (value) => {
        let copy = " " + field.slice(0)
        copy = copy.trim("");
        if (copy.length < 16) {
            copy += value;
        }
        setField(copy)
    }

    const clear = () => {
        let copy = "";
        setField(copy)
    }

    const removeLast = () => {
        let copy = field;
        setField(copy.substring(0, copy.length - 1))
    }

    const perfromCalc = (arr) => {
        let i = 0;
        while (arr.includes("*") || arr.includes("/")) {
            if (arr[i] === "*") {
                arr[i] = arr[i - 1] * arr[i + 1];
                arr[i - 1] = "";
                arr[i + 1] = "";
            }
            if (arr[i] === "/") {
                arr[i] = arr[i - 1] / arr[i + 1];
                arr[i - 1] = "";
                arr[i + 1] = "";
            }
            arr = arr.filter(x => x !== "");
            i++;
            if (i > arr.length) {
                i = 0;
            }
        }

        while (arr.includes("+") || arr.includes("-")) {
            if (arr[i] === "+") {
                arr[i] = arr[i - 1] + arr[i + 1];
                arr[i - 1] = "";
                arr[i + 1] = "";
            }
            if (arr[i] === "-") {
                arr[i] = arr[i - 1] - arr[i + 1];
                arr[i - 1] = "";
                arr[i + 1] = "";
            }
            arr = arr.filter(x => x !== "");
            i++;
            if (i > arr.length) {
                i = 0;
            }
        }

        return arr.toString() === "NaN" ? "Error" : arr.toString();
    }


    const floatify = (arr) => {
        if (!arr.includes(".")) {
            return arr;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === ".") {
                arr[i] = parseFloat(arr[i - 1] + arr[i] + arr[i + 1]);
                arr[i - 1] = "";
                arr[i + 1] = "";
            }
        }
        return arr.filter(x => x !== "");
    }

    const castToArray = (string) => {
        let count = 0;
        let i = 0;
        let copy = string;
        let arr = [];
        if (copy.charAt(0) === "-") {
            arr.push(parseInt(copy.substring(0, 2)));
            arr.push(copy.charAt(2));
            copy = copy.replace(copy.substring(0, 3), '')
        }
        console.log()
        while (copy !== '') {
            if (isNaN(copy.charAt(i))) {
                arr.push(parseInt(copy.substring(0, count)));
                arr.push(copy.charAt(i))
                copy = copy.replace(copy.substring(0, count + 1), '')
                count = 0;
                i = 0;
            }
            if (count === copy.length) {
                arr.push(parseInt(copy.substring(0, count)));
                copy = copy.replace(copy.substring(0, count + 1), '')
            }
            if (!isNaN(copy.charAt(i))) {
                count++;
            }
            i++;
        }
        console.log(arr)
        return floatify(arr);
    }

    const returnResult = (string) => {
        let copy = string.trim(" ");
        let result = perfromCalc(castToArray(copy))
        if(result.length < 16){
            setField(result)
        }
        
    }

    return (
        <div>
            <div>
                <button style={leaveButtonStyle} className="calcButton" onClick={props.activateCalc}> back -></button>
            </div>
            <div className="calculator" style={calContainer}>
                <div className="row text" >
                    <button style={cStyle} id="clear" className="m-1 text-center " onClick={clear}>c</button>
                    <button style={cStyle} id="delete" className="m-1 text-center " onClick={removeLast}>&#171;</button>
                    <div style={textAreaStyle} className="m-1 text-right textField " >{field}</div>
                </div>
                <div className="row h-25">
                    <button className="col m-1 calcButton" onClick={() => typeIn(7)}>7</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(8)}>8</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(9)}>9</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn("-")}>-</button>
                </div>
                <div className="row h-25">
                    <button className="col m-1 calcButton" onClick={() => typeIn(4)}>4</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(5)}>5</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(6)}>6</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn("+")}>+</button>
                </div>
                <div className="row h-25">
                    <button className="col m-1 calcButton" onClick={() => typeIn(1)}>1</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(2)}>2</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(3)}>3</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn("*")}>*</button>
                </div>
                <div className="row h-25">
                    <button className="col m-1 calcButton" onClick={() => typeIn(0)}>0</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn(".")}>.</button>
                    <button className="col m-1 calcButton" id="equalSign" onClick={() => returnResult(field)}>=</button>
                    <button className="col m-1 calcButton" onClick={() => typeIn("/")}>/</button>
                </div>
            </div>
        </div>
    )
}



export default Calculator;