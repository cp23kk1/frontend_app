import { TPos } from '@/components/common/QuestionLayout/type';
import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';

export interface IGameResultRequest {
  gameID: string;
  current_score: number;
  vocabs: IGameResultVocabulary[];
  sentences: IGameResultSentence[];
  passages: IGameResultPassage[];
}
export interface IGameResultVocabulary {
  vocabularyId: number;
  correctness: boolean;
}
export interface IGameResultSentence {
  sentenceId: number;
  correctness: boolean;
}
export interface IGameResultPassage {
  passageId: number;
  correctness: boolean;
}

export const createGameResultHistory = (gameResult: IGameResultRequest) => {
  return httpClient.post(`/history/game-result`, gameResult);
};

export default {
  createGameResultHistory
};