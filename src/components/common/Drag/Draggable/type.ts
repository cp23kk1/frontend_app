import { ReactNode } from 'react';

export type TDraggable = {
  id: string | number;
  children: ReactNode;
  data?: any;
  className?: string;
};
