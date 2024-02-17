export type TLanding = {
  onLogin: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onBegin: () => void;
  onSetting: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  userProfile?: { displayName?: string; image?: string };
};
