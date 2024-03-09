import { IVocabulary } from '@/modules/gameplay/question/question-services';

export type TTable = {
  columns: string[];
  data: Pick<IVocabulary, 'id' | 'word' | 'meaning'>[];
  onClick: (id: string) => void;
  moreinfo?: { label: string; isShow: boolean };
};

type Vocabulary = {};
type Sentence = {};
type Passage = {};
