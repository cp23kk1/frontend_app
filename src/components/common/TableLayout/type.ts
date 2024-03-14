import {
  IQuestion,
  IVocabulary
} from '@/modules/gameplay/question/question-services';

export type TTable = {
  columns: string[];
  data: { [key: string]: string }[];
  onClick: (id: string) => void;
  moreinfo?: { label: string; isShow: boolean };
};

type Vocabulary = {};
type Sentence = {};
type Passage = {};
