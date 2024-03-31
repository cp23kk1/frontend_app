import { TPos } from '@/components/common/QuestionLayout/type';
import { httpClient } from '@/services/HttpClient';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';
import { ReactNode } from 'react';

export interface ILobby {
  roomId: string;
  name: string;
  numberPlayer: number;
  maxPlayer: number;
}

export interface ILobbyResponse {
  lobby: ILobby[];
}

export const getLobby = () => {
  return httpClient
    .get<VocaverseResponseData<ILobbyResponse>>(`/multiplayer/get-lobby`)
    .then((res) => {
      return res.data;
    });
};

export default {
  getLobby
};
