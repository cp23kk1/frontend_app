import styled from '@emotion/styled';

export const ChoiceAnswerWrapper = styled.button`
  height: 134px;
  width: 100%;
  border-radius: 24px;
  color: white;
  font-size: 48px;
  font-family: Mitr;
  font-weight: 500;
  word-wrap: break-word;
  transition: 0.1s;
  border: 0;

  :disabled {
    opacity: 0.5;
  }
  :hover {
    ${({
      state,
      disabled
    }: {
      state: 'correct' | 'incorrect' | 'normal';
      disabled?: boolean;
    }) => {
      return state === 'normal' && !disabled
        ? `
        background-color: #F8D34D;
        color: #262956;
        scale: 1.05;
        cursor: pointer;`
        : '';
    }}
  }
  ${({ state }: { state: 'correct' | 'incorrect' | 'normal' }) => {
    switch (state) {
      case 'correct':
        return `background-color: #28D898;`;
      case 'incorrect':
        return `background-color: #B8330A;`;
      case 'normal':
        return `background-color: #262956`;
    }
  }}
`;
