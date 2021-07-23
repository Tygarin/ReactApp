import { initialState } from "./initialState"
import { actions } from "./actions";

export const reducer = (state = initialState, action = actions) => {
    switch(action.type) {
        case 'NEXT_IMG':
            state.imgId > 1 ? state.imgId = 0 : state.imgId += 1
            return {
                ...state
            };
        case 'PREV_IMG':
            state.imgId < 1 ? state.imgId = 2 : state.imgId -= 1
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
        default:
            return state;
    }
}
