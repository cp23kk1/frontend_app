import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const LobbyWrapper = styled.div`
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  padding: 24px;
  position: relative;
  background-image: url(${getPublicPath('/background/BackgroundSpace3.png')});
  background-size: cover;

  diplay: flex;
  flex-direction: column;
  .top-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .main-content {
    width: 100%;
    height: calc((11 / 12) * 100%);
    .join-with-id {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .lobby {
        width: calc((13 / 24) * 100% - 32px);
        height: calc(100% - 32px);
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-template-rows: repeat(4, auto);
        gap: 48px;
        padding: 16px;

        .play-now {
          grid-column-start: 3;
          grid-column-end: 5;

          grid-row-start: 4;
          display: flex;
          justify-content: center;
          align-items: end;
          .ready-button {
            color: white;
            font-size: 36px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;

            width: 132px;
            height: 64px;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
        .invitation {
          grid-column-start: 2;
          grid-column-end: 6;

          display: flex;
          justify-content: center;
          color: #cfd2f6;
          font-size: 48px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
          .room-id {
            display: flex;
            height: fit-content;
            gap: 16px;
            .copy {
              display: flex;
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
        .players {
          grid-column-start: 2;
          grid-column-end: 6;
          grid-row-start: 2;
          grid-row-end: 4;
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: repeat(2, auto);
          gap: 48px;
          .player {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            .text-ready {
              color: #e24955;
              font-size: 20px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
            }
            .ready {
              color: #45ca9a;
            }
            .border-not-ready {
              border: 4px solid #cc4949;
            }
            .border-ready {
              border: 4px solid #45ca9a;
            }
            .profile-name {
              color: white;
              font-size: 20px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
            }
            .profile-image {
              width: 120px;
              height: 120px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;
