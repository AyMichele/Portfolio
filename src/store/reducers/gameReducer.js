
import {TTT_SELECT} from '../actionTypes';
import {SNAKE_SELECT} from '../actionTypes';

const gameSelectionInitialState = {
    showGameSelection: true,
    tttSelected: false,
    snakeSelected: false,
    battleshipsSelected: false,
}


function gameSelectionReducer  (state = gameSelectionInitialState, action) {
    switch (action.type) {
        case TTT_SELECT:
            return{
                ...state,
                showGameSelection: !state.showGameSelection,
                tttSelected: !state.tttSelected,
            }
        case SNAKE_SELECT:
            return{
                ...state,
                showGameSelection: !state.showGameSelection,
                snakeSelected: !state.snakeSelected,
            }                         
        default:
            return{
                ...state,
            }
    }
}


export  {gameSelectionReducer};