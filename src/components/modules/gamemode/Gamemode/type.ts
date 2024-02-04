import { TCard } from '@/components/common/Card/type';
import { TScoreBoard } from '@/components/common/ScoreBoard/type';

export type TGamemode = {
  onClickSetting: () => void;
  listMode: TCard[];
  onSelectMode: (selectedIndex: number) => void;
  scoreBoard: TScoreBoard;
};
