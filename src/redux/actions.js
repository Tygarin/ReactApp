import { TAKEIMG_SUCCESS } from "./actionTypes";
import { CHANGE_SLIDER } from "./actionTypes";
import { SET_LENGTH } from "./actionTypes";

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
    takeImgSuccess,
    changeSlider,
    setLength
}