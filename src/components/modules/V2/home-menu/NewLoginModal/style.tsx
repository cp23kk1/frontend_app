import styled from '@emotion/styled';

export const NewLoginModalWrapper = styled.div`
  position: relative;
  height: calc(720px - 32px);
  width: calc((18 / 24) * 100vw - 32px);
  padding: 16px;
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  gap: 24px;
  border-radius: 24px;
  background-color: #fff;
  .image {
    height: 100%;
    width: 100%;
    border-radius: 16px;
    background-color: #d9d9d9;
  }
  .login-content {
    display: grid;
    grid-template-rows: calc(100% - 16px) auto;
    .login {
      .title {
        height: calc((4 / 12) * 100%);
        display: flex;
        align-items: end;
        justify-content: center;
        color: #262956;
        font-size: 24px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
      }
      .google {
        height: calc((2 / 12) * 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .guest {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .bottom-content {
      display: flex;
      justify-content: center;
      width: 100%;
      color: #262956;
      font-size: 16px;
      font-family: Comfortaa;
      font-weight: 700;
      word-wrap: break-word;
      span {
        color: #7293e4;
        cursor: pointer;
      }
    }
  }
`;
