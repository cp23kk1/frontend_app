import { TAnswerButton } from '@/components/common/AnswerButton/type';
import { TPos } from '@/components/common/QuestionLayout/type';
import { CSSProperties, ReactNode } from 'react';

export type TKnowLedgeSection = {
  question: ReactNode;
  style?: CSSProperties;
  type?: 'sentence' | 'vocabulary' | 'passage';
  pos?: string;
  answers: TGamePlayAnswerButton[];
  onAnswer: (answer: string, correctness: boolean) => void;
};
export type TGamePlayAnswerButton = {
  children: string;
  style?: CSSProperties;
  disabled?: boolean;
  correctness: boolean;
  state: 'correct' | 'incorrect' | 'normal';
};
