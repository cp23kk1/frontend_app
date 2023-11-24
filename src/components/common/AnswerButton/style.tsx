import styled from '@emotion/styled';
import { TAnswerButton } from './type';
export const AnswerButtonWrapper = styled.button`
  width: 100%;
  height: 112px;
  font-size: 48px;
  border-radius: 32px;
  border: 0px solid #fff;
  padding: 16px;
  cursor: pointer;
  transition: 0.25s;
  :hover {
    scale: 1.07;
  }

  ${({ state }: TAnswerButton) => {
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
        color: #000000;
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
