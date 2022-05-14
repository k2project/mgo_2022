import { AppColors } from 'config/colors';
import { device } from 'config/devices';
import { Paths } from 'config/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LinkStyled from './links/LinkStyled';

const NavStyle = styled.nav`
    li {
        display: inline-block;
        padding: 0 0.8rem;
        font-size: 1.6rem;
    }
    a {
        text-decoration: none;
        color: ${AppColors.COLOR_TEXT};
    }
    @media ${device.tablet} {
        display: none;
    }
`;

export default function Nav() {
    return (
        <NavStyle>
            <ul>
                <li>
                    <LinkStyled to='#career'>Career</LinkStyled>
                </li>
                <li>
                    <LinkStyled to='#about'>About</LinkStyled>
                </li>
                <li>
                    <LinkStyled to='#endorsements'>Endorsements</LinkStyled>
                </li>
                {/* <li>
                    <LinkStyled to={Paths.PRESS}>Press</LinkStyled>
                </li> */}
                <li>
                    <LinkStyled to='/#contact'>Contact</LinkStyled>
                </li>
            </ul>
        </NavStyle>
    );
}
