import { TPlayer } from '@/components/modules/V2/lobby/JoinCreateLobby/type';
import { CSSProperties } from 'react';

export interface TPlayerCard extends TPlayer {
  rank: number | string;
  score: number;
}
