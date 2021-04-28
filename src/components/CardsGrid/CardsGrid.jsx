import React from 'react';
import './cardsgrid.scss';
const CardsGrid = (props) => {
    return (
        <div className="cards-grid">
            {props.children}
        </div>
    );
};

export default CardsGrid;
