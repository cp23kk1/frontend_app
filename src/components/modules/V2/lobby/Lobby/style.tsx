import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const JoinCreateLobbyWrapper = styled.div`
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  padding: 24px;
  position: relative;
  background-image: url(${getPublicPath('/background/BackgroundSpace3.png')});

  diplay: flex;
  flex-direction: column;
  .top-content {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .menu {
      display: flex;
      gap: 64px;
      padding: 12px 16px;
      color: white;
      font-size: 20px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
      height: calc((1 / 12) * 100%);
      div {
        :hover {
          cursor: pointer;
          color: #f8d34d;
          font-size: 20px;
          font-family: Passion One;
          font-weight: 400;
          text-decoration: underline;
          word-wrap: break-word;
        }
      }
      .menu-selected {
        color: #f8d34d;
        font-size: 20px;
        font-family: Passion One;
        font-weight: 400;
        text-decoration: underline;
        word-wrap: break-word;
      }
    }

    .play-quick-button {
      display: flex;
      justify-content: end;
    }
    .button {
      width: calc((3 / 24) * 100%);
    }
  }

  .main-content {
    width: 100%;
    height: calc((11 / 12) * 100%);
    .join-with-id .create-lobby {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .label {
        height: calc((4 / 11) * 100%);
        display: flex;
        align-items: end;
        color: #9ea3e8;
        font-size: 48px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
      }
      .input {
        height: calc((2 / 11) * 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 24px 0;

        input {
          width: calc((6 / 24) * 100% - 48px);
          border: 0;
          padding: 24px 48px;
          border-radius: 24px;
          color: rgba(38, 41, 86, 0.5);
          font-size: 64px;
          font-family: Passion One;
          font-weight: 400;
          letter-spacing: 32px;
          word-wrap: break-word;
          text-align: center;
          ::placeholder {
            color: rgba(38, 41, 86, 0.5);
          }
        }
      }
      .join-button {
        height: calc((1 / 11) * 100%);
        display: flex;
        align-items: end;
      }
    }
  }
`;
