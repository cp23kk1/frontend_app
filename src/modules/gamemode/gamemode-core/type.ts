export type TGameHistory = {
  gameId: string;
  current_score: number;
  vocabs: TVocabGameHistory[];
  sentences: TSentenceGameHistory[];
  passages: TPassageGameHistory[];
};

export type TVocabGameHistory = {
  vocabularyId: string;
  answer: string;
  question: string;
  correctness: boolean;
};
export type TSentenceGameHistory = {
  sentenceId: string;
  answer: string;
  question: string;
  correctness: boolean;
};
export type TPassageGameHistory = {
  passageId: string;
  answer: string;
  question: string;
  correctness: boolean;
};
