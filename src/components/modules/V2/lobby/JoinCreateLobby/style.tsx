import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const JoinCreateLobbyWrapper = styled.div`
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

    .menu {
      display: flex;
      gap: 64px;
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

    .create-lobby {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 80px;
      .game-setting {
        width: calc((8 / 24) * 100% - 96px);
        height: calc(100% - 48px);
        background-color: #393d73;
        border-radius: 24px;
        padding: 24px 48px;

        display: flex;
        flex-direction: column;
        gap: 75px;
        .title {
          text-align: center;
          color: white;
          font-size: 36px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
        }
        .setting {
          display: flex;
          flex-direction: column;
          gap: 32px;
          color: white;
          font-size: 24px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;

          .speed {
            display: flex;
            align-items: center;
            gap: 24px;
            .input-speed {
              display: flex;
              border-radius: 8px;
              border: 1px solid #9ea3e8;
              overflow: hidden;

              .selected {
                background-color: #9ea3e8;
              }

              div {
                padding: 8px 12px;
                cursor: pointer;

                :hover {
                  background-color: #9ea3e8;
                }
              }
            }
          }

          .number-question {
            display: flex;
            gap: 24px;
            .input-num {
              display: flex;
              gap: 16px;
            }
          }

          .mode-select {
            display: flex;
            flex-direction: column;
            padding: 0 24px;
            gap: 24px;

            .input-radio input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
            }
            .input-radio {
              position: relative;
              padding-left: 35px;
              cursor: pointer;
            }

            /* Create a custom radio button */
            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              height: 24px;
              width: 24px;
              background-color: #9ea3e8;
              border-radius: 50%;
            }

            /* On mouse-over, add a grey background color */
            .input-radio:hover input ~ .checkmark {
              background-color: #9ea3e8;
            }

            /* When the radio button is checked, add a blue background */
            .input-radio input:checked ~ .checkmark {
              background-color: #9ea3e8;
            }

            /* Create the indicator (the dot/circle - hidden when not checked) */
            .checkmark:after {
              content: '';
              position: absolute;
              display: none;
            }

            /* Show the indicator (dot/circle) when checked */
            .input-radio input:checked ~ .checkmark:after {
              display: block;
            }

            /* Style the indicator (dot/circle) */
            .input-radio .checkmark:after {
              top: 6px;
              left: 6px;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: white;
            }
          }
        }
      }

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
            // .container {
            //   display: flex;
            //   flex-direction: column;
            //   gap: 8px;
            // }
            .container {
              position: relative;
            }
            .kick-button {
              background-color: red;
              color: white;
              font-size: 20px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
              padding: 8px 16px;
              border-radius: 12px;
            }
            .middle {
              transition: 0.2s ease;
              opacity: 0;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              text-align: center;
              cursor: pointer;
            }
            .container:hover .profile-image {
              opacity: 0.5;
            }
            .container:hover .middle {
              opacity: 1;
            }
            .profile-image {
              transition: 0.2s ease;
              width: 120px;
              height: 120px;
              border-radius: 50%;
            }
          }
        }
      }
    }

    .join-with-id {
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
