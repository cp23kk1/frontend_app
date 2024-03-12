import { ReactNode } from 'react';

export type TTab = {
  children: 'Vocabulary' | 'Sentence' | 'Passage';
  isSelected: boolean;
  onClick: (input: string) => void;
};
