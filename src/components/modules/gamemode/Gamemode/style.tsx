import styled from '@emotion/styled';

export const GameModeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  gap: 24px;
  height: 100vh;
  .top-section {
    display: flex;
    padding: 16px;

    .profile {
      align-items: start;
    }
    .score {
      color: #fff;
      align-items: center;
      font-size: 36px;
      font-family: Audiowide;
    }
    .setting {
      align-items: end;
    }
  }
  .mode-section {
    display: flex;
    justify-content: center;
    .swiper {
      width: 110%;
      height: 100%;
      overflow: visible;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-slide-active {
      overflow: visible;
      scale: 1.1;
      z-index: 10;
    }
  }

  .bottom-section {
    height: 100%;

    .scoreboard {
      padding: 0 16px 16px 16px;
    }
    .play-section {
      align-items: end;
      justify-content: end;
      padding: 16px;
      .play {
        display: flex;
        align-items: center;
        gap: 24px;
        font-size: 36px;
        font-family: Audiowide;
        border-radius: 32px;
        cursor: pointer;
        border: 0;
        color: #fff;
        padding: 16px 32px;
        width: 232px;
        height: 78px;
        background: linear-gradient(90deg, #eba029 0%, #fb580c 100%);
        transition: 0.25s ease-out 100ms;
        :hover {
          scale: 1.1;
        }
      }
    }
  }
`;
