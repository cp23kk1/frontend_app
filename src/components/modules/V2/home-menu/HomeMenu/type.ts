import { TNewProfileTab } from '@/components/common/V2/NewProfileTab/type';
import { TPlayButton } from '@/components/common/V2/PlayButton/type';

export type THome = {
  currentPage: 'home' | 'leaderboard' | 'history' | 'item';
  onChangePage: (page: 'home' | 'leaderboard' | 'history' | 'item') => void;
  onClickSignIn: () => void;
  onCLickSettings: () => void;
  profileTab?: TNewProfileTab;
  modes: {
    modeName: string;
    modeDesc: string;
    modeExtraInfo: string;
    modeButtons: TPlayButton[];
  }[];
};
