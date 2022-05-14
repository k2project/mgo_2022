import React from 'react';
import styled from 'styled-components';
import Columns from './Columns';
import Wrapper from './Wrapper';
import MurrayImg from 'assets/murray.png';
import { AppColors } from 'config/colors';
import { pBase, largeParagraph } from 'styles';
import SectionTitle from './SectionTitle';

const Section = styled.section`
    background-color: ${AppColors.THEME_PRIMARY};
    padding: 16rem 0 11rem;
`;

const Div = styled.div``;

const LargeParagraph = styled.p`
    ${largeParagraph}
`;

const Paragraph = styled.p`
    ${pBase}
`;

const SubHeading = styled.h2`
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    padding-top: 2rem;
    padding-bottom: 1.4rem;
    text-transform: uppercase;
`;

const Span = styled.span`
    background: ${AppColors.COLOR_GOLD};
    padding: 5px 7px;
    margin: 0 2px;
`;

export default function About() {
    return (
        <Section id='about '>
            <Wrapper>
                <Columns>
                    <Div>
                        <SectionTitle>Murray's Career</SectionTitle>
                        <LargeParagraph>
                            Murray graduated from{' '}
                            <Span>London’s Bird College</Span> in 2001 and
                            immediately won a contract in London City Opera’s US
                            tour of The Merry Widow (New York, Los Angeles, San
                            Francisco and others). He performed in numerous
                            musicals subsequently, including Jesus Christ
                            Superstar (Vienna), Elisabeth (Vienna), Paris
                            Can-Can (Sydney, Melbourne, Auckland), Grease
                            (Zurich) and Saturday Night Fever (Vienna).
                        </LargeParagraph>
                        <SubHeading>Artistic director</SubHeading>
                        <Paragraph>
                            As Director and Choreographer, Murray’s extensive
                            credits include P&O Cruises, The Entertainment
                            Department, Musical Starnights (European tour),
                            Union Square Opening Ceremony (Aberdeen), 12 Tenors
                            (European tour), Moulin Rouge TV Promotion
                            (Germany). He has also directed and choreographed
                            for musical theatre stars Adam Garcia, Ruthie
                            Henshall, Kerry Ellis, Christina Bianco, Jon Lee and
                            many more for concert series Tonight from the West
                            End.
                        </Paragraph>
                        <SubHeading>Entreprenuer</SubHeading>
                        <Paragraph>
                            Murray is the founder and creative director of The
                            MGA Academy of Performing Arts (Edinburgh), Network
                            Artist Management (Formally MGA Management), Beyond
                            Broadway Productions and Fierce Theatre Schools.
                        </Paragraph>
                        <SubHeading>Creative Consultancy</SubHeading>
                        <Paragraph>
                            Murray has served as a freelance advisor for the Ins
                            titute of the Arts Barcelona, Cyprus Performing Arts
                            and The Entertainment Department. He is also an
                            international judge for DanceStar world dance
                            competitions, judging Qualifiers in South Africa and
                            World Final in Croatia.
                        </Paragraph>
                    </Div>
                    <div>logos</div>
                </Columns>
            </Wrapper>
        </Section>
    );
}
