import React from 'react';
import styled from 'styled-components';
import Columns from './Columns';
import Wrapper from './Wrapper';
import MurrayImg from 'assets/murray.png';
import { AppColors } from 'config/colors';
import { baseScreenReaderOnly, largeParagraph, pBase } from 'styles';
import SectionTitle from './SectionTitle';

const Image = styled.img`
    height: 120%;
    top: -20%;
    position: absolute;
    left: 0%;
`;

const AboutContent = styled.div`
    background-color: ${AppColors.COLOR_WHITE_TRANSPARENT};
    margin: 5rem 0;
    padding: 4rem;
    min-height: 20rem;
`;

const LargeParagraph = styled.h1`
    ${largeParagraph}
`;
const SubHeading = styled.h2`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 2rem 0 0.8rem;
`;
const Paragraph = styled.p`
    ${pBase}
`;
export default function Career() {
    return (
        <section id='career'>
            <Wrapper>
                <Columns>
                    <div>
                        <Image src={MurrayImg} alt='' />
                    </div>
                    <AboutContent>
                        <SectionTitle srOnly>More About Murray</SectionTitle>
                        <LargeParagraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolores maxime provident eum officiis iure,
                            molestias ut perspiciatis.
                        </LargeParagraph>

                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem, ex nulla porro tenetur
                            repellendus, magni non rerum quidem quis sit aperiam
                            quos quod deserunt nam rem officiis aut error velit!
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae est dolore dicta repellat ipsum!
                            Nesciunt ab quaerat inventore consequatur eligendi
                            perspiciatis et, cupiditate dolorum hic corrupti
                            quos repudiandae tempore impedit.
                        </Paragraph>
                    </AboutContent>
                </Columns>
            </Wrapper>
        </section>
    );
}
