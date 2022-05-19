import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

/**
 * Slice to make Reducer
 */
const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter: (state, action) => {
            state.value = action.payload;
        },
        clearCounter: (state) => {
            state.value = 0;
        },
    },
});

export default slice.reducer;
export const { setCounter, clearCounter } = slice.actions;