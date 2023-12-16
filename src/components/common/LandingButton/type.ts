import { CSSProperties, ReactNode } from 'react';

export type TButton = {
  text: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  className?: string;
};
