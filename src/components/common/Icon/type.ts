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
    | 'Vector'
    | 'SettingLight';
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
};
