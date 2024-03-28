import styled from '@emotion/styled';
import { TAnswerButton } from './type';
export const AnswerButtonWrapper = styled.button`
  width: 100%;
  height: 112px;
  border-radius: 32px;
  border: 0px solid #fff;
  padding: 16px;
  cursor: pointer;
  transition: 0.25s;
  color: #262956;
  font-size: 48px;
  font-family: Mitr;
  font-weight: 500;
  word-wrap: break-word;
  :hover {
    scale: 1.07;
  }

  ${({ state, disabled }: TAnswerButton) => {
    let result: string = '';
    switch (state) {
      case 'correct':
        result = `
        background: #0FA958;
        color: #fff;
        `;
        break;
      case 'normal':
        result = `
        background: #FFF;
        color: #262956;
`;
        break;
      case 'incorrect':
        result = `
        background: #E40714;
        color: #fff;
`;
        break;
    }
    return `${result}`;
  }}
`;
