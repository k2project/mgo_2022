import { AppColors } from 'config/colors';
import React from 'react';
import styled from 'styled-components';

export interface IControllersProps {
    currentSlideIndex: number;
    slidesLength: number;
    changeSlide: (index: number) => void;
}
const itemSize = '1.4rem';
const ControllerStyle = styled.div`
    display: flex;
`;
const ControllerList = styled.ul``;
const ControllerListItem = styled.ul`
    display: inline-block;
`;
const ControllerButton = styled.button<{ active: boolean }>`
    border: none;
    display: inline-block;
    width: ${itemSize};
    height: ${itemSize};
    border-radius: 50%;
    padding: 0;
    background-color: ${(props) =>
        props.active ? AppColors.COLOR_GOLD : AppColors.THEME_TERTIARY};
    margin-right: 1rem;
    margin-top: 3rem;
    cursor: pointer;
`;

export default function Controllers({
    currentSlideIndex,
    slidesLength,
    changeSlide,
}: IControllersProps) {
    const list = Array.from(Array(slidesLength).keys());

    return (
        <ControllerStyle>
            <ControllerList>
                {list.map((li, index) => (
                    <ControllerListItem>
                        <ControllerButton
                            onClick={() => changeSlide(index)}
                            key={`controller-${index}`}
                            active={index === currentSlideIndex}
                        />
                    </ControllerListItem>
                ))}
            </ControllerList>
        </ControllerStyle>
    );
}
