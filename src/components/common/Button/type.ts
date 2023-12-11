import { CSSProperties } from 'react';
import { TIcon } from '../Icon/type';

const { iconName } = {} as TIcon;

export type TButton = {
  iconName: typeof iconName;
  lebel: string;
  disable?: boolean;
  style?: CSSProperties;
  onClick: () => void;
};
