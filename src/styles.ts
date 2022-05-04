import { css } from 'styled-components';

const baseScreenReaderOnly = css`
    display: inline-block;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1;
    width: 1;
    margin: -1;
    padding: 0;
    border: 0;
`;

const pBase = css`
    font-size: 1.4rem;
    line-height: 1.8;
    margin-bottom: 2rem;
`;

const largeParagraph = css`
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4rem;
`;

export { baseScreenReaderOnly, pBase, largeParagraph };
