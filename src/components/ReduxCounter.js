import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCounter, clearCounter } from "../slices/counter";

export default function ReduxCounter() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSetClick = () => {
        dispatch(setCounter(parseFloat(value)));
        setValue('');
    };

    const handleClearClick = () => {
        dispatch(clearCounter());
    };

    return (
        <>
            <h3>Counter: {counter}</h3>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSetClick} >SET Counter</button>
            <button onClick={handleClearClick} >Clear Counter</button>
        </>
    );
}