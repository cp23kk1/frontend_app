import { CSSProperties } from 'react';

export type TModalBriefInfo = {
  definition: string;
  word: string;
  meaning: string;
  example: string;
  pos: { pos: string; isSelected: boolean; onCLick: () => void }[];
};
