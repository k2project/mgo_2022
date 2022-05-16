import React from 'react';
import styled from 'styled-components';
import Columns from './Columns';
import Wrapper, {
    WrapperHorizontalPadding,
    WrapperHorizontalPaddingMobile,
    WrapperHorizontalPaddingTablet,
    WrapperStyle,
} from './Wrapper';
import MurrayImg from 'assets/murray.png';
import { AppColors } from 'config/colors';
import { baseScreenReaderOnly, largeParagraph, pBase } from 'styles';
import SectionTitle from './SectionTitle';
import { device } from 'config/devices';
import Logo from 'assets/logo_themed.png';

const CareerSection = styled.section`
    ${WrapperStyle} {
        padding: 0;
    }
`;
const MurrayImage = styled.img`
    height: 120%;
    top: -20%;
    position: absolute;
    left: 0rem;
    @media ${device.laptop} {
        width: 50rem;
        left: 4rem;
    }
    @media ${device.mobileL} {
        left: 0rem;
    }
    @media ${device.mobileS} {
    }
`;

const LogoImg = styled.img`
    display: none;
    @media ${device.tablet} {
        display: block;
        height: 60%;
        opacity: 0.05;
        right: 10%;
        bottom: 20%;
        position: absolute;
    }
    @media ${device.mobileL} {
        display: none;
    }
`;

const RightColumnWrapper = styled.div`
    background-color: ${AppColors.COLOR_WHITE_TRANSPARENT};
    margin: 5rem 0;
    padding: 4rem;
    min-height: 20rem;
    @media ${device.laptop} {
        width: auto;
        margin: 0;
        background-color: transparent;
        padding: 10rem ${WrapperHorizontalPadding};
        background-color: ${AppColors.THEME_TERTIARY};
        color: ${AppColors.COLOR_WHITE};
    }
    @media ${device.tablet} {
        padding: 10rem ${WrapperHorizontalPaddingTablet};
    }
    @media ${device.mobileL} {
        padding: 10rem ${WrapperHorizontalPaddingMobile};
    }
`;

const LeftColumn = styled.div`
    max-width: 100%;
`;
const RightColumn = styled.div``;

const LargeParagraph = styled.p`
    ${largeParagraph}
    @media ${device.laptop} {
        display: none;
    }
    @media ${device.tablet} {
        display: block;
    }
`;

const Paragraph = styled.p`
    ${pBase}
`;

const LargeParagraphExtract = styled.p`
    display: none;
    ${largeParagraph}
    background-color: ${AppColors.COLOR_WHITE_TRANSPARENT};
    padding: 4rem;
    width: 50%;
    left: 40%;
    top: 50%;
    transform: translateY(-30%);
    @media ${device.laptop} {
        display: block;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
export default function Career() {
    return (
        <CareerSection id='career'>
            <SectionTitle srOnly>More About Murray</SectionTitle>
            <Wrapper>
                <Columns>
                    <LeftColumn>
                        <LogoImg src={Logo} alt='' />
                        <MurrayImage src={MurrayImg} alt='' />
                        <LargeParagraphExtract>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolores maxime provident eum officiis iure,
                            molestias ut perspiciatis.
                        </LargeParagraphExtract>
                    </LeftColumn>
                    <RightColumn>
                        <RightColumnWrapper>
                            <LargeParagraph>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolores maxime provident eum
                                officiis iure, molestias ut perspiciatis.
                            </LargeParagraph>

                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem, ex nulla porro
                                tenetur repellendus, magni non rerum quidem quis
                                sit aperiam quos quod deserunt nam rem officiis
                                aut error velit!
                            </Paragraph>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae est dolore dicta
                                repellat ipsum! Nesciunt ab quaerat inventore
                                consequatur eligendi perspiciatis et, cupiditate
                                dolorum hic corrupti quos repudiandae tempore
                                impedit.
                            </Paragraph>
                        </RightColumnWrapper>
                    </RightColumn>
                </Columns>
            </Wrapper>
        </CareerSection>
    );
}
