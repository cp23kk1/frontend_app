import { CSSProperties, ReactNode } from 'react';
import { Typography } from './style';

export type TFixedTypography = {
  children: ReactNode;
  color: string;
  fontStyle: TFontStyle;
  style?: CSSProperties;
};

type TFontStyle =
  | 'Audiowide-Regular-24'
  | 'Audiowide-Regular-32'
  | 'Audiowide-Regular-48'
  | 'Audiowide-Regular-96'
  | 'Fredoka-Medium-24'
  | 'Fredoka-Medium-32'
  | 'Fredoka-SemiBold-96'
  | 'Mitr-Regular-24'
  | 'Mitr-Regular-48';
