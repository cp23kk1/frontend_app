import { ReactNode } from 'react';

export type TModal = {
  content?: ReactNode;
  onClose: () => void;
};
