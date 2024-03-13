import { CSSProperties, ReactNode } from 'react';

export type TQuestionLayout = {
  questions?: ReactNode[];
  style?: CSSProperties;
  type?: 'sentence' | 'vocabulary' | 'passage';
  pos: string;
  passageAnswers: { [key: string]: string };
  onUnselectePassageAnswer: (newPassageIndex: number) => void;
};
export type TPos =
  | 'verb'
  | 'noun'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'interjection'
  | 'conjunction'
  | 'preposition'
  | '';
