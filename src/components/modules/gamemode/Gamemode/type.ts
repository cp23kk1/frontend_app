import { TCard } from '@/components/common/Card/type';
import { TProfileTab } from '@/components/common/ProfileTab/type';
import { TScoreBoard } from '@/components/common/ScoreBoard/type';

export type TGameMode = {
  onClickSetting: () => void;
  listMode: TCard[];
  onSelectMode: (selectedIndex: number) => void;
  scoreBoard: TScoreBoard;
  profileTab: TProfileTab;
  bestScore: number;
};
