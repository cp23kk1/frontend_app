import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 108px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: 0;
  background-color: #fff;
  cursor: pointer;

  color: #000;

  /* Audiowide/Regular-24 */
  font-family: Passion One;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  :disabled {
    opacity: 0.5;
  }
  transition: 0.25s;
  :hover {
    scale: 1.07;
  }
`;
