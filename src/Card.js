import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.date}</td>
        </tr>
    );
};

export default Card;