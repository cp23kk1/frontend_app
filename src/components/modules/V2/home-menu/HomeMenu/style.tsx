import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  padding: 24px;
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  background-image: url(${getPublicPath('/background/BackgroundSpace3.png')});
  background-size: cover;

  .top {
    display: flex;
    color: white;
    justify-content: space-between;
    height: calc((1 / 12) * 100vh);
    .vocaverse {
      width: calc((3.5 / 24) * 100%);
      color: #f8d34d;
      font-size: 16px;
      font-family: Nabla;
      font-weight: 400;
      word-wrap: break-word;
      widht: fit-content;
    }
    .menu {
      display: flex;
      width: calc((7 / 24) * 100%);
      justify-content: space-between;
      color: white;
      font-size: 20px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
      width: 100%;
      max-width: 554px;
      .selected {
        color: #f8d34d;
        text-decoration: underline;
      }
      div {
        cursor: pointer;
        :hover {
          color: #f8d34d;
          text-decoration: underline;
        }
      }
    }
    .corner-button {
      display: flex;
      width: calc((3.5 / 24) * 100%);
      justify-content: end;
      gap: 24px;
      button {
        width: 120px;
      }
    }
  }
  .content {
    height: calc((11 / 12) * 100%);
    width: calc(100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .leaderboard {
      width: calc((12 / 24) * 100% - 48px);
      height: calc((11 / 12) * 100% - 48px);
      background-color: #262956;
      border-radius: 24px;
      padding: 24px;
      .topic {
        color: #f8d34d;
        font-size: 36px;
        font-family: Nabla;
        font-weight: 400;
        word-wrap: break-word;
        width: 100%;
        text-align: center;
        height: calc((1 / 12) * 100%);
      }
      .row {
        widht: calc(100% - 48px);
        height: 48px;
        padding: 0 24px;
        border-radius: 12px;
        background-color: #393d73;
        display: flex;
        gap: 24px;
        color: white;
        font-size: 20px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
        .points {
          color: white;
          font-size: 16px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
        }

        .rank,
        .pic {
          width: calc((1 / 8) * 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          .profile-pic {
            height: 24px;
            width: 24px;
            border-radius: 50%;
          }
        }
        .display-name {
          width: calc((4 / 8) * 100%);
          text-align: start;
          display: flex;
          align-items: center;
          overflow: hidden;
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .score {
          width: calc((2 / 8) * 100%);
          display: flex;
          align-items: center;
          justify-content: end;
        }
      }
      .bottom {
        height: calc((2 / 12) * 100%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .current-player {
          height: 48px;
          background-color: #9ea3e8;
          .profile-pic {
            width: 36px;
            height: 36px;
          }
        }
        .profile-pic {
          width: 36px;
          height: 36px;
        }

        .filter {
          display: flex;
          width: 100%;
          align-items: end;
          .left-dropdown-wrapper {
            width: calc((18 / 24) * 100%);
            display: flex;
            align-items: center;
            gap: 16px;
            .selected-week {
              color: white;
              font-size: 20px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
            }
            .week-dropdown {
              width: calc((3 / 18) * 100%);
              .custom-select {
                height: 100%;
                width: 100%;
              }

              select {
                height: 30px;
                color: #393d73;
                font-size: 20px;
                font-family: Passion One;
                font-weight: 400;
                word-wrap: break-word;
                appearance: none;
                /* safari */
                -webkit-appearance: none;
                /* other styles for aesthetics */
                width: 100%;
                font-size: 1.15rem;
                padding: 4px 8px;
                background-color: #fff;
                border: 0;
                border-radius: 8px;
                cursor: pointer;
              }
            }
          }
          .mode-dropdown {
            width: calc((6 / 24) * 100%);
            .custom-select {
              height: 100%;
              width: 100%;
            }

            select {
              height: 30px;
              color: #393d73;
              font-size: 20px;
              font-family: Passion One;
              font-weight: 400;
              word-wrap: break-word;
              appearance: none;
              /* safari */
              -webkit-appearance: none;
              /* other styles for aesthetics */
              width: 100%;
              font-size: 1.15rem;
              padding: 4px 8px;
              background-color: #fff;
              border: 0;
              border-radius: 8px;
              cursor: pointer;
            }
          }
        }
      }
      .list {
        width: 100%;
        height: calc((9 / 12) * 100% - 32px);
        display: flex;
        flex-direction: column;
        gap: 16px;
        overflow-y: scroll;
        padding: 16px 0;

        .no1 {
          background-color: #fff;
          height: 72px;
          color: #393d73;
          font-size: 48px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
          .points {
            color: #393d73;
            font-size: 36px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
          }
          .profile-pic {
            height: 56px;
            width: 56px;
            border-radius: 50%;
          }
        }
        .no2 {
          background-color: #fff;
          height: 64px;
          color: #393d73;
          font-size: 36px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
          .points {
            color: #393d73;
            font-size: 24px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
          }
          .profile-pic {
            height: 48px;
            width: 48px;
            border-radius: 50%;
          }
        }
        .no3 {
          background-color: #fff;
          height: 56px;
          color: #393d73;
          font-size: 24px;
          font-family: Passion One;
          font-weight: 400;
          word-wrap: break-word;
          .points {
            color: #393d73;
            font-size: 20px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
          }
          .profile-pic {
            height: 36px;
            width: 36px;
            border-radius: 50%;
          }
        }
      }
    }
    .tutorial {
      color: white;
      font-size: 20px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
      display: flex;
      cursor: pointer;
      align-items: end;
    }
    .carousel {
      height: calc((11 / 12) * 100%);
      width: calc(100%);
      .swiper-button-next,
      .swiper-button-prev {
        padding: 20px;
        color: #fff;
        font-weight: bold;
        width: 32px;
        height: 18px;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff;
      }
      .swiper-slide {
        text-align: center;
        font-size: 18px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .carousel-card {
        height: calc((10.5 / 12) * 100% - 48px);
        width: calc((20 / 24) * 100% - 48px);
        background-color: #fff;
        border-radius: 48px;
        padding: 24px;
      }
      .comming-soon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #230052;
        font-size: 64px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
      }

      .mode {
        display: grid;
        grid-template-columns: calc((7 / 12) * 100%) calc((5 / 12) * 100%);
        .mode-img {
          width: 100%;
          height: 100%;
          background-color: #d9d9d9;
          border-radius: 36px;
        }
        .mode-content {
          padding: 24px;
          widht: calc(100% - 48px);
          height: calc(100% - 48px);
          display: grid;
          grid-template-columns: auto auto auto;
          grid-template-rows: repeat(8, auto);
          gap: 24px;
          justify-content: start;
          text-align: start;
          .mode-name {
            display: flex;
            align-items: center;
            grid-row: span 2;
            grid-column: span 3;
            color: #230052;
            font-size: 96px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
          }
          .mode-description {
            grid-row: span 4;
            grid-column: span 3;

            color: #230052;
            font-size: 16px;
            font-family: Comfortaa;
            font-weight: 700;
            word-wrap: break-word;
          }
          .mode-extra-info {
            grid-column: span 3;

            display: flex;
            align-items: end;
            color: #230052;
            font-size: 24px;
            font-family: Passion One;
            font-weight: 400;
            word-wrap: break-word;
          }
          .mode-button {
            grid-column: span 3;

            display: flex;
            gap: 24px;
            align-items: end;
          }
        }
      }
    }
  }
`;
