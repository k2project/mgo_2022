import React from 'react';
import styled from 'styled-components';
import { linkBase } from 'styles';

const Link = styled.a`
    ${linkBase}
    text-decoration: underline;
`;

export default function ExternalLink({
    children,
    to,
}: {
    children: React.ReactNode;
    to: string;
}) {
    return (
        <Link href={to} target='_blank' rel='noopener noreferrer'>
            {children}
        </Link>
    );
}
