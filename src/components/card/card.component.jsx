import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card">
        <img alt="monster" src={`https://picsum.photos/id/${props.monster.id + 1000}/200/300`} />
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
)