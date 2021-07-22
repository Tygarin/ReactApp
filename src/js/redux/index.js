import { actions } from "./actions"
import {
    INCREMENT,
    DECREMENT
} from "./actionTypes"
import { initialState } from "./initialState"
import { reducer } from "./reducers"

export const Redux = {
    actions,
    INCREMENT,
    DECREMENT,
    initialState,
    reducer
}

export default Redux;