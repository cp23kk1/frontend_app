export type TSettingModal = {
  onClose: () => void;
  isModalOpen: boolean;
  onClickChangeButton: () => void;
  onVolumechange: (value: string) => void;
  onMusicChange: (value: string) => void;
  onSoundEffectChange: (value: string) => void;
  charaterPic: string;
  volumeValue: string;
  musicValue: string;
  soundEffectValue: string;
};
