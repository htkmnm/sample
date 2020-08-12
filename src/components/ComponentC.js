import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import reducer from '../reducers/index';

const initialCount = {
    count: 0
};

const ComponentC = () => {
    const [state, dispatch] = useReducer(reducer, initialCount);

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        });
    };
    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        });
    };
    const reset = () => {
        dispatch({
            type: 'RESET'
        });
    };

    return (
        <div>
            <div>ComponentC</div>
            <Link to='/'>ComponentAへ移動</Link>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <h1>{state.count}</h1>
        </div>
    );
};

export default ComponentC;