export type TGameHistory = {
  gameId: string;
  current_score: number;
  vocabs: TVocabGameHistory[];
  sentences: TSentenceGameHistory[];
  passages: TPassageGameHistory[];
};

export type TVocabGameHistory = {
  vocabularyId: number;
  answer: string;
  question: string;
  correctness: boolean;
};
export type TSentenceGameHistory = {
  sentenceId: number;
  answer: string;
  question: string;
  correctness: boolean;
};
export type TPassageGameHistory = {
  passageId: number;
  answer: string;
  question: string;
  correctness: boolean;
};
