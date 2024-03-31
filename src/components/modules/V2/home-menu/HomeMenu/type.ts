import { TNewProfileTab } from '@/components/common/V2/NewProfileTab/type';
import { TPlayButton } from '@/components/common/V2/PlayButton/type';
import { TPlayerCard } from '@/components/common/V2/PlayerCard/type';
import { ReactNode } from 'react';

export type THome = {
  currentPage: 'home' | 'leaderboard' | 'history' | 'item';
  onChangePage: (page: 'home' | 'leaderboard' | 'history' | 'item') => void;
  onClickSignIn: () => void;
  onCLickSettings: () => void;
  profileTab?: TNewProfileTab;
  leaderBoard: { listPlayer: TPlayerCard[]; currentPlayer: TPlayerCard };
  modes: {
    modeName: string;
    modeDesc: string;
    modeExtraInfo: ReactNode;
    modeButtons: TPlayButton[];
  }[];
};