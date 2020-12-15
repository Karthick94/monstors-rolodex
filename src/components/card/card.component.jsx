import React from 'react';

import './card.styles.css';

const Card = props => {
    return (
        <div className="card">
            <img
                src={`https://picsum.photos/id/${Math.floor(
                    Math.random() * Math.floor(999)
                )}/275/280`}
                alt="Image"
            />
            <h3>{props.monstor.name}</h3>
            <small>{props.monstor.email}</small>
        </div>
    );
};
export default Card;
