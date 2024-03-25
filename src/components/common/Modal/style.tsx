import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  ${({ isOpen }: { isOpen?: boolean }) => {
    return isOpen
      ? `display:flex;`
      : `
 display:none;
    `;
  }}
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
  width: 100%;
  height: 100%;
  .modalContent {
    font-family: 'Mitr';
    position: relative;
    width: fit-content;
    z-index: 100;
    ${({ isOpen }: { isOpen: boolean }) => {
      return isOpen
        ? `
      animation: scale 0.25s alternate;
    animation-iteration-count: 2;`
        : `
    `;
    }}
    .closeButton {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e1e1e1;
      padding: 8px;
      top: 24px;
      right: 24px;
      border-radius: 8px;
      border: 0;
      cursor: pointer;
      z-index: 100;
    }
  }

  @keyframes scale {
    from {
      scale: 1;
    }
    to {
      scale: 1.05;
    }
  }
`;
