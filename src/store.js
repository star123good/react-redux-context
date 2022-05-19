import { configureStore } from "@reduxjs/toolkit";
import listReducer from './reducers/list';
import counterReducer from './slices/counter';

const store = configureStore({
    reducer: {
        list: listReducer,
        counter: counterReducer,
    }
});

export default store;