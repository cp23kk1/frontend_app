import { CSSProperties, ReactNode } from 'react';

export type TQuestionLayout = {
  question: ReactNode;
  style?: CSSProperties;
  type?: 'sentence' | 'vocabulary' | 'passage';
  pos: string;
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
