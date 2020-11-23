import React from 'react';

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
  
  function StartSelection(props) {
    return(  
        // --------------- CONTAINER---------->
        <div className = "d-flex justify-content-center mt-5">
          <div style = {selecetionStyle} className="w-50 row ">
            
             {/*--------------------------------------------------------
             -######################################################- 
             -                 GAME SELECTION ITEM                  - 
             -######################################################-  
             --------------------------------------------------------*/}
  
            <div onClick={props.selectedGames} style = {selectionItemStyle} className = "col-3 text-center">
              <h4 style = {itemHeaderStyle} >GAMES</h4>     
            </div>
  
          {/*--------------------------------------------------------
             -######################################################- 
             -               ALGORITHMS SELECTION ITEM              - 
             -######################################################-  
             --------------------------------------------------------*/}   
  
            <div style = {selectionItemStyle} className = " col-3 text-center">
              <h4 style = {itemHeaderStyle} >ALGORITHMS</h4>   
            </div>
  
            {/*--------------------------------------------------------
             -######################################################- 
             -                OTHERS SELECTION ITEM                 - 
             -######################################################-  
             --------------------------------------------------------*/}   
            <div style = {selectionItemStyle} className = "col-3 text-center">
              <h4 style = {itemHeaderStyle} >OTHERS</h4>       
            </div>
            
          </div>
        </div>
      );
  }
  
  
  
  export {StartSelection};