import React, { useState } from 'react';
import Taps from '../components/Taps/Taps';
import Card from '../components/Card/Card';
import CardsGrid from '../components/CardsGrid/CardsGrid';
import useFetch from '../hooks/useFetch';
import Pagination from '../components/Pagination/Pagination';
import ComingSoon from '../components/ComingSoon/ComingSoon';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Movies = () => {
    const [currentPageUrl, setcurrentPageUrl] = useState(
        '/anime?page[limit]=20&page[offset]=0'
    );
    let animeState = useFetch(currentPageUrl);
    let cards = arr.map((el) => <div className="paper" key={el}></div>);
    let pagination = null;
    if(!animeState.loading&&animeState.error){
        return <ComingSoon/>
    }
    if (!animeState.loading && !animeState.error) {
        cards = animeState.data.data.map((el) => (
            <Card key={el.id} data={el} />
        ));
    }
    if (animeState.data.links) {
        if (!animeState.data.links.prev) {
            pagination = (
                <Pagination
                    disabledPrev={true}
                    onNext={() => setcurrentPageUrl(animeState.data.links.next)}
                />
            );
        } else if (animeState.data.links.next === undefined) {
            pagination = (
                <Pagination
                    disabledNext={true}
                    onPrev={() => setcurrentPageUrl(animeState.data.links.prev)}
                />
            );
        } else {
            pagination = (
                <Pagination
                    onNext={() => setcurrentPageUrl(animeState.data.links.next)}
                    onPrev={() => setcurrentPageUrl(animeState.data.links.prev)}
                />
            );
        }
    }
    return (
        <div className="pieces gutter">
            <Taps />
            <CardsGrid dep={animeState.data}>{cards}</CardsGrid>
            {pagination}
        </div>
    );
};

export default Movies;
