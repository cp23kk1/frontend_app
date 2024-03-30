import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes } from 'react';

export type TJoinCreateLobby = {
  currentPage: 'create' | 'join';
  onChangeMode: (input: 'create' | 'join') => void;
  isJoinButtonDisabled: boolean;
  onClickBack: () => void;
  onClickPlayQuickly: () => void;
  onChangeRoomID: (event: React.FormEvent<HTMLInputElement>) => void;
  onClickJoin: () => void;
  onClickPlay: () => void;

  createLobby: {
    roomID: string;
    players: TPlayer[];
    isPlayDisabled?: boolean;
    onClickCloseLobby: () => void;
    gameSetting: {
      onChangeMode: (e: React.FormEvent<HTMLInputElement>) => void;
      mode: 'all' | 'vocabulary';
      speed: 'slow' | 'normal' | 'fast';
      numQuestions: number;
      onChangeNumQuestions: (e: number) => void;
      onChangeSpeed: (e: 'slow' | 'normal' | 'fast') => void;
    };
  };
};

export type TPlayer = {
  id: number;
  displayName: string;
  isReady: boolean;
  img: string;
};
