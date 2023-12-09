import { CSSProperties, ReactNode } from 'react';

export type TAnswerButton = {
  children: ReactNode;
  onClick: () => void;
  style?: CSSProperties;
  disabled?: boolean;
  state: 'correct' | 'incorrect' | 'normal';
};
