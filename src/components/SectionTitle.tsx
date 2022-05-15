import { AppColors } from 'config/colors';
import React from 'react';
import styled from 'styled-components';
import { baseScreenReaderOnly } from 'styles';

const Title = styled.h1<{ srOnly: boolean }>`
    font-size: 1.4rem;
    text-transform: uppercase;
    color: ${AppColors.THEME_SECONDARY};
    margin-bottom: 1.4rem;
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
