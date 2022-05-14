import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { largeParagraph } from 'styles';
import SectionTitle from './SectionTitle';
import { WrapperStyle } from './Wrapper';
import Globe from 'assets/globe.png';
import { testimonialsDesktop } from 'config/testimonialsData';
import Quote, { QuoteMargin } from './slides/Quote';
import Controllers from './slides/Controllers';

const WrapperContainer = styled(WrapperStyle)`
    padding-top: 14rem;
    padding-bottom: 14rem;
    font-weight: 300;
`;

const GlobeImage = styled.img`
    height: 100%;
    bottom: -10rem;
    opacity: 0.3;
    position: absolute;
    right: -15rem;
`;

const LargeParagraph = styled.p`
    ${largeParagraph}
    max-width:50rem;
    font-weight: 400;
`;

const Slider = styled.div`
    padding-top: 5rem;
`;
const Slide = styled.div`
    display: flex;
    margin-left: -${QuoteMargin};
`;

export default function Testimonials() {
    const SLIDE_DURATION = 8000;
    const [pauseSlide, setPauseSlide] = useState(false);
    const currentTestimonials = testimonialsDesktop;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(currentTestimonials[0]);

    const sliderRef = useRef<NodeJS.Timeout>();

    const startSlider = () =>
        setInterval(() => {
            setCurrentSlideIndex((prev) => {
                if (prev === currentTestimonials.length - 1) {
                    setCurrentSlide(currentTestimonials[0]);
                    return 0;
                }
                setCurrentSlide(currentTestimonials[prev + 1]);
                return prev + 1;
            });
        }, SLIDE_DURATION);

    useEffect(() => {
        sliderRef.current = startSlider();

        if (pauseSlide && sliderRef.current) {
            clearInterval(sliderRef.current);
        }

        return () => {
            if (sliderRef.current) {
                clearInterval(sliderRef.current);
            }
        };
    }, [pauseSlide]);

    const onMouseEnter = () => setPauseSlide(true);
    const onMouseLeave = () => setPauseSlide(false);
    const changeSlide = (index: number) => {
        if (sliderRef.current) {
            clearInterval(sliderRef.current);
        }
        setCurrentSlideIndex(index);
        setCurrentSlide(currentTestimonials[index]);
        sliderRef.current = startSlider();
    };

    return (
        <section id='endorsements'>
            <WrapperContainer height='50rem'>
                <GlobeImage src={Globe} alt='' />
                <SectionTitle>Industry Endorsements</SectionTitle>
                <LargeParagraph>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae alias dolorem sed provident minus distinctio.
                </LargeParagraph>
                <Slider>
                    <Slide
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {currentSlide.map((item, index, array) => (
                            <Quote key={item.author} {...item} index={index} />
                        ))}
                    </Slide>
                    <Controllers
                        currentSlideIndex={currentSlideIndex}
                        slidesLength={currentTestimonials.length}
                        changeSlide={changeSlide}
                    />
                </Slider>
            </WrapperContainer>
        </section>
    );
}
