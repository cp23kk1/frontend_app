import { CSSProperties, ReactNode } from 'react';

export type TBackGround = {
  theme?: 'dark' | 'light';
  children: ReactNode;
  childrenStyle?: CSSProperties;
  style?: CSSProperties;
};
