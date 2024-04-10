import {
  IQuestion,
  IVocabulary
} from '@/modules/gameplay/question/question-services';
import { ReactNode } from 'react';

export type TTable = {
  columns: string[];
  data: { [key: string]: ReactNode }[];
  onClick: (id: string) => void;
  moreinfo?: { label: string; isShow: boolean };
};

type Vocabulary = {};
type Sentence = {};
type Passage = {};
