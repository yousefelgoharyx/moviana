import React from 'react';
import './Taps.scss';

const Taps = () => {
    return (
        <div className="taps">
            <div className="tap-item">Hot</div>
            <div className="tap-item active">Most Watched</div>
            <div className="tap-item">Popular</div>
            <div className="tap-item">New</div>
            <div className="tap-item">Rates</div>
        </div>
    );
};

export default Taps;
