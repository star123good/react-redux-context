import { LIST_ACTIONS } from "../actions/list";

export const initialState = {
    value: '',
};

/**
 * Normal Reducer
 * It can be used in reducers of React-Redux,
 * Or reducers of Context.
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
        return {
            ...state,
            ...initialState,
        };
    }
    return state;
};

export default reducer;