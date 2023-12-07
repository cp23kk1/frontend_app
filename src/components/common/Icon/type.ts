import { CSSProperties } from 'react';

export type TIcon = {
  iconName:
    | 'Exit'
    | 'Heart'
    | 'Logo'
    | 'Pause'
    | 'ProfileDark'
    | 'ProfileLight'
    | 'SettingDark'
    | 'Vector';
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
};
