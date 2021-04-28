import React from 'react';
import './Header.scss';
import { Star, Play, Plus } from 'react-feather';
const Header = (props) => {
    return (
        <div
            className="header"
            style={{ backgroundImage: `url("${props.bg}")` }}
        >
            <div className="header__overlay">
                <div className="header__title">{props.title}</div>
                <div className="header__mm">
                    <div className="header__match">{props.match}</div>
                    <div className="header__more">
                        {props.startDate} <Star />
                        {props.rating}
                    </div>
                </div>
                <div className="header__badges">
                    <div className="badge">{props.ageRating}</div>
                    <div className="badge">{props.ageRatingGuide}</div>
                </div>
                <p className="header__text">{props.story}</p>
                <div className="header__watch">
                    <button className="btn">
                        <Play /> Play
                    </button>
                    <button className="btn btn--transparent">
                        <Plus /> Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
