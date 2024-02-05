import { CSSProperties } from 'react';

export type TIcon = {
  iconName:
    | 'Exit'
    | 'Heart'
    | 'Home'
    | 'Info'
    | 'Logo'
    | 'Menu'
    | 'Pause'
    | 'ProfileDark'
    | 'ProfileLight'
    | 'Retry'
    | 'SettingDark'
    | 'SettingLight'
    | 'ArrowRight'
    | 'Crown'
    | 'ChevronDown';
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
};
