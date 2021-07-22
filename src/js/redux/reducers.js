import { initialState } from "./initialState"
import { actions } from "./actions";

export const reducer = (state = initialState, action = actions) => {
    switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1
          };
        case 'DECREMENT':
          return {
            count: state.count - 1
          };
        default:
          return state;
    }
}
