import { ReactNode } from 'react';

export type TModal = {
  isModalOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
};
