import React, { useRef, useEffect } from 'react';
import './Slider.scss';
import { animated, useSpring } from 'react-spring';
import { ChevronLeft, ChevronRight } from 'react-feather';
function Slider(props) {
    const [style, set] = useSpring(() => ({
        transform: 'translate(0px, 0px)',
    }));
    const sliderWrapper = useRef();
    const scrollPosition = useRef(0);
    const step = useRef(0);

   

    useEffect(() => {
        const width = sliderWrapper.current.children[0].offsetWidth;
        step.current =
            width + parseInt(getComputedStyle(sliderWrapper.current).gap);
    }, []);

    const scrollNext = () => {
        const maxScroll =
            sliderWrapper.current.scrollWidth -
            sliderWrapper.current.offsetWidth;
        if (-(scrollPosition.current - step.current) >= maxScroll) {
            scrollPosition.current = -maxScroll;
        } else {
            scrollPosition.current -= step.current;
        }
        set({
            transform: `translate(${scrollPosition.current}px,0px)`,
        });
    };

    const scrollPrev = () => {
        if (scrollPosition.current + step.current >= 0) {
            scrollPosition.current = 0;
        } else {
            scrollPosition.current += step.current;
        }

        set({
            transform: `translate(${scrollPosition.current}px,0px)`,
        });
    };

    return (
        <div className="slider">
            <animated.div
                style={style}
                className="slider-wrapper"
                ref={sliderWrapper}
            >
                {props.children}
            </animated.div>
            <button className="slider-next-btn" onClick={scrollNext}>
                <ChevronRight />
            </button>
            <button className="slider-prev-btn" onClick={scrollPrev}>
                <ChevronLeft />
            </button>
        </div>
    );
}

export default Slider;
