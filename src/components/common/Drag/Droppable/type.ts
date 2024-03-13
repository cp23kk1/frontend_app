import { CSSProperties, ReactNode } from 'react';

export type TDropable = {
  id?: string | number;
  children: ReactNode;
  className: string;
  style?: CSSProperties;
  data?: any;
};
