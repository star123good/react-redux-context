import React, { useState, useContext } from "react";
import ListContext from "../contexts/list";

export default function ContextList() {
    const { value: list, setList, clearList } = useContext(ListContext);
    const [value, setValue] = useState('');

    const handleSetClick = () => {
        setList(value);
        setValue('');
    };

    const handleClearClick = () => {
        clearList();
    };

    return (
        <>
            <h3>List: {list}</h3>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleSetClick} >SET List</button>
            <button onClick={handleClearClick} >Clear List</button>
        </>
    );
}