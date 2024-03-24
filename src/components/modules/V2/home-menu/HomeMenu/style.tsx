import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  padding: 24px;
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  background-image: url(${getPublicPath('/background/BackgroundSpace3.png')});

  .top {
    display: flex;
    color: white;
    justify-content: space-between;
    height: calc((1 / 12) * 100%);
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
      padding: 12px 0;
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
    .tutorial {
      color: white;
      font-size: 16px;
      font-family: Audiowide;
      font-weight: 400;
      word-wrap: break-word;
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
