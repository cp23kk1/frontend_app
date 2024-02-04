import { CSSProperties } from 'react';
import { TIcon } from '../Icon/type';

export type TScoreBoard = {
  listScore: TScoreBoardRow[];
  userScore: TScoreBoardRow;
};

type TScoreBoardRow = {
  no: number;
  userName: string;
  score: number;
};
