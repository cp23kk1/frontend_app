import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const GamePlayWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: calc((100vh) - 48px);
  width: calc((100vw) - 48px);
  background-image: url(${getPublicPath('/background/PlanetBG.png')});
  background-size: cover;
  padding: 24px;

  z-index: 1;
`;
export const TopSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 24px;

  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: calc((1 / 12) * 100vh);
    .score {
      color: #fff;

      color: white;
      font-size: 36px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;

      overflow-y: visible;
    }

    .extra-wrapper {
      position: relative
      align-items: end;
      overflow: visible;
      .modal-extra-info {
        text-align: start;
        position: absolute;
        padding: 16px;
        height: calc((2 / 12) * 100vh - 32px);
        width: calc((4 / 24) * 100vw - 32px);
        background-color: rgba(255, 255, 255, 0.8);
        right: 0;
        border-radius: 16px;
        z-index: 10;
        .topic {
          color: #262956; font-size: 36px; font-family: Passion One; font-weight: 400; word-wrap: break-word;
        }
        .body {
          color: #393D73; font-size: 16px; font-family: Comfortaa; font-weight: 700; word-wrap: break-word;
          height: 50%;
          overflow-y: scroll;
        }
        .more-button-wrapper{
          display: flex;
          align-items: end;
          width: 100%;
          justify-content: end;
          .more-button {
            border-radius: 8px;
            color: #3271EB; font-size: 16px; font-family: Comfortaa; font-weight: 700; word-wrap: break-word;
            padding: 4px 8px;
            border: 2px solid #3271EB;
            width: fit-content;

            :hover {
              background-color:#3271EB;
              color: #fff;
              cursor: pointer;

            }
          }

        }
      }
    }
  }
`;
