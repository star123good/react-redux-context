import { LIST_ACTIONS } from "../actions/list";

const initialState = {
    value: '',
};

/**
 * Normal Reducer
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const reducer = (state=initialState, action) => {
    const { type, payload } = action;
    if (type === LIST_ACTIONS.SET) {
        return {
            ...state,
            value: payload,
        };
    }
    if (type === LIST_ACTIONS.CLEAR) {
        return initialState;
    }
    return state;
};

export default reducer;