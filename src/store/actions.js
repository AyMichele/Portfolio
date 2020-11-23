import {GAMES_SELECT} from './actionTypes';
import {ALGORITHMS_SELECT} from './actionTypes';
import {OTHERS_SELECT} from './actionTypes';
import {START_SELECT} from './actionTypes';
import {TTT_SELECT} from './actionTypes';
import {SNAKE_SELECT} from './actionTypes';

const selectedGames = () => {
    return  {
        type: GAMES_SELECT,
    }
}

const selectedAlgorithms = () => {
    return  {
        type: ALGORITHMS_SELECT,
    }
}

const selectedOthers = () => {
    return  {
        type: OTHERS_SELECT,
    }
}

const selectedStart = () => {
    return  {
        type: START_SELECT,
    }
}

const selectedTTT = () => {
    return  {
        type: TTT_SELECT,
    }
}

const selectedSnake = () => {
    return  {
        type: SNAKE_SELECT,
    }
}



export {selectedGames};
export {selectedAlgorithms};
export {selectedOthers};
export {selectedStart};
export {selectedTTT};
export {selectedSnake};