import { TPlayerCard } from '@/components/common/V2/PlayerCard/type';
import { TPlayer } from '@/components/modules/V2/lobby/JoinCreateLobby/type';
import { TMultiplayerQuestion } from '@/components/modules/V2/multiplayer/MultiPlayerQuestion/type';
import { IUserResponse } from '@/modules/user/user-core/user-core-services';

export type Status = {
  status?: string;
  message?: string;
};

export type VocaverseResponseData<elementType = any> = {
  status?: Status;
  data?: elementType;
};
export type TWebSocketData = {
  msgType:
    | 'UserJoin'
    | 'UpdateData'
    | 'UserLeft'
    | 'CloseLobby'
    | 'UserReady'
    | 'StartGame'
    | 'ChangeQuestion'
    | 'Timer'
    | 'Answer'
    | 'ShowAnswer'
    | 'EndGame';
  msg: string;
  from: string;
  userData: IUserResponse;
  isReady: boolean;
  listPlayer: TPlayer[] | TPlayerCard[];
  maxRound: number;
  currentQuestion: TMultiplayerQuestion;
  currentRound: number;
  timer: number;
  answerId: string;
};
