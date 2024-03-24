import { CSSProperties } from 'react';
import { TIconName } from '../../Icon/type';

export type TPlayButton = {
  iconName: TIconName;
  text: string;

  onClick: () => void;
};
