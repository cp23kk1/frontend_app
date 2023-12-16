import { CSSProperties, ReactNode } from 'react';

export type TDynamicTypography = {
  children: ReactNode;
  color: string;
  family: TFontFamily;
  size: number;
  weight: TFontWeight;
  style?: CSSProperties;
};

type TFontFamily = 'Audiowide' | 'Fredoka' | 'Mitr';

type TFontWeight =
  | 'Thin'
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold'
  | 'Black';
