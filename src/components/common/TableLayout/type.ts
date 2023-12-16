import { IVocabulary } from '@/modules/gameplay/vocabulary/vocabulary-services';

export type TTable = {
  columns: string[];
  data: Pick<IVocabulary, 'id' | 'word' | 'meaning'>[];
  onClick: (id: number) => void;
  moreinfo?: { label: string; isShow: boolean };
};

type Vocabulary = {};
type Sentence = {};
type Passage = {};
