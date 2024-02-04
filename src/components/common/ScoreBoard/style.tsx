import styled from '@emotion/styled';

export const ScoreBoardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  color: white;
  padding: 24px 16px 16px 16px;
  font-size: 24px;
  gap: 16px;
  .header {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 24px;
    font-family: Audiowide;
  }

  .score-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 24px;
    font-family: Fredoka;
    gap: 16px;
    overflow-y: scroll;
    div {
      display: flex;
      padding: 0 8px;
      .username {
        text-align: start;
      }
      .score {
        text-align: center;
      }
      .series {
        text-align: center;
      }
    }
  }
  .user-score {
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 32px;
  }
`;
