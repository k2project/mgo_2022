import About from 'components/About';
import Career from 'components/Career';
import Contact from 'components/Contact';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Testimonials from 'components/Testimonials';
import { device } from 'config/devices';
import styled from 'styled-components';

const Container = styled.div`
    /* @media ${device.laptop} {
        border: solid 1px green;
    }
    @media ${device.tablet} {
        border: solid 1px orange;
    }
    @media ${device.mobileL} {
        border: solid 1px pink;
    } */
`;

export default function Home() {
    return (
        <Container>
            <Hero />
            <Career />
            <About />
            <Testimonials />
            <Contact />
        </Container>
    );
}
