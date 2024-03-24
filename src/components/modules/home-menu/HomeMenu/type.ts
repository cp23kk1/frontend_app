import { TPlayButton } from '@/components/common/V2/PlayButton/type';

export type THome = {
  modes: {
    modeName: string;
    modeDesc: string;
    modeExtraInfo: string;
    modeButtons: TPlayButton[];
  }[];
};
