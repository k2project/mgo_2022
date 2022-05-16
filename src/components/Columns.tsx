import { device } from 'config/devices';
import React from 'react';
import styled from 'styled-components';

export const ColumnStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(40rem, 1fr);

    @media ${device.laptop} {
        grid-template-columns: 1fr;
    }
`;

export default function ({ children }: { children: React.ReactNode }) {
    return <ColumnStyle>{children}</ColumnStyle>;
}
