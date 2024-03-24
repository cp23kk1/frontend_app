import { CSSProperties } from 'react';

export type TChoiceAnswer = {
  state: 'correct' | 'incorrect' | 'normal';
  answer: string;
  onClick: () => void;
};
