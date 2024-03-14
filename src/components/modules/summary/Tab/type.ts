import { ReactNode } from 'react';

export type TTab = {
  children: 'Vocabulary' | 'Sentence' | 'Passage';
  isSelected: boolean;
  onClick: (input: 'Vocabulary' | 'Sentence' | 'Passage') => void;
};
