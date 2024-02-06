import { ReactNode } from 'react';

export type TModal = {
  isModalOpen: boolean;
  content?: ReactNode;
  onClose: () => void;
};
