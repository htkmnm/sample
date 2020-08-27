import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET, TENPLUS } from '../actions/index';

const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    };
    const dawnClick = () => {
        setGlobalState({
            type: DECREMENT
        });
    };
    const crearClick = () => {
        setGlobalState({
            type: RESET
        });
    };
    const tenplusClick = () => {
        setGlobalState({
            type: TENPLUS
        });
    };
    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={dawnClick}>-1</button>
            <button onClick={crearClick}>reset</button>
            <button onClick={tenplusClick}>+10</button>
        </div>
    );
};

export default ComponentE;
