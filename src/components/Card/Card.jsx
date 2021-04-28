import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { Star } from 'react-feather';
import convert from '../../utils/convertRate';
const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card__img">
                <img
                    src={data.attributes.posterImage.small}
                    alt={data.attributes.canonicalTitle}
                />
            </div>
            <div className="card__title">
                <div className="card__rate">
                    <Star />{' '}
                    {data.attributes.averageRating
                        ? convert(data.attributes.averageRating)
                        : 'Unknown'}
                </div>
                <Link
                    to={{
                        pathname: `/watch/${data.attributes.slug}`,
                        state: { id: data.id },
                    }}
                >
                    {data.attributes.canonicalTitle}
                </Link>
            </div>
        </div>
    );
};

export default Card;
