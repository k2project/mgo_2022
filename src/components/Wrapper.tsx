import { device } from 'config/devices';
import styled from 'styled-components';

export const WrapperHorizontalPadding = '8rem';
export const WrapperHorizontalPaddingTablet = '4rem';
export const WrapperHorizontalPaddingMobile = '2rem';

export const WrapperStyle = styled.div<{ height: string }>`
    max-width: 102.4rem;
    margin: auto;
    min-height: ${(props) => props.height};
    padding: 0 ${WrapperHorizontalPadding};
    @media ${device.tablet} {
        padding: 0 ${WrapperHorizontalPaddingTablet};
    }
    @media ${device.mobileL} {
        padding: 0 ${WrapperHorizontalPaddingMobile};
    }
`;

export default function Wrapper({
    children,
    height = 'auto',
}: {
    children: React.ReactNode;
    height?: string;
}) {
    return <WrapperStyle height={height}>{children}</WrapperStyle>;
}
