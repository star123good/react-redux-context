import React, { createContext, useReducer } from "react";
import { clearList, setList } from "../actions/list";
import listReducer, { initialState } from "../reducers/list";

const ListContext = createContext();

export default ListContext;

export function ListProvider({ children }) {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const value = {
        value: state.value,
        setList: (list) => dispatch(setList(list)),
        clearList: () => dispatch(clearList()),
    };
    return (
        <ListContext.Provider value={value} >
            {children}
        </ListContext.Provider>
    )
}