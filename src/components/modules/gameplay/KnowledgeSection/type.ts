import { TPos } from '@/components/common/QuestionLayout/type';
import { CSSProperties, ReactNode } from 'react';

export type TKnowLedgeSection = {
  question: ReactNode;
  style?: CSSProperties;
  type?: 'sentence' | 'vocabulary' | 'passage';
  pos: TPos;
  ans1: Answer;
  ans2: Answer;
};

type Answer = {
  answer: ReactNode;
  onClick: () => void;
  state: 'correct' | 'incorrect' | 'normal';
};
