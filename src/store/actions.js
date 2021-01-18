import {PROJECT_SELECT}from './actionTypes';
import {ABOUT_ME_SELECT} from './actionTypes';
import {TTT_SELECT} from './actionTypes';
import {CONTACT_SELECT} from './actionTypes';
import {SHOW_SNAKE} from './actionTypes';
import {SHOW_CALC} from './actionTypes';
import {SHOW_PATH_FIND} from './actionTypes';


const projectSelected = () => {
    return  {
        type: PROJECT_SELECT,
    }
}

const aboutMeSelected = () => {
    return  {
        type: ABOUT_ME_SELECT,
    }
}

const contactSelected = () => {
    return  {
        type: CONTACT_SELECT,
    }
}

const selectedTTT = () => {
    return  {
        type: TTT_SELECT,
    }
}

const activateSnake = () => {
    return  {
        type: SHOW_SNAKE,
    }
}

const activateCalc = () => {
    return  {
        type: SHOW_CALC,
    }
}

const activatePathFinder = () => {
    return  {
        type: SHOW_PATH_FIND,
    }
}




export {projectSelected};
export {aboutMeSelected};
export {contactSelected};
export {selectedTTT};
export {activateSnake};
export {activateCalc};
export {activatePathFinder};