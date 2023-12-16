import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  ${({ isOpen }: { isOpen: boolean }) => {
    return isOpen
      ? 'opacity: 1;'
      : `
    pointer-events: none;
    opacity: 0;
    `;
  }}
  display: flex;
  transition: opacity 0.25s ease-in-out;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background: rgb(82, 82, 82, 0.4);
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .modal {
    background-color: white;
    padding: 10px;
    border-radius: 40px;
    font-family: 'Mitr';
  }
`;
