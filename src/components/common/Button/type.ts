import { CSSProperties } from 'react';
import { TIcon } from '../Icon/type';

const { iconName } = {} as TIcon;

export type TButton = {
  iconName?: typeof iconName;
  label: string;
  disable?: boolean;
  style?: CSSProperties;
  onClick: () => void;
};
