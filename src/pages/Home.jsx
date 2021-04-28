import React from 'react';
import Slider from '../components/Slider/Slider';
import View from '../components/View/View';
import Card from '../components/Card/Card';
// import Header from '../components/Header/Header';
import useFetch from '../hooks/useFetch';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let headerData = state.data[0].attributes;
// header = (
//     <Header
//         bg={headerData.coverImage.large}
//         title={headerData.canonicalTitle}
//         match={headerData.status}
//         startDate={headerData.startDate.slice(0, 4)}
//         rating={headerData.averageRating}
//         ageRating={headerData.ageRating}
//         ageRatingGuide={headerData.ageRatingGuide}
//         story={
//             headerData.description.split(' ').slice(0, 50).join(' ') +
//             '...'
//         }
//     />
// );
const Home = () => {
    let animeCards = arr.map((el) => <div className="paper" key={el}></div>);
    let mangaCards = arr.map((el) => <div className="paper" key={el}></div>);
    let animeState = useFetch('/trending/anime');
    let mangaState = useFetch('/trending/manga');
    // let header = <Header />;
    if (!animeState.loading && !animeState.error) {
        animeCards = animeState.data.data.map((el) => (
            <Card key={el.id} data={el} />
        ));
    }

    if (!mangaState.loading && !mangaState.error) {
        mangaCards = mangaState.data.data.map((el) => (
            <Card key={el.id} data={el} />
        ));
    }

    return (
        <>
            <div className="home gutter">
                <View heading="Trending Anime">
                    <Slider>{animeCards}</Slider>
                </View>
                <View heading="Trending Manga">
                    <Slider>{mangaCards}</Slider>
                </View>
            </div>
        </>
    );
};

export default Home;
