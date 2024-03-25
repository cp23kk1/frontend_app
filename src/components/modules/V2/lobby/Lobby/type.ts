import { InputHTMLAttributes } from 'react';

export type TJoinCreateLobby = {
  currentPage: 'create' | 'join';
  isJoinButtonDisabled: boolean;
  onClickBack: () => void;
  onClickPlayQuickly: () => void;
  onChangeRoomID: (event: InputHTMLAttributes<HTMLInputElement>) => void;
  onClickJoin: () => void;
};
