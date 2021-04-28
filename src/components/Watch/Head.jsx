import React from 'react';
import { Star, Download, Plus } from 'react-feather';
import convert from '../../utils/convertRate';

const Head = (props) => {
    return (
        <div
            className="watch__header"
            style={{
                backgroundImage: `url('${props.header}')`,
            }}
        >
            <div className="watch__header-data">
                <div className="watch__header-info">
                    <div className="watch__header-rate">
                        <Star />
                        {props.rating ? convert(props.rating) : 'Unknown'}
                    </div>

                    <h1>{props.title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium quo enim odio similique ab, excepturi
                        voluptatum exercitationem unde quod temporibus sequi qui
                        non sit totam eveniet molestias ad rem! Eligendi?
                    </p>
                    <button className="btn">
                        <Download />
                        Donwload
                    </button>
                    <button className="btn btn--transparent">
                        <Plus />
                        Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Head;
