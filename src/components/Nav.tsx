import { AppColors } from 'config/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LinkStyled from './LinkStyled';

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
`;

export default function Nav() {
    return (
        <NavStyle>
            <ul>
                <li>
                    <LinkStyled to='#about'>About</LinkStyled>
                </li>
                <li>
                    <LinkStyled to='#career'>Career</LinkStyled>
                </li>
                <li>
                    <LinkStyled to='#testimonials'>Testimonials</LinkStyled>
                </li>
                <li>
                    <LinkStyled to='/press'>Press</LinkStyled>
                </li>
                <li>
                    <LinkStyled to='/#contact'>Contact</LinkStyled>
                </li>
            </ul>
        </NavStyle>
    );
}
