import React from 'react';
import {connect} from 'react-redux';
import {selectedTTT} from '../store/actions';
import {selectedSnake} from '../store/actions';
import TicTacToe from '../games/tic_tac_toe/Tic_Tac_Toe';
import Snake from '../games/snake/Snake';


const selecetionStyle = {
  border: "2px solid black",
  height: "400px"
}

const selectionItemStyle = {
  height : "150px",
  border: "2px solid black",
  marginTop: "120px",
  marginLeft: "50px",
}

const leaveButtonStyle = {
  height: "30px",
  width: "70px",
  fontSize: "12px",
  fontWeight: "bolder",
  border: "none"
  
}

const itemHeaderStyle = {
  marginTop: "30%"
}



function SelectionOfGames(props) {
  if(props.showGameSelection){ 
    return(  
        // --------------- CONTAINER---------->
      <div className = "d-flex justify-content-center mt-5">
          
        <div style = {selecetionStyle} className="w-50 row ">
        <button style={leaveButtonStyle} className="float-right position-absolute" onClick={props.selectedGames}> back -></button>
            
          {/*--------------------------------------------------------
            -######################################################- 
            -                        TIC TAC TOE                   - 
            -######################################################-  
            --------------------------------------------------------*/}

          <div onClick={props.selectedTTT} style = {selectionItemStyle}  className = "col-3 text-center">
            <h4 style = {itemHeaderStyle} >TIC TAC TOE</h4>     
          </div>

          {/*--------------------------------------------------------
            -######################################################- 
            -                         TETRIS                       - 
            -######################################################-  
            --------------------------------------------------------*/}   

          <div  onClick={props.selectedSnake} style = {selectionItemStyle} className = " col-3 text-center">
            <h4 style = {itemHeaderStyle} >SNAKE</h4>   
          </div>

          {/*--------------------------------------------------------
            -######################################################- 
            -                      BATTLESHIPS                     - 
            -######################################################-  
          --------------------------------------------------------*/}   
          <div style = {selectionItemStyle} className = "col-3 text-center">
            <h4 style = {itemHeaderStyle} >BATTLESHIPS</h4>       
          </div>
            
        </div>
      </div>
    );
  }
  if(props.tttSelected){
    return(
      <div className = "d-flex justify-content-center mt-5">
        <TicTacToe selectedTTT = {props.selectedTTT} />
      </div>
    )
  }
  if(props.snakeSelected){
    return(
      <div className = "d-flex justify-content-center mt-5">
        <Snake selectedTTT = {props.selectedTTT} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    showGameSelection: state.game.showGameSelection,
    tttSelected: state.game.tttSelected,
    snakeSelected: state.game.snakeSelected,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      selectedTTT: () => dispatch(selectedTTT()),
      selectedSnake: () => dispatch(selectedSnake()),
    }
  }
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectionOfGames)
  



