import { ReactNode } from 'react';
import { ILobby } from './web-socket-services';

export type DataWebSocket = {
  onSubmit: () => void;
  onConnect: (room_name?: string, room_id?: string) => void;
  onCloseConnection: () => void;
  onChangeMsg: (text: string) => void;
  onChangeName: (name: string) => void;
  onChangeRoomId: (room_id: string) => void;
  onGetLobby: () => void;
  msg: string;
  isConnect: boolean;
  log: Massage[];
  name: string;
  lobby: ILobby[];
  roomId: string;
  googleClientId: string;
  onGoogleLoginSuccess: (res: any) => void;
  onGoogleLoginFailure: () => void;
  profile: any;
  onGoogleLogout: () => void;
};

export type Massage = {
  msg: string;
  from: string;
  time: string;
};
