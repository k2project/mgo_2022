import styled from 'styled-components';
import Logo from 'assets/logo_themed.png';
import Wrapper from './Wrapper';
import Nav from './Nav';
import { AppColors } from 'config/colors';

const Image = styled.img`
    width: 3rem;
`;

const HeaderStyle = styled.header`
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 1.6rem;
    padding-left: 1.6rem;
    color: ${AppColors.THEME_SECONDARY};
`;

export default function Header() {
    return (
        <Wrapper>
            <HeaderStyle>
                <Brand>
                    <Image src={Logo} alt='' />
                    <H1>MURRAY GRANT</H1>
                </Brand>
                <Nav />
            </HeaderStyle>
        </Wrapper>
    );
}
