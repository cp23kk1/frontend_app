import { CSSProperties, ReactNode } from 'react';

export type TProfileTab = {
  profilePic?: string;
  userName?: string;
  onClick: () => void;
  style?: CSSProperties;
};
