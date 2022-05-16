import Header from 'components/Header';
import styled from 'styled-components';
import { AppColors } from 'config/colors';
import Map from 'assets/map2.png';
import Wrapper from './Wrapper';
import { device } from 'config/devices';

const HeroSection = styled.section`
    height: 65rem;
    background-color: ${AppColors.THEME_PRIMARY};
    overflow: hidden;
    @media ${device.laptop} {
        height: 60rem;
    }
    @media ${device.tablet} {
        height: 55rem;
    }
`;

const MapImage = styled.img`
    height: 60rem;
    top: -2rem;
    opacity: 0.2;
    position: absolute;
    left: 30%;
    @media ${device.tablet} {
        height: 50rem;
    }
`;

const TagLine = styled.h2`
    font-size: 6.5rem;
    width: 20rem;
    color: ${AppColors.THEME_SECONDARY};
    @media ${device.tablet} {
        font-size: 4.9rem;
    }
    @media ${device.mobileL} {
        font-size: 4rem;
    }
`;

const CurrentTitle = styled.p`
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    padding-left: 0.5rem;
    color: ${AppColors.THEME_SECONDARY};
`;

const TextConatiner = styled.div`
    padding-top: 10rem;
`;

export default function Hero() {
    return (
        <HeroSection>
            <Header />
            <Wrapper>
                <MapImage src={Map} alt='' />
                <TextConatiner>
                    <CurrentTitle>MSC Cruises</CurrentTitle>
                    <TagLine>
                        <span style={{ color: AppColors.COLOR_GOLD }}>
                            INTERNATIONAL{' '}
                        </span>
                        <br />
                        ARTISTIC <br /> DIRECTOR
                    </TagLine>
                </TextConatiner>
            </Wrapper>
        </HeroSection>
    );
}
