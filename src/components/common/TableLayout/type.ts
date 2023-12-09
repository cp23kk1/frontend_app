export type TTable = {
  columns: string[];
  data: Vocabulary[];
  onClick: (id: number) => void;
};

export type Vocabulary = {
  id: number;
  question: string;
  answer: string;
};
type Sentence = {};
type Passage = {};
