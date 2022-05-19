export const LIST_ACTIONS = {
    SET: 'LIST_ACTIONS_SET',
    CLEAR: 'LIST_ACTIONS_CLEAR',
};

export function setList(list) {
    return {
        type: LIST_ACTIONS.SET,
        payload: list,
    };
}

export function clearList() {
    return {
        type: LIST_ACTIONS.CLEAR,
    };
}