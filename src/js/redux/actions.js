import { NEXT_IMG } from "./actionTypes";
import { PREV_IMG } from "./actionTypes";
import { TAKEIMG_SUCCESS } from "./actionTypes";
import { CHANGE_SLIDER } from "./actionTypes";
import { SET_LENGTH } from "./actionTypes";

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

const takeImgSuccess = (json) => {
    return {
        type: TAKEIMG_SUCCESS,
        payload: json
    }
}

const setLength = (imgId) => {
    return {
        type: SET_LENGTH,
        payload: imgId
    }
}

const changeSlider = (source) => {
    return {
        type: CHANGE_SLIDER,
        payload: source
    }
}

export const actions = {
    prev_img,
    next_img,
    takeImgSuccess,
    changeSlider,
    setLength
}