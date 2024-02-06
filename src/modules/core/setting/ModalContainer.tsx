import React, { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { actions as modalActions, selectors as modalSelectors } from '.';
import { TModal } from './type';

const ModalContainer = ({
  render
}: {
  render: (props: TModal) => ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const contentSelect = useAppSelector(modalSelectors.modalContentSelector);
  const content = contentSelect;
  const isModalOpen = useAppSelector(modalSelectors.isModalOpenSelector);
  const onClose = () => {
    dispatch(modalActions.onClose());
  };

  return render({ content, isModalOpen, onClose });
};
export default ModalContainer;
