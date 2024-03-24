import { CSSProperties } from 'react';
import { TIconName } from '../../Icon/type';

export type TNewButton = {
  iconName?: TIconName;
  label: string;
  disable?: boolean;
  style?: CSSProperties;
  onClick: () => void;
  className?: string;
  state?: 'selected' | 'unselected' | 'unselected-light' | 'hover';
  danger?: boolean;
};
