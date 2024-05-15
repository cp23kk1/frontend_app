import { CSSProperties } from 'react';

export type TModalPause = {
  masterVolume: string;
  sfxVolume: string;
  musicVolume: string;
  isSetting: boolean;
  isMultiplayer?: boolean;
  onClickTutorial?: () => void;
  onClickRetry?: () => void;
  onClickResume?: () => void;
  onClickFinish?: () => void;

  // onChangeMasterVolume: (volume: string) => void;
  // onChangeMusicVolume: (volume: string) => void;
  // onChangeSfxVolume: (volume: string) => void;
};
