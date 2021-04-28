import React from 'react';
import View from '../components/View/View';
import Head from '../components/Watch/Head';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card/Card';
import CardsGrid from '../components/CardsGrid/CardsGrid';
import Slider from '../components/Slider/Slider';
import ComingSoon from '../components/ComingSoon/ComingSoon';

const Watch = () => {
    const params = useParams();
    const watchState = useFetch(`/anime?filter[slug]=${params.id}`);
    if(!watchState.loading && watchState.data.data.length === 0){
        return <ComingSoon/>
    }
    let page = <Spinner />;
    if (!watchState.loading && !watchState.error) {
        const attributes = watchState.data.data[0].attributes;
        page = (
            <div className="watch">
                <Head
                    header={
                        attributes.coverImage ? attributes.coverImage.small : ''
                    }
                    title={attributes.canonicalTitle}
                    rating={attributes.averageRating}
                />
                <div className="watch__page gutter">
                    {/* <View heading="Watch">
                        <video width="400" controls>
                            <source
                                src="https://www.w3schools.com/html/mov_bbb.mp4"
                                type="video/mp4"
                            />
                            <source
                                src="https://www.w3schools.com/html/mov_bbb.ogg"
                                type="video/ogg"
                            />
                            Your browser does not support HTML video.
                        </video>
                    </View> */}
                    <View heading="Story">
                        <p className="watch__story">{attributes.synopsis}</p>
                    </View>
                    <View heading="Seasons">
                        <Slider>
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                        </Slider>
                    </View>
                    <View heading="Episodes">
                        <CardsGrid>
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                            <Card data={watchState.data.data[0]} />
                        </CardsGrid>
                    </View>
                </div>
            </div>
        );
    }
    return page;
};

export default Watch;
