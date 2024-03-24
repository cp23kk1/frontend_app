import styled from '@emotion/styled';

export const JoinLobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #230052;
  height: 720px;

  gap: 17px;
  .header {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-family: 'Nabla', sans-serif;
    width: 100%;
  }
  .contents {
    display: grid;
    grid-template-rows: auto calc(100% - 42px - 24px);
    padding: 24px;
    gap: 24px;
    background-color: #fff;
    border-radius: 12px;

    height: 100%;
    width: 100%;
    max-width: 384px;
    .selectMode {
      display: flex;
      justify-content: center;
      gap: 13px;
    }
    .quickJoin {
      display: grid;
      grid-template-rows: calc(100% - 42px - 24px) auto;
      jutify-content: center;
      .lobby {
        display: grid;
        grid-template-columns: 112px 112px 112px;
        grid-auto-rows: min-content;
        height: calc(550px - 66px);
        gap: 24px;
        overflow-y: scroll;
        .list-lobby {
          width: 112px;
          height: 124px;
          background-color: #dedbe2;
          border-radius: 12px;
        }
      }
      .refresh {
        display: flex;
        align-items: end;
      }
    }
    .joinWithIDSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      .inputID {
        height: 50px;
        background-color: #e6e6e6;
        border: 1px solid #000;
        border-radius: 12px;
        font-size: 16px;
        font-family: 'Audiowide', sans-serif;
        font-weight: 400;

        text-align: center;
      }
    }
  }
`;
