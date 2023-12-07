import { CSSProperties } from 'react';

export type TIcon = {
  iconName: string;
  size?: number;
  style: CSSProperties;
  onClick?: () => void;
};
