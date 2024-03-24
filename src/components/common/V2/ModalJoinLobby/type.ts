import { InputHTMLAttributes } from 'react';

export type TModalJoinLobby = {
  currentMode: 'joinWithID' | 'quickJoin';
  onChangeId: (event: InputHTMLAttributes<HTMLInputElement>) => void;
  onJoinWithId: () => void;
  lobby?: any[];
};
