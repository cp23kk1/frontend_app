import ModalContainer from '@/modules/core/modal/ModalContainer';
import { ModalWrapper } from './style';
import { TModal } from './type';
import { getPublicPath } from '@/utils/basePath';

const Modal = ({ onClose, children, isModalOpen }: TModal) => {
  return (
    <ModalWrapper onClick={onClose} isOpen={isModalOpen}>
      <div className="modal">
        <button className="closeButton" onClick={onClose}>
          <img src={getPublicPath(`/icon/X.svg`)} alt="X" />
        </button>
        {children}
      </div>
    </ModalWrapper>
  );
};
export default Modal;
