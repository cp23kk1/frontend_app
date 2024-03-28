import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const MultiplayerResultWrapper = styled.div`
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
    .button {
      width: calc((2 / 24) * 100%);
    }
    .topic {
      text-align: center;
      div {
        color: white;
        font-size: 36px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
      }
      div + div {
        color: #f8d34d;
        font-size: 48px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
      }
    }
  }
  .main-content {
    width: 100%;
    height: calc((11 / 12) * 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .leader-board-wrap {
      width: 100%;
      height: calc((11 / 12) * 100%);
      display: flex;
      align-items: end;
      justify-content: center;
      .leader-board {
        width: calc((8 / 24) * 100%);
        height: calc((11.6 / 12) * 100%);

        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-template-rows: 1fr 2fr repeat(5, 51px);
        row-gap: 16px;
        column-gap: 16px;
        .podium {
          height: calc(65% - 16px);
          width: 100%;
          padding: 16px 0;
          text-align: center;
          background-color: #393d73;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          .display-name {
            color: white;
            font-size: 24px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
          }
          .score {
            color: white;
            font-size: 48px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
            div + div {
              color: white;
              font-size: 16px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
            }
          }
        }

        .no-1 {
          grid-column: 2;
          grid-row: span 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          aling-items: center;
          .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            align-self: center;
            border: 4px solid #fff;
          }
        }
        .no-2 {
          grid-column: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          aling-items: center;
          .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            align-self: center;
            border: 4px solid #fff;
          }
          .podium {
            height: 65%;
            width: 100%;
            background-color: #393d73;
            border-radius: 12px;
          }
        }
        .no-3 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          aling-items: center;
          .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            align-self: center;
            border: 4px solid #fff;
          }
          .podium {
            height: 65%;
            width: 100%;
            background-color: #393d73;
            border-radius: 12px;
          }
        }
        .player {
          grid-column: span 3;
          display: flex;
          padding: 0 24px;
          background-color: #393d73;
          border-radius: 12px;
          align-items: center;
          color: white;
          font-size: 20px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
          .profile-pic {
            height: 36px;
            width: 36px;
            border-radius: 50%;
          }
          .rank {
            width: calc((1 / 12) * 100%);
          }
          .display-name-wrap {
            width: calc((8 / 12) * 100%);
            display: flex;
            align-items: center;
            gap: 14px;
          }
          .score {
            width: calc((3 / 12) * 100%);
            display: flex;
            justify-content: end;
          }
        }
      }
    }

    .button-play-again {
      width: 100%;
      height: calc((1 / 12) * 100%);
      .host {
        display: flex;
        justify-content: end;
      }
      .joiner {
        display: flex;
        align-items: end;
        justify-content: center;
        height: 100%;

        color: white;
        font-size: 24px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
      }
    }
  }
`;
