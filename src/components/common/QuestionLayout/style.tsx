import styled from '@emotion/styled';

export const QuestionLayoutWrapper = styled.div`
  width: 100%;
  height: 288px;
  display: flex;
  font-family: 'Fredoka', sans-serif;
  flex-direction: column;
  gap: 24px;
  border-radius: 32px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5) inset;
  .question {
    text-align: center;
    font-size: 128px;
    font-weight: 600;
  }
  .pos {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
  }
`;
