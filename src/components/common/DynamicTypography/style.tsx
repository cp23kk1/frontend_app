import styled from '@emotion/styled';
import { TDynamicTypography } from './type';
export const DynamicTypographyWrapper = styled.div`
  ${({ color }: TDynamicTypography) => `color: ${color};`}
  ${({ family, size, weight }: TDynamicTypography) => {
    let fontStyle = '';
    fontStyle = `font-family: ${family}, sans-serif;
                 font-size: ${size}px;
                 font-style: normal;
                 font-weight: ${FontWeight[weight]};
                 line-height: normal;`;
    return fontStyle;
  }}
`;

const FontWeight: { [key: string]: number } = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900
};
