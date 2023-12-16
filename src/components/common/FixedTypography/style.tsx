import styled from '@emotion/styled';
import { TFixedTypography } from './type';
export const FixedTypographyWrapper = styled.div`
  ${({ color }: TFixedTypography) => `color: ${color};`}
  ${({ fontStyle }: TFixedTypography) => `${Typography[fontStyle]};`}
`;

export const Typography: { [key: string]: string } = {
  'Audiowide-Regular-24': `font-family: Audiowide; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;`,
  'Audiowide-Regular-32': `font-family: Audiowide; font-size: 32px; font-style: normal; font-weight: 400; line-height: normal;`,
  'Audiowide-Regular-48': `font-family: Audiowide; font-size: 48px; font-style: normal; font-weight: 400; line-height: normal;`,
  'Audiowide-Regular-96': `font-family: Audiowide; font-size: 96px; font-style: normal; font-weight: 400; line-height: normal;`,
  'Fredoka-Medium-24': `font-family: Fredoka; font-size: 24px; font-style: normal; font-weight: 500; line-height: normal;`,
  'Fredoka-Medium-32': `font-family: Fredoka; font-size: 32px; font-style: normal; font-weight: 500; line-height: normal;`,
  'Fredoka-SemiBold-96': `font-family: Fredoka; font-size: 96px; font-style: normal; font-weight: 600; line-height: normal;`,
  'Mitr-Regular-24': `font-family: Mitr; font-size: 24px; font-style: normal; font-weight: 400; line-height: normal;`,
  'Mitr-Regular-48': `font-family: Mitr; font-size: 48px; font-style: normal; font-weight: 400; line-height: normal;`
};