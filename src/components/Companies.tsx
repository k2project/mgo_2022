import React from 'react';

import styled from 'styled-components';
import { device } from 'config/devices';

import Iab from 'assets/logos/iab.png';
import Nms from 'assets/logos/nms.png';
import U from 'assets/logos/u.png';
import Beautiful from 'assets/logos/beautiful.png';
import Fairmont from 'assets/logos/fairmont.png';
import Hrm from 'assets/logos/hrm.png';
import Maximillion from 'assets/logos/maximillion.png';
import Balmoral from 'assets/logos/balmoral.png';
import EY from 'assets/logos/e&y.png';
import Brodies from 'assets/logos/brodies.png';
import Gleneagels from 'assets/logos/gleneagels.png';
import Prudential from 'assets/logos/prudential.png';
import Sheraton from 'assets/logos/sheraton.png';

const Img = styled.img`
    opacity: 0.3;
    height: 5rem;
    padding: 0.8rem 1rem;
`;
const CompaniesContainer = styled.div`
    padding-left: 4rem;
    @media ${device.laptop} {
        padding: 6rem 0 10rem;
    }
`;

export default function Companies() {
    const companiesArr = [
        Iab,
        Nms,
        U,
        Beautiful,
        Fairmont,
        Hrm,
        Maximillion,
        Balmoral,
        EY,
        Brodies,
        Sheraton,
        Gleneagels,
        Prudential,
    ];
    return (
        <CompaniesContainer>
            {companiesArr.map((logo, index) => (
                <Img src={logo} alt='' key={`company-logo-${index}`} />
            ))}
        </CompaniesContainer>
    );
}
