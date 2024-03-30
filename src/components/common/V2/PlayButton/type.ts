import { CSSProperties } from 'react';
import { TIconName } from '../../Icon/type';

export type TPlayButton = {
  iconName: TIconName;
  text: string;
  disabled?: boolean;

  onClick: () => void;
};
