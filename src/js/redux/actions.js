import { NEXT_IMG } from "./actionTypes";
import { PREV_IMG } from "./actionTypes";

const prev_img = () => {
    return {
        type: PREV_IMG,
    }
}

const next_img = () => {
    return {
        type: NEXT_IMG,
    }
}

export const actions = {
    prev_img,
    next_img
}