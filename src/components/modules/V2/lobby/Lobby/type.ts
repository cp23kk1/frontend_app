import { InputHTMLAttributes } from 'react';
import { TPlayer } from '../JoinCreateLobby/type';

export type TLobby = {
  onClickLeave: () => void;
  onClickReady: () => void;
  roomID: string;
  players: TPlayer[];
  currentPlayer: TPlayer;
};
