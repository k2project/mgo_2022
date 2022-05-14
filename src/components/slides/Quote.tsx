import ExternalLink from 'components/links/ExternalLink';
import { AppColors } from 'config/colors';
import { ITestimonial } from 'config/testimonialsData';
import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface ISlideProps extends ITestimonial {
    index: number;
}

export const QuoteMargin = '1.5rem';

const slideAnimation = keyframes`
 0% { opacity:0; right:-10rem; }
 100% { opacity:1; right:0; }
`;

const Author = styled.h3`
    font-weight: 700;
`;
const Role = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
`;

const QuoteStyle = styled.div<{ featured: boolean; delay: number }>`
    background-color: ${({ featured }) =>
        featured ? AppColors.COLOR_GOLD : AppColors.THEME_PRIMARY};
    margin: 0 ${QuoteMargin};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    height: 30rem;
    font-size: 1.4rem;
    padding: 5rem 4.5rem 3rem;
    line-height: 1.6;
    animation-name: ${slideAnimation};
    animation-duration: ${(props) => 1.5 - props.delay * 0.3 || 1.5}s;
    animation-delay: ${(props) => props.delay * 0.3 || 0}s;
    animation-fill-mode: forwards;
    opacity: 0;
    box-shadow: -5px 15px 20px -5px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default function Quote({
    quote,
    featured,
    index,
    author,
    role,
    link,
}: ISlideProps) {
    return (
        <QuoteStyle featured={!!featured} delay={index}>
            <Text>
                <p>{quote}</p>
            </Text>
            <div>
                {link ? (
                    <ExternalLink to={link}>
                        <Author>{author}</Author>
                    </ExternalLink>
                ) : (
                    <Author>{author}</Author>
                )}
                <Role>{role}</Role>
            </div>
        </QuoteStyle>
    );
}
