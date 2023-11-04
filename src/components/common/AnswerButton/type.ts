import { CSSProperties, ReactNode } from 'react';

export type TAnswerButton = {
  children: ReactNode;
  onClick: () => void;
  style?: CSSProperties;
  state?: 'correct' | 'incorrect' | 'normal';
};
