import styled from '@emotion/styled';

export const ModalTutorialWrapper = styled.div`
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
    height: calc((1 / 12) * 100%);
    color: #f8d34d;
    font-size: 36px;
    font-family: Passion One;
    font-weight: 400;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
  }
  .carousel {
    height: calc((12 / 12) * 100%);
    width: calc(100%);

    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;

      font-weight: bold;
      width: 10px;
      height: 10px;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: #fff;
      margin: 0 16px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;

      display: flex;
      justify-content: center;
      align-items: start;
    }

    .carousel-card {
      height: calc((10 / 12) * 100% - 48px);
      width: calc((22 / 24) * 100% - 48px);
      background-color: #fff;
      border-radius: 12px;
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
    }
  }
`;
