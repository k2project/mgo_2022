import { AppColors } from 'config/colors';
import React from 'react';
import styled from 'styled-components';
import { baseScreenReaderOnly } from 'styles';

const Title = styled.h1<{ srOnly: boolean }>`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${AppColors.THEME_SECONDARY};
    margin-bottom: 1.4rem;
    letter-spacing: 0.15rem;
    ${(props) => props.srOnly && baseScreenReaderOnly}
`;

export default function SectionTitle({
    children,
    srOnly = false,
}: {
    children: React.ReactNode;
    srOnly?: boolean;
}) {
    return <Title srOnly={srOnly}>{children}</Title>;
}
