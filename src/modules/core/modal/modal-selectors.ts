import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { ReactNode } from 'react';

const modalCoreSelector = (state: RootState) => state.core.modal;

const modalContentSelector = createSelector(
  modalCoreSelector,
  (core): ReactNode => {
    return core.content;
  }
);
const isModalOpenSelector = createSelector(
  modalCoreSelector,
  (core): boolean => {
    return core.isModalOpen;
  }
);
export default {
  modalCoreSelector,
  modalContentSelector,
  isModalOpenSelector
};
