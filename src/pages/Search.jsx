import React, { useEffect, useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import CardsGrid from '../components/CardsGrid/CardsGrid';
import Card from '../components/Card/Card';
import Axios from '../axios';
import View from '../components/View/View';

const Search = () => {
    const [searchQuery, setsearchQuery] = useState('');
    const [searchData, setsearchData] = useState([]);
    useEffect(() => {
        Axios.get(`/anime?filter[text]=${searchQuery}`).then((res) => {
            setsearchData(res.data.data);
        });
    }, [searchQuery]);
    return (
        <div className="search-page gutter">
            <div className="search-input">
                <input
                    type="search"
                    placeholder="Type..."
                    onChange={(e) => {
                        setsearchQuery(e.target.value);
                    }}
                />
            </div>

            {searchData.length > 0 ? (
                <View heading="Results">
                    <CardsGrid>
                        {searchData.map((el) => (
                            <Card data={el} key={el.id} />
                        ))}
                    </CardsGrid>
                </View>
            ) : (
                <div className="search">
                    <div className="search__type">
                        <SearchIcon />
                        <h1>Type something to search...</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
