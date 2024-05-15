import { TNewProfileTab } from '@/components/common/V2/NewProfileTab/type';
import { TPlayButton } from '@/components/common/V2/PlayButton/type';
import { TPlayerCard } from '@/components/common/V2/PlayerCard/type';
import { ReactNode } from 'react';

export type THome = {
  currentPage: 'home' | 'leaderboard' | 'history' | 'item';
  onChangePage: (page: 'home' | 'leaderboard' | 'history' | 'item') => void;
  onClickSignIn: () => void;
  onCLickSettings: () => void;
  onClickTutorial: () => void;
  profileTab?: TNewProfileTab;
  leaderBoard: { listPlayer: TPlayerCard[]; currentPlayer: TPlayerCard };
  listCharacter: string[];
  currentCharacter: string;
  selectedCharacter: string;
  onChangeCharacter: (img: string) => void;
  onSelectCharacter: (img: string) => void;
  modes: {
    modeName: string;
    modeDesc: string;
    modeExtraInfo: ReactNode;
    image: string;
    modeButtons: TPlayButton[];
  }[];
};
