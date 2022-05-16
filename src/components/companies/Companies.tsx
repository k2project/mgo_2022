import React from 'react';

import styled from 'styled-components';
import { device } from 'config/devices';
import { companiesLogos } from './Logos';

const Img = styled.img`
    opacity: 0.3;
    height: 5rem;
    padding: 1rem 1.1rem;
`;
const CompaniesContainer = styled.div`
    padding-left: 4rem;
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
