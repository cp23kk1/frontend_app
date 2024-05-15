import { CSSProperties } from 'react';
import { TIcon } from '../Icon/type';

export type TScoreBoard = {
  listScore: TScoreBoardRow[];
  userScore: TScoreBoardRow;
};

export type TScoreBoardRow = {
  no: string | number;
  userName: string;
  score: number;
  userId: number;
  userImage: string;
};
