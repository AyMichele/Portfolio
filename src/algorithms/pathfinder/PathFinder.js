import React,{useState } from "react"
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



const PathFinder = (props) =>{
    return(
        <div>
            <h1 style={headerStyle}>Work in Progress</h1>
             <div>
                <button style={leaveButtonStyle} className="float-right" onClick={props.activatePathFinder}> back</button>
            </div>
            <div className="work"></div>
        </div>
    )
}


export default PathFinder;