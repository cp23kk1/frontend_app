import styled from '@emotion/styled';
import { TAnswerButton } from './type';
export const AnswerButtonWrapper = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 48px;
  border-radius: 36px;
  border: 8px solid #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5),
    0px 0px 4px 0px rgba(0, 0, 0, 0.5) inset;
  ${({ state }: TAnswerButton) => {
    let result: string = '';
    switch (state) {
      case 'correct':
        result = 'background: #0FA958;';
        break;
      case 'normal':
        result = 'background: #311F47;';
        break;
      case 'incorrect':
        result = 'background: #E40714;';
        break;
    }
    return `${result}`;
  }}
`;
