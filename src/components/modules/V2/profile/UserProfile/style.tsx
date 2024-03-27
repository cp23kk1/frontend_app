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
