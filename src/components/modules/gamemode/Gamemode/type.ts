import { TCard } from '@/components/common/Card/type';
import { TProfileTab } from '@/components/common/ProfileTab/type';
import { TScoreBoard } from '@/components/common/ScoreBoard/type';

export type TGameMode = {
  onClickSetting: () => void;
  onSelectMode: (selectedIndex: number) => void;
  onClickPlay: () => void;
  listMode: TCard[];
  scoreBoard: TScoreBoard;
  profileTab: TProfileTab;
  bestScore: number;
};
