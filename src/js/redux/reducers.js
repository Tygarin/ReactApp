import { initialState } from "./initialState"
import { actions } from "./actions";

export const reducer = (state = initialState, action = actions) => {
    switch(action.type) {
        case 'NEXT_IMG':
            state.imgId > 1 ? state.imgId = 0 : state.imgId += 1
            return {
                imgId: state.imgId,
                local: state.local
            };
        case 'PREV_IMG':
            state.imgId < 1 ? state.imgId = 2 : state.imgId -= 1
            return {
                imgId: state.imgId,
                local: state.local
            }
        default:
            return state;
    }
}
