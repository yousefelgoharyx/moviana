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
        '/manga?page[limit]=20&page[offset]=0'
    );
    let mangaState = useFetch(currentPageUrl);
    let cards = arr.map((el) => <div className="paper" key={el}></div>);
    let pagination = null;
    if(!mangaState.loading&&mangaState.error){
        return <ComingSoon/>
    }
    if (!mangaState.loading && !mangaState.error) {
        cards = mangaState.data.data.map((el) => (
            <Card key={el.id} data={el} />
        ));
    }
    if (mangaState.data.links) {
        if (!mangaState.data.links.prev) {
            pagination = (
                <Pagination
                    disabledPrev={true}
                    onNext={() => setcurrentPageUrl(mangaState.data.links.next)}
                />
            );
        } else if (mangaState.data.links.next === undefined) {
            pagination = (
                <Pagination
                    disabledNext={true}
                    onPrev={() => setcurrentPageUrl(mangaState.data.links.prev)}
                />
            );
        } else {
            pagination = (
                <Pagination
                    onNext={() => setcurrentPageUrl(mangaState.data.links.next)}
                    onPrev={() => setcurrentPageUrl(mangaState.data.links.prev)}
                />
            );
        }
    }
    return (
        <div className="pieces gutter">
            <Taps />
            <CardsGrid dep={mangaState.data}>{cards}</CardsGrid>
            {pagination}
        </div>
    );
};

export default Movies;
