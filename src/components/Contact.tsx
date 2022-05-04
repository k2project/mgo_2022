import { AppColors } from 'config/colors';
import styled, { css } from 'styled-components';
import Edinburgh from 'assets/edinburgh2.png';
import { WrapperStyle } from './Wrapper';
import LogoImg from 'assets/logo_gold.png';

const Section = styled.section`
    background-color: ${AppColors.THEME_TERTIARY};
    min-height: 60rem;
    background-image: url(${Edinburgh});
    background-position: 30% center;
    background-size: cover;
`;

const Cover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${AppColors.THEME_TERTIARY};
    opacity: 0.7;
`;

const Logo = styled.img`
    width: 7rem;
    margin: 0 auto 2rem;
    opacity: 0.7;
`;

const WrapperContainer = styled(WrapperStyle)`
    text-align: center;
    padding-top: 18rem;
    padding-bottom: 15rem;
    color: ${AppColors.COLOR_WHITE};
    font-weight: 300;
`;

const headingStyle = css`
    font-size: 1.6rem;
    margin: 5rem auto 2rem;
`;

const Heading = styled.h1`
    ${headingStyle}
`;
const Heading2 = styled.h2`
    ${headingStyle}
`;

const ParagrapgLarge = styled.p`
    font-size: 2.4rem;
`;
const Paragrapg = styled.p`
    font-size: 1.6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    margin-bottom: 1rem;
`;
const SpanLeft = styled.span`
    font-weight: 600;
    text-align: right;
`;
const SpanRight = styled.span`
    text-align: left;
`;

export default function Contact() {
    return (
        <Section id='contact'>
            <Cover />
            <WrapperContainer height='auto'>
                <Logo src={LogoImg} alt='' />
                <Heading>DIRECT INQUIRIES</Heading>
                <ParagrapgLarge>murray@murraygrantofficial.com</ParagrapgLarge>
                <Heading2>MEDIA INQUIRIES</Heading2>
                <Paragrapg>
                    <SpanLeft>Amy Anderson Brown</SpanLeft>
                    <SpanRight>amy@thisistailormade.com</SpanRight>
                </Paragrapg>
                <Paragrapg>
                    <SpanLeft>Alex Schweitzer-Thompsonn</SpanLeft>
                    <SpanRight>alex@thisistailormade.com</SpanRight>
                </Paragrapg>
            </WrapperContainer>
        </Section>
    );
}
