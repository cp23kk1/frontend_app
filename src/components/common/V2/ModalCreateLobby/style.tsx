import styled from '@emotion/styled';

export const CreateLobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #230052;
  height: 720px;

  gap: 17px;
  .header {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-family: 'Nabla', sans-serif;
    width: 100%;
  }
  .contents {
    display: grid;
    flex-direction: column;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    height: 100%;
    width: 100%;
    max-width: 384px;

    gap: 24px;

    input,
    select {
      border: 2px solid #000;
      border-radius: 12px;
      height: 100%;
      width: 100%;
      max-width: 180px;
      font-size: 16px;
      font-family: 'Comfortaa', sans-serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
      padding: 6px 5px;
    }
    .categories,
    .quantity,
    .private {
      display: flex;
      gap: 21px;
      algin-items: center;
    }
    .top {
      display: flex;
      flex-direction: column;
      gap: 40px;
      font-size: 16px;
      font-family: 'Comfortaa', sans-serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
      div,
      label {
        display: flex;
        align-items: center;
      }
    }
  }
`;
