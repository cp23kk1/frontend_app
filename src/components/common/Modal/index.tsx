import ModalContainer from '@/modules/core/setting/ModalContainer';
import { ModalWrapper } from './style';
import { TModal } from './type';
import { getPublicPath } from '@/utils/basePath';

const Modal = ({ onClose, children, isModalOpen }: TModal) => {
  return (
    <ModalWrapper
      className="modalBg"
      onClick={(event) => {
        if ((event?.target as Element).className.includes('modalBg')) onClose();
      }}
      isOpen={isModalOpen}
    >
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          <img src={getPublicPath(`/icon/X.svg`)} alt="X" />
        </button>
        {children}
      </div>
    </ModalWrapper>
  );
};
export default Modal;
