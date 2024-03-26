import { InputHTMLAttributes } from 'react';
import { TPlayer } from '../JoinCreateLobby/type';

export type TLobby = {
  onClickLeave: () => void;
  roomID: string;
  players: TPlayer[];
  currentPlayer: TPlayer;
};
