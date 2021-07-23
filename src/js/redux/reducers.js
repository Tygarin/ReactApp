import { initialState } from "./initialState"
import { actions } from "./actions";

export const reducer = (state = initialState, action = actions) => {
    switch(action.type) {
        case 'NEXT_IMG':
            return {
                ...state
            };
        case 'PREV_IMG':
            return {
                ...state
            }
        case 'TAKEIMG_SUCCESS':
            return {
                ...state,
                remote: action.payload
            }
        case 'CHANGE_SLIDER':
            return {
                ...state,
                source: action.payload
            }
        case 'SET_LENGTH':
            return {
                ...state,
                imgId: action.payload
            }
        default:
            return state;
    }
}
