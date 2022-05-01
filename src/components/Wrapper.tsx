import { device } from 'config/devices';
import styled from 'styled-components';

const WrapperStyle = styled.div<{ height: string }>`
    max-width: 100rem;
    margin: auto;
    height: ${(props) => props.height};
    padding: 0 4rem;
    @media ${device.mobileL} {
        padding: 0 2rem;
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
