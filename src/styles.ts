import { AppColors } from 'config/colors';
import { css } from 'styled-components';

export const baseScreenReaderOnly = css`
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

export const pBase = css`
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: 2rem;
`;

export const largeParagraph = css`
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4rem;
`;

export const linkBase = css`
    text-decoration: none;
    color: ${AppColors.COLOR_TEXT};
    &:visited,
    &:active {
        color: ${AppColors.COLOR_TEXT};
    }

    &:hover {
        text-decoration: underline;
    }
`;
