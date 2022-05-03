import React from 'react';
import styled from 'styled-components';
import Columns from './Columns';
import Wrapper from './Wrapper';
import MurrayImg from 'assets/murray.png';
import { AppColors } from 'config/colors';
import { baseScreenReaderOnly } from 'styles';
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
    font-size: 1.8rem;
    line-height: 1.6;
    margin-bottom: 3rem;
`;
const SubHeading = styled.h2`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 2rem 0 0.8rem;
`;
const Paragraph = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
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
                        <SectionTitle srOnly>Murray's Career</SectionTitle>
                        <LargeParagraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatibus mollitia cum cumque nam
                            aspernatur dolores sequi quis ex qui provident.
                        </LargeParagraph>
                        <SubHeading>Artistic director</SubHeading>
                        <Paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatibus mollitia cum cumque nam
                            aspernatur dolores sequi quis ex qui provident
                            fugit, maxime amet officia odit eum. Corrupti rerum
                            velit recusandae?
                        </Paragraph>
                        <SubHeading>Entreprenuer</SubHeading>
                        <Paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatibus mollitia cum cumque nam
                            aspernatur dolores sequi quis ex qui provident
                            fugit.
                        </Paragraph>
                        <SubHeading>Creative Consultancy</SubHeading>
                        <Paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatibus mollitia cum cumque nam
                            aspernatur dolores sequi quis ex qui provident
                            fugit, odit eum. Corrupti rerum velit recusandae?
                        </Paragraph>
                    </AboutContent>
                </Columns>
            </Wrapper>
        </section>
    );
}
