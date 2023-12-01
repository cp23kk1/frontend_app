import { TAnswerButton } from '@/components/common/AnswerButton/type';
import { TPos } from '@/components/common/QuestionLayout/type';
import { ReactNode } from 'react';
export type TQuestion = {
  question: ReactNode;
  pos: TPos;
  type: 'sentence' | 'vocabulary' | 'passage';
  answers: TAnswerButton[];
};
