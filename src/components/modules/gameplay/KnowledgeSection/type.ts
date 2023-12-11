import { TAnswerButton } from '@/components/common/AnswerButton/type';
import { TPos } from '@/components/common/QuestionLayout/type';
import { CSSProperties, ReactNode } from 'react';

export type TKnowLedgeSection = {
  question: ReactNode;
  style?: CSSProperties;
  type?: 'sentence' | 'vocabulary' | 'passage';
  pos?: TPos;
  answers: TGamePlayAnswerButton[];
  onAnswer: (meaning: string) => void;
};
export type TGamePlayAnswerButton = {
  children: string;
  style?: CSSProperties;
  disabled?: boolean;
  state: 'correct' | 'incorrect' | 'normal';
};
