import styled from '@emotion/styled';

export const ModalBriefInfoWrapper = styled.div`
  width: calc(1280px - 48px);
  height: calc(720px - 48px);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #262956;
  border: 0;
  .topic {
    width: 100%;
    height: calc((2 / 12) * 100%);
    display: flex;
    justify-content: start;
    .modal-topic {
      height: 77px;
      background-color: #393d73;
      color: white;
      font-size: 48px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
    }
  }
  .content {
    height: calc((10 / 12) * 100% - 48px);
    width: calc(100% - 48px);
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    .main-content {
      padding: 0 24px;
    }
    .pos {
      height: calc((1 / 10) * 100%);
      width: 100%;
      overflow-x: scroll;
      display: flex;
      gap: 16px;

      .button {
        color: #393d73;
        font-size: 16px;
        font-family: Comfortaa;
        font-weight: 700;
        word-wrap: break-word;
        border-radius: 8px;
        border: 2px solid #393d73;
        width: fit-content;
        padding: 8px 12px;
        :hover {
          color: #fff;
          background-color: #393d73;
          cursor: pointer;
        }
      }
      .selected {
        color: #fff;
        background-color: #393d73;
        cursor: pointer;
      }
    }
  }
`;
