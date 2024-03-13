import { TAnswerButton } from '@/components/common/AnswerButton/type';
import { TPos } from '@/components/common/QuestionLayout/type';
import { DragEndEvent } from '@dnd-kit/core';
import { CSSProperties, ReactNode } from 'react';

export type TKnowLedgeSection = {
  question?: ReactNode[];
  style?: CSSProperties;
  type?: 'sentence' | 'vocabulary' | 'passage';
  pos?: string;
  answers: TGamePlayAnswerButton[];
  passageAnswers: { [key: string]: string };
  onAnswer: (
    answer: string,
    correctness: boolean,
    passageCurrentIndex?: number
  ) => void;
  onUnselectePassageAnswer: (sentenceIndex?: number) => void;
  onDragEnd: (event: DragEndEvent) => void;
};
export type TGamePlayAnswerButton = {
  children: string;
  style?: CSSProperties;
  disabled?: boolean;
  correctness: boolean;
  state: 'correct' | 'incorrect' | 'normal';
};
export interface IGameplayPassageAnswered extends TGamePlayAnswerButton {
  sentenceIndex?: number;
}
