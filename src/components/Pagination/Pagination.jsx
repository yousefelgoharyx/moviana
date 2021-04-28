import React from 'react';
import './Pagination.scss';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Pagination = (props) => {
    return (
        <div className="pagination">
            <button
                className="btn"
                onClick={props.onPrev}
                disabled={props.disabledPrev}
            >
                <ChevronLeft />
                Previos
            </button>
            <button
                className="btn"
                onClick={props.onNext}
                disabled={props.disabledNext}
            >
                Next
                <ChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
