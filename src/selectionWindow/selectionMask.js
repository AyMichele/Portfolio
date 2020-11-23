import React from 'react';
import {connect} from 'react-redux';
import {selectedGames} from '../store/actions';
import {startSelected} from '../store/actions';
import  SelectionOfGames  from './selectionOfGames';
import { StartSelection } from './startSelection';

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

const itemHeaderStyle = {
  marginTop: "30%"
}

function Selection(props) { 
  if(props.startSelected){
    return(
      <div>
        <StartSelection  selectedGames = {props.selectedGames} />
      </div>
    );
  }if(props.gameSelected){
    return(
      <div>
       <SelectionOfGames selectedGames = {props.selectedGames} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    gameSelected: state.start.gameSelected,
    algorithmSelected: state.start.algorithmSelected,
    otherSelected: state.start.otherSelected,
    startSelected: state.start.startSelected,
  }
}



  const mapDispatchToProps = dispatch => {
    return {
      selectedGames: () => dispatch(selectedGames()),
     }
  }
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Selection)
  

