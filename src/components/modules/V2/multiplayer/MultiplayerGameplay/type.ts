import { TChoiceAnswer } from '@/components/common/V2/ChoiceAnswer/type';
import { TPlayerCard } from '@/components/common/V2/PlayerCard/type';
import { TListPlayer } from '../ListPlayer/type';
import { TMultiplayerQuestion } from '../MultiPlayerQuestion/type';

export type TMultiPlayerGameplay = {
  currentRound: number;
  maxRound: number;
  listPlayer: TListPlayer;
  multiplayerQuestion: TMultiplayerQuestion;
  onClickFinish?: () => void;
  onPause: () => void;
};
