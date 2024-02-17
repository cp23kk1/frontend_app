import { createRoot } from 'react-dom/client';
import { ModalWrapper } from './style';
import { TModal } from './type';
import { getPublicPath } from '@/utils/basePath';
import { v4 as uuid } from 'uuid';

const Modal = ({ onClose, children, isModalOpen }: TModal) => {
  return (
    <ModalWrapper
      className="modalBg"
      onClick={(event) => {
        if (
          (event?.target as Element).className.includes('modalBg') &&
          onClose
        ) {
          onClose();
        }
      }}
      isOpen={isModalOpen === undefined ? true : isModalOpen}
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
export const modalAlert = () => {
  const el = document.createElement('div');
  el.id = `__modal-render-${uuid()}`;

  /**
   * modalComponentRender
   *
   * @param props: {IModal} - The properties for modal component
   *
   * @returns {JSX.Element} The rendered modal component
   */
  const modalComponentRender = (props: TModal) => {
    return Modal({
      ...props,
      onClose: () => {
        handleDestroy();
      }
    });
  };

  const handleRender = (props: TModal) => {
    document.body.appendChild(el);
    const domNode = createRoot(el);
    if (el) {
      domNode.render(modalComponentRender({ ...props }));
    }
  };

  const handleDestroy = () => {
    if (el) {
      el?.remove();
    }
  };

  return {
    render: handleRender,
    destroy: handleDestroy
  };
};
export default Modal;
