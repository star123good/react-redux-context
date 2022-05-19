import { LIST_ACTIONS } from "../actions/list";

const initState = {
    value: '',
};

const reducer = (state=initState, action) => {
    const { type, payload } = action;
    if (type === LIST_ACTIONS.SET) {
        return {
            ...state,
            value: payload,
        };
    }
    if (type === LIST_ACTIONS.CLEAR) {
        return initState;
    }
    return state;
};

export default reducer;