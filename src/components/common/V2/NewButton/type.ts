import { CSSProperties } from 'react';

export type TNewButton = {
  iconName?:
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
    | 'ChevronDown'
    | 'Speaker';
  label: string;
  disable?: boolean;
  style?: CSSProperties;
  onClick: () => void;
  className?: string;
  state?: 'selected' | 'unselected' | 'unselected-light' | 'hover';
  danger?: boolean;
};
