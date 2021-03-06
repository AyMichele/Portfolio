import React from 'react';
import { connect } from 'react-redux';
import { selectedTTT } from '../store/actions';
import { activateSnake } from '../store/actions';
import { activateCalc } from '../store/actions';
import { activatePathFinder } from '../store/actions';
import PathFinder from '../algorithms/pathfinder/PathFinder';
import TicTacToe from '../games/tic_tac_toe/Tic_Tac_Toe';
import Snake from '../games/snake/Snake';
import Calculator from '../other/calculator/Calculator';




const selecetionStyle = {
  height: "400px",
  marginTop: "200px"
}

const projectOne = {
  height: "175px",
  width: "200px",
  margin: "20px",
  outline: "none",
  justifyContent: "center",
  borderRadius: "5px",
  color: "#4dffa6",
  border: "2px solid #4dffa6",
  backgroundColor: "white"

}

const projectTwo = {
  height: "175px",
  width: "200px",
  margin: "20px",
  outline: "none",
  justifyContent: "center",
  borderRadius: "5px",
  color: "#66ccff",
  border: "2px solid #66ccff",
  backgroundColor: "white"

}

const projectThree = {
  height: "175px",
  width: "200px",
  margin: "20px",
  outline: "none",
  justifyContent: "center",
  borderRadius: "5px",
  color: "#ff3333",
  border: "2px solid #ff3333",
  backgroundColor: "white"
}


const projectFour = {
  height: "175px",
  width: "200px",
  margin: "20px",
  outline: "none",
  justifyContent: "center",
  borderRadius: "5px",
  color: "#6600ff",
  border: "2px solid #6600ff",
  backgroundColor: "white"
}


const itemHeaderStyle = {
  marginTop: "30%"
}

const projectWindow = {
  marginTop: "75px",
}



function ProjectSelection(props) {
  if (props.projectChoices) {
    return (
      // --------------- CONTAINER---------->
      <div className="d-flex justify-content-center ">

        <div style={selecetionStyle} className="w-50 row ">

          {/*--------------------------------------------------------
            -######################################################- 
            -                        TIC TAC TOE                   - 
            -######################################################-  
            --------------------------------------------------------*/}

          <button onClick={props.selectedTTT} style={projectOne}  >
            <h4 style={itemHeaderStyle} >TIC TAC TOE</h4>
          </button>

          {/*--------------------------------------------------------
            -######################################################- 
            -                         SNAKE                      - 
            -######################################################-  
            --------------------------------------------------------*/}

          <button onClick={props.activateSnake} style={projectTwo} >
            <h4 style={itemHeaderStyle} >SNAKE</h4>
          </button>


          {/*--------------------------------------------------------
            -######################################################- 
            -                      CALCULATOR                      - 
            -######################################################-  
            --------------------------------------------------------*/}

          <button onClick={props.activateCalc} style={projectThree} >
            <h4 style={itemHeaderStyle} >CALCULATOR</h4>
          </button>


          {/*--------------------------------------------------------
            -######################################################- 
            -                     PATH FINDER                      - 
            -######################################################-  
            --------------------------------------------------------*/}

          <button onClick={props.activatePathFinder} style={projectFour} >
            <h4 style={itemHeaderStyle} >PATH FINDER</h4>
          </button>

        </div>
      </div>
    );
  }

  if (props.tttSelected) {
    return (
      <div style={projectWindow} className="d-flex justify-content-center">
        <TicTacToe selectedTTT={props.selectedTTT} />
      </div>
    )
  }
  if (props.snakeActive) {
    return (
      <div style={projectWindow} className="d-flex justify-content-center">
        <Snake activateSnake={props.activateSnake} />
      </div>
    )
  }
  if (props.calcActive) {
    return (
      <div style={projectWindow} className="d-flex justify-content-center">
        <Calculator activateCalc={props.activateCalc} />
      </div>
    )
  }
  
  if (props.pathFinderActive) {
    return (
      <div style={projectWindow} className="d-flex justify-content-center">
        <PathFinder activatePathFinder={props.activatePathFinder} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projectChoices: state.project.projectChoices,
    tttSelected: state.project.tttSelected,
    snakeActive: state.project.snakeActive,
    calcActive: state.project.calcActive,
    pathFinderActive: state.project.pathFinderActive,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectedTTT: () => dispatch(selectedTTT()),
    activateSnake: () => dispatch(activateSnake()),
    activateCalc: () => dispatch(activateCalc()),
    activatePathFinder: () => dispatch(activatePathFinder()),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelection)





