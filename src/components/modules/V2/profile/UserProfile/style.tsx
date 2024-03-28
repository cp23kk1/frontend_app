import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const UserProfileWrapper = styled.div`
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
    .topic {
      color: #ffd058;
      font-size: 36px;
      font-family: Nabla;
      font-weight: 400;
      word-wrap: break-word;
    }
  }

  .main-content {
    width: 100%;
    height: calc((11 / 12) * 100%);
    .page-mode {
      display: flex;
      justify-content: center;
      height: calc((1 / 12) * 100%);
      gap: 24px;
      align-items: center;
    }
    .changeable-content {
      height: calc((11 / 12) * 100%);
      width: 100%;
      position: relative;
      .overall-stats {
        width: 100%;
        height: 100%;
        display: flex;

        align-items: center;
        justify-content: center;

        .divided-stats {
          width: calc((20 / 24) * 100%);
          height: calc((10 / 12) * 100%);

          display: flex;
          gap: 24px;

          .circle-stats {
            width: calc(50% - 12px - 48px);
            height: calc(100% - 48px);
            padding: 24px;
            border-radius: 36px;
            background-color: #393d73;
            gap: 24px;

            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-template-rows: repeat(2, auto);
            .overall-accuracy {
              grid-column: 1 / span 3;
              background-color: #fff;
              border-radius: 24px;
              width: calc(100% - 48px);
              height: calc(100% - 48px);
              padding: 24px;

              display: grid;
              grid-template-columns: repeat(3, auto);
              gap: 24px;

              .pie-chart {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                  position: relative;
                  .score {
                  position: absolute;
                  display: flex;
                  justify-content: end;
                  align-items: end;
                    z-index: 1;
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%); 
                    color: white; font-size: 36px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
                    .correct-answers {
                      color: white; font-size: 48px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
                  }
                  
                  }
                
              }
              .detail {
                grid-column: 2 / span 2;
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-rows: repeat(2, auto);

                .topic {
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  color: #262956;
                  font-size: 48px;
                  font-family: Passion One;
                  font-weight: 400;
                  word-wrap: break-word;
                }
                .overall-percent {
                  text-align: center;

                  color: #45ca9a;
                  font-size: 96px;
                  font-family: Passion One;
                  font-weight: 400;
                  word-wrap: break-word;
                }
              }
            }

            .sperated-accuracy {
              grid-column: 1 / span 3;
              height: calc(100% - 48px);
              width: 100%;
              display: grid;
              gap: 25px;
              grid-template-columns: repeat(3, auto);
              .card {
                display: flex;
                width: 100%;
                height: calc(100% - 48px);
                background-color: #fff;
                flex-direction: column;
                gap: 24px;
                padding: 24px 0;
                border-radius: 24px;

                justify-content: center;
                align-items: center;
                .topic {
                  color: #262956;
                  
                  font-size: 24px;
                  font-family: Passion One;
                  font-weight: 400;
                  word-wrap: break-word;
                }
                .small-chart {
                  position: relative;
                  .percent {
                    position: absolute;
                    z-index: 1;
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%); 
                    color: white; font-size: 36px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
                  }
                }
                .score {
                  color: #262956; font-size: 24px; font-family: Passion One; font-weight: 400; word-wrap: break-word">750</span><span style="color: #262956; font-size: 16px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
                }
                .correct-answers {
                  color: #262956; font-size: 24px; font-family: Passion One; font-weight: 400; word-wrap: break-word">750</span><span style="color: #262956; font-size: 24px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
                }
              }
            }
          }
          .bar-stats {
            width: calc(50% - 12px - 48px);
            height: calc(100% - 48px);
            padding: 24px;
            border-radius: 36px;
            background-color: #393D73;

            display: grid;
            grid-template-columns: repeat(2,auto);
            gap: 24px;
            overflow-y: scroll;

            .topic {
              grid-column: 1 / span 2;
              color: white; font-size: 36px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
              text-align:center;
            }
          }
        }
      }
      .account {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .profile-card {
          width: calc((12 / 24) * 100% - 48px);
          height: calc((8 / 12) * 100% - 48px);
          background-color: #393d73;
          border-radius: 24px;
          padding: 24px;

          display: grid;
          grid-template-rows: repeat(4, auto);
          gap: 24px;
          .bottom-card {
            display: flex;
            justify-content: space-between;
            align-items: end;
            color: #9ea3e8;
            font-size: 16px;
            font-family: Comfortaa;
            font-weight: 700;
            word-wrap: break-word;
          }
          .associate {
            .google-card {
              height: calc(106px - 48px);
              width: calc(307px - 48px);
              border-radius: 12px;
              background-color: #262956;

              display: flex;
              flex-direction: column;
              padding: 24px;
              gap: 16px;
              .topic {
                display: flex;
                align-items: center;
                gap: 8px;
                color: white;
                font-size: 16px;
                font-family: Comfortaa;
                font-weight: 700;
                word-wrap: break-word;
              }
              .email {
                color: #9ea3e8;
                font-size: 16px;
                font-family: Comfortaa;
                font-weight: 700;
                word-wrap: break-word;
              }
            }
          }
          .user-card {
            grid-row: 1 / 3;
            height: calc(100% - 48px);
            background-color: #262956;
            border-radius: 12px;
            padding: 24px;

            display: grid;
            grid-template-columns: repeat(3, auto);
            grid-template-rows: repeat(2, auto);
            .edit {
              display: flex;
              justify-content: end;
              color: white;
              font-size: 24px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
              cursor: pointer;
              :hover {
                text-decoration: underline;
              }
            }
            .user-info {
              grid-column: span 2;
              grid-row: span 2;
              display: flex;
              align-items: center;
              gap: 32px;
              color: white;
              font-size: 36px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
              img {
                width: 154px;
                height: 154px;
                border-radius: 50%;
                border: 4px solid #fff;
              }
            }
          }
        }
      }
    }
  }
`;
