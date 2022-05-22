import React from 'react';

import styled from 'styled-components';
import { device } from 'config/devices';
import { companiesLogos } from './Logos';

const Img = styled.img`
    opacity: 0.3;
    max-height: 4rem;
    padding: 1rem 0rem;
    max-width: 80%;
`;
const CompaniesContainer = styled.div`
    padding-left: 4rem;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media ${device.laptop} {
        padding: 6rem 0 10rem;
    }
`;

export default function Companies() {
    return (
        <CompaniesContainer>
            {companiesLogos.map((logo, index) => (
                <Img src={logo} alt='' key={`company-logo-${index}`} />
            ))}
        </CompaniesContainer>
    );
}
