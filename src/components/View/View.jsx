import React from 'react';
import './View.scss';
const View = (props) => {
    return (
        <div className="view">
            <div className="view__heading">{props.heading}</div>
            {props.children}
        </div>
    );
};
export default View;
