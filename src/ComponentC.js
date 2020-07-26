import React from 'react';
import { Link } from 'react-router-dom';

const ComponentC = (props) => {
    const backpage = () => {
        props.history.push('/')
    };

    return (
        <>
            <div>ComponentC</div>
            <Link to='/componentb' >ComponentBへ移動</Link>
            <button onClick={backpage}>ホームへ戻る</button>
        </>
    );
};

export default ComponentC;