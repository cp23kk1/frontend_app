import styled from '@emotion/styled';

export const GameModeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  gap: 24px;
  height: 96.6vh;
  padding: 16px;
  justify-content: center;
  .top-section {
    display: flex;

    .profile {
      align-items: start;
    }
    .profile > div {
      width: 30%;
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
    align-items: center;
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
    .swiper-slide-active > div {
      border: 8px solid #fff;
      background: linear-gradient(
        180deg,
        rgba(35, 0, 82, 0) 0%,
        #842249 64.58%,
        #ff5a0a 100%,
        #ff5a0a 100%
      );
    }
  }

  .bottom-section {
    height: 100%;
    .scoreboard {
      justify-content: end;
    }
    .play-section {
      align-items: end;
      justify-content: end;
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
