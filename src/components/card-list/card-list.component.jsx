import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = props => {
    return (
        <div className="card-list">
            {props.monstors.map((monstor, i) => (
                <Card key={i} monstor={monstor} />
            ))}
        </div>
    );
};

export default CardList;
