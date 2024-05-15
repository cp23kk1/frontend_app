import { CSSProperties, ReactNode } from 'react';

export type TNewProfileTab = {
  profilePic?: string;
  userName?: string;
  style?: CSSProperties;
  onClickLogout: () => void;
  onClickProfile: () => void;
  onClickSignIn: () => void;
};
