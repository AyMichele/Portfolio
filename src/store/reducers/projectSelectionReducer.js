
import { TTT_SELECT } from '../actionTypes';
import { SHOW_SNAKE } from '../actionTypes';
import { SHOW_CALC } from '../actionTypes';
import { SHOW_PATH_FIND } from '../actionTypes';

const projectSelectionInitialState = {
    projectChoices: true,
    tttSelected: false,
    snakeActive: false,
    calcActive: false,
    pathFinderActive: false,
}


function projectSelectionReducer(state = projectSelectionInitialState, action) {
    switch (action.type) {
        case TTT_SELECT:
            return {
                ...state,
                projectChoices: !state.projectChoices,
                tttSelected: !state.tttSelected,
            }
        case SHOW_SNAKE:
            return {
                ...state,
                projectChoices: !state.projectChoices,
                snakeActive: !state.snakeActive,
            }
        case SHOW_CALC:
            return {
                ...state,
                projectChoices: !state.projectChoices,
                calcActive: !state.calcActive,
            }
        case SHOW_PATH_FIND:
            return {
                ...state,
                projectChoices: !state.projectChoices,
                pathFinderActive: !state.pathFinderActive,
            }
        default:
            return {
                ...state,
            }
    }
}


export { projectSelectionReducer };