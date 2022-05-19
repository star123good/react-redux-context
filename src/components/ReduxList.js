import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setList, clearList } from "../actions/list";

export default function ReduxList() {
    const list = useSelector(state => state.list.value);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSetClick = () => {
        dispatch(setList(value));
    };

    const handleClearClick = () => {
        dispatch(clearList());
    };

    return (
        <>
            <h3>{list}</h3>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSetClick} >SET List</button>
            <button onClick={handleClearClick} >Clear List</button>
        </>
    );
}