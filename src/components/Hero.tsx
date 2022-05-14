import Header from 'components/Header';
import styled from 'styled-components';
import { AppColors } from 'config/colors';
import Map from 'assets/map2.png';
import Wrapper from './Wrapper';
import { device } from 'config/devices';

const sectionHeight = '60rem';
const HeroSection = styled.section`
    min-height: ${sectionHeight};
    background-color: ${AppColors.THEME_PRIMARY};
    overflow: hidden;
    @media ${device.tablet} {
        min-heigh: 40rem;
    }
`;

const MapImage = styled.img`
    height: 58rem;
    top: -2rem;
    opacity: 0.2;
    position: absolute;
    left: 30%;
    @media ${device.tablet} {
        height: 40rem;
    }
`;

const TagLine = styled.h2`
    font-size: 6rem;
    top: 12rem;
    color: ${AppColors.THEME_SECONDARY};
    @media ${device.tablet} {
        font-size: 4.9rem;
    }
    @media ${device.mobileL} {
        font-size: 4rem;
    }
`;

export default function Hero() {
    return (
        <HeroSection>
            <Header />
            <Wrapper>
                <MapImage src={Map} alt='' />
                <TagLine>
                    <span style={{ color: AppColors.COLOR_GOLD }}>
                        INTERNATIONAL{' '}
                    </span>
                    <br />
                    ARTISTIC <br /> DIRECTOR
                </TagLine>
            </Wrapper>
        </HeroSection>
    );
}
