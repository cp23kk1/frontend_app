import { CSSProperties } from 'react';
import { TIcon } from '../Icon/type';

export type TCard = {
  onClick: () => void;
  modeName: string;
  modeSubtitle?: string;
  modeIcon?: string;
  isSelected?: boolean;
  className?: string;
};
