import { CSSProperties } from 'react';

export type TIcon = {
  iconName: TIconName;
  size?: number;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
  color?: string;
};
export type TIconName =
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
  | 'Speaker'
  | 'SignIn'
  | 'UserIcon'
  | 'Play'
  | 'Group'
  | 'DoubleArrow'
  | 'Google'
  | 'User';
