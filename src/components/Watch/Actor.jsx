import React from 'react';
import './Actor.scss';

const Actor = () => {
    return (
        <div className="actor">
            <div className="actor__name">Daphne Blake</div>
            <div className="actor__img">
                <img
                    src="https://pic.egybest.net/i/YWxZRWNtam1wYkVjdmN2Y21ibW90d3hs.jpg"
                    alt="Blue Falcon"
                />
            </div>
        </div>
    );
};

export default Actor;
