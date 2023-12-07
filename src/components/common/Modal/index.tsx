import ModalContainer from '@/modules/core/modal/ModalContainer';
import { ModalWrapper } from './style';

const Modal = () => {
  return (
    <ModalContainer
      render={({ isModalOpen, content, onClose }) => {
        return (
          <ModalWrapper onClick={onClose} isOpen={isModalOpen}>
            <div className="modal">{content}</div>
          </ModalWrapper>
        );
      }}
    />
  );
};
export default Modal;
