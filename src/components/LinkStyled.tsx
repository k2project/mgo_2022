import { AppColors } from 'config/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: ${AppColors.COLOR_TEXT};
    &:visited,
    &:active {
        color: ${AppColors.COLOR_TEXT};
    }

    &:hover {
        text-decoration: underline;
    }
`;

export default function LinkStyled({
    children,
    to,
}: {
    children: React.ReactNode;
    to: string;
}) {
    return <LinkStyle to={to}>{children}</LinkStyle>;
}
