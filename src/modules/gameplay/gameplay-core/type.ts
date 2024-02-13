import { TVocabGameHistory } from '@/modules/gamemode/gamemode-core/type';
import {
  IGameResultPassage,
  IGameResultSentence,
  IGameResultVocabulary
} from '../game-result/game-result-services';

export type TGameHistory = {
  gameId: string;
  current_score: number;
  vocabs: TVocabGameHistory[];
  sentences: TSentenceGameHistory[];
  passages: TPassageGameHistory[];
};

export interface IVocabGameHistory extends IGameResultVocabulary {
  answer: string;
  question: string;
}
export interface TSentenceGameHistory extends IGameResultSentence {
  answer: string;
  question: string;
}
export interface TPassageGameHistory extends IGameResultPassage {
  answer: string;
  question: string;
}
