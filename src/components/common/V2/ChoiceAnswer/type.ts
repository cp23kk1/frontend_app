import { CSSProperties } from 'react';

export type TChoiceAnswer = {
  answerId: string;
  state: 'correct' | 'incorrect' | 'normal';
  answer: string;
  disabled?: boolean;
  onClick: (answerId: string) => void;
};
