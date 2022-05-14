import { AppColors } from 'config/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkBase } from 'styles';

const LinkStyle = styled(Link)`
    ${linkBase}
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
