import { httpClient } from '@/services/HttpClient';

export interface ILobby {
  name: string;
  num: number;
  room_id: string;
  max_player: string;
}

export type TConnectWsRequest = {
  roomId: string;
};

export const getLobbyService = () => {
  return httpClient.get<ILobby>(`/api/get-lobby`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const connectWsService = ({ roomId }: TConnectWsRequest): WebSocket => {
  return new WebSocket(`${process.env.WS_URL}/ws?roomId=${roomId}`);
};

export default {
  getLobbyService,
  connectWsService
};
