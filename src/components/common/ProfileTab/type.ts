import { CSSProperties, ReactNode } from 'react';

export type TProfileTab = {
  profilePic?: string;
  userName?: string;
  style?: CSSProperties;
  onClickLogout: () => void;
  onClickProfile: () => void;
};
