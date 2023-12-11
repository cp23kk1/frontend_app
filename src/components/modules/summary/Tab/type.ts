import { ReactNode } from 'react';

export type TTab = {
  childen: ReactNode;
  isSelected: boolean;
  onClick: () => void;
};
