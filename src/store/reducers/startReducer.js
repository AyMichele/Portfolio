import {GAMES_SELECT} from '../actionTypes';
import {ALGORITHMS_SELECT} from '../actionTypes';
import {OTHERS_SELECT} from '../actionTypes';



const selectionInitialState = {
    startSelected: true,
    gameSelected: false,
    algorithmSelected: false,
    otherSelected: false,
}



function selectionReducer  (state = selectionInitialState, action) {
    switch (action.type) {
        case GAMES_SELECT:
            return{
                ...state,
                startSelected: !state.startSelected,
                gameSelected: !state.gameSelected,
            }
            
        case ALGORITHMS_SELECT:
            return{
                ...state,
                algorithmSelected: !state.algorithmSelected,
            }

        case OTHERS_SELECT:
            return{
                ...state,
                otherSelected: !state.otherSelected,
            }
                                
        default:
            return{
                ...state,
               
            }
    }
}





export  {selectionReducer};