import styled from '@emotion/styled';

export const MultiplayerQuestionWrapper = styled.div`
  width: calc(100% - 96x);
  height: calc(774px - 96px);
  background-color: #fff;
  border-radius: 36px;
  box-shadow: 4px 5px 8px 0px rgba(88, 67, 190, 1);
  padding: 48px;
  display: grid;
  .question-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .question {
      color: #262956;
      font-size: 128px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
    }
    .extra-info {
      padding: 8px;
      background-color: #eaeaef;
      border-radius: 12px;
      color: #262956;
      font-size: 24px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
  .answer-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    .answers {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 1fr 1fr;
      height: fit-content;
      align-items: center;
      width: 100%;
      gap: 48px;
    }
  }
`;
