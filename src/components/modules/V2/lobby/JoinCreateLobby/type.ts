import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes } from 'react';

export type TJoinCreateLobby = {
  currentPage: 'create' | 'join';
  isJoinButtonDisabled: boolean;
  onClickBack: () => void;
  onClickPlayQuickly: () => void;
  onChangeRoomID: (event: InputHTMLAttributes<HTMLInputElement>) => void;
  onClickJoin: () => void;
  onClickPlay: () => void;

  createLobby: {
    roomID: string;
    players: TPlayer[];
    onClickCloseLobby: () => void;
    gameSetting: {
      onChangeMode: (e: ChangeEvent) => void;
      mode: string;
      speed: string;
      numQuestions: number;
      onChangeNumQuestions: (e: number) => void;
      onChangeSpeed: (e: string) => void;
    };
  };
};

export type TPlayer = {
  displayName: string;
  isReady: boolean;
  img: string;
};
