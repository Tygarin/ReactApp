import { INCREMENT } from "./actionTypes";
import { DECREMENT } from "./actionTypes";

const increment = () => {
    return {
        type: INCREMENT,
    }
}

const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const actions = {
    increment,
    decrement
}