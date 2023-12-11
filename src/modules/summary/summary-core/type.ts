export type TGameHistory = {
  gameId: string;
  current_score: number;
  vocabs: TVocabGameHistory[];
  sentences: TSentenceGameHistory[];
  passages: TPassageGameHistory[];
};

export type TVocabGameHistory = {
  vocabularyId: number;
  correctness: boolean;
};
export type TSentenceGameHistory = {
  sentenceId: number;
  correctness: boolean;
};
export type TPassageGameHistory = {
  passageId: number;
  correctness: boolean;
};
