import { configureStore } from "@reduxjs/toolkit";
import listReducer from './reducers/list';

const store = configureStore({
    reducer: {
        list: listReducer,
    }
});

export default store;