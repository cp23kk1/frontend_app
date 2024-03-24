import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const NewLandingWrapper = styled.div`
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  padding: 24px;
  position: relative;
  background-image: url(${getPublicPath('/background/BackgroundSpace3.png')});

  display: grid;
  grid-template-rows: calc(100% - 16px) auto;
  .main-content {
    height: 100%;
    width: 100%;
    .title {
      height: calc((5 / 12) * 100%);
      display: flex;
      align-items: end;
      justify-content: center;
      color: #f8d34d;
      font-size: 128px;
      font-family: Nabla;
      font-weight: 400;
      word-wrap: break-word;
    }
    .subtitle {
      height: calc((1 / 12) * 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e5e6fa;
      font-size: 16px;
      font-family: Comfortaa;
      font-weight: 700;
      word-wrap: break-word;
    }
    .description {
      height: calc((1 / 12) * 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
      font-size: 20px;
      font-family: Comfortaa;
      font-weight: 700;
      word-wrap: break-word;
    }
    .begin {
      height: calc((2 / 12) * 100%);
      color: #fff;
      display: flex;
      align-items: end;
      justify-content: center;

      .button-begin {
        display: flex;
        gap: 16px;
        .button {
          color: #fff;
          font-size: 36px;
          font-family: Passion One;
          font-weight: 700;
          word-wrap: break-word;
          border: 4px solid #fff;
          border-radius: 12px;
          padding: 12px 16px;\
          transition: .2s;
          :hover {
            cursor: pointer;
            border: 4px solid #f8d34d;
            background-color: #f8d34d;
            color: #262956;
          }
        }
      }
    }
  }

  .bottom-content {
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
    font-size: 16px;
    font-family: Comfortaa;
    font-weight: 700;
    word-wrap: break-word;
    span {
      color: #7293e4;
      cursor: pointer;
    }
  }
`;
