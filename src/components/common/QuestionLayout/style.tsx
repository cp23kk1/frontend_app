import styled from '@emotion/styled';

export const QuestionLayoutWrapper = styled.div`
  width: 100%;
  height: 288px;
  display: flex;

  background-color: white;
  flex-direction: row;
  border-radius: 32px;
  align-items: center;
  gap: 16px;
  height: 288px;
  justify-content: center;
  position: relative;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5) inset;
  color: #262956;
  font-size: 128px;
  font-family: Passion One;
  font-weight: 400;
  word-wrap: break-word;
  .question-box {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-y: scroll;
    .question {
      // font-size: 128px;
      // font-weight: 600;
      width: fit-content;
      .sentence-box {
        background-color: #d9d9d9;
        color: #d9d9d9;
        border-radius: 32px;
        padding: 0 12px;
        box-shadow: inset 0px 0px 4px 2px #00000040;
        height: 100px;
        width: 200px;
      }
    }
    .pos {
      text-align: center;
      font-size: 32px;
      font-weight: 500;
    }
  }
`;
