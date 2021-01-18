import { PROJECT_SELECT } from '../actionTypes';
import { ABOUT_ME_SELECT } from '../actionTypes';
import { CONTACT_SELECT } from '../actionTypes';

const selectionInitialState = {
    showAboutMeSection: true,
    showProjectSection: false,
    showContactSection: false
}


function selectionReducer(state = selectionInitialState, action) {
    switch (action.type) {
        case PROJECT_SELECT:
            return {
                ...state,
                showAboutMeSection: false,
                showProjectSection: true,
                showContactSection: false,
            }
        case ABOUT_ME_SELECT:
            return {
                ...state,
                showAboutMeSection: true,
                showProjectSection: false,
                showContactSection: false,
            }
        case CONTACT_SELECT:
            return {
                ...state,
                showContactSection: true,
                showProjectSection: false,
                showAboutMeSection: false,
            }
        default:
            return {
                ...state,
            }
    }
}





export { selectionReducer };