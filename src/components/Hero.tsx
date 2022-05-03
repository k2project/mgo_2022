import Header from 'components/Header';
import styled from 'styled-components';
import { AppColors } from 'config/colors';
import Map from 'assets/map2.png';
import Wrapper from './Wrapper';

const sectionHeight = '55rem';
const HeroSection = styled.section`
    min-height: ${sectionHeight};
    background-color: ${AppColors.THEME_PRIMARY};
    overflow: hidden;
`;

const MapImage = styled.img`
    height: 45rem;
    top: 0rem;
    opacity: 0.2;
    position: absolute;
    left: 30%;
`;

const TagLine = styled.h2`
    font-size: 6rem;
    top: 7rem;
    left: 8rem;
    color: ${AppColors.THEME_SECONDARY};
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
