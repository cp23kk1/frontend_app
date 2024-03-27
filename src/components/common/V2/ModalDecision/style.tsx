import styled from '@emotion/styled';

export const ModalDecisionWrapper = styled.button`
  width: calc(640px - 48px);
  height: calc(360px - 48px);
  border-radius: 24px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  background-color: #393d73;
  border: 0;

  .content {
    grid-column: 1/3;
    grid-row: 1/3;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 48px;
    font-family: Passion One;
    font-weight: 400;
    word-wrap: break-word;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .buttons {
    grid-column: 1/3;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, calc(50% - 12px));
    gap: 24px;
    .yes {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      background-color: #45ca9a;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      border: 4px solid transparent;
      align-items: center;

      color: white;
      font-size: 36px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
      cursor: pointer;
      :hover {
        border: 4px solid #fff;
        color: #075338;
      }
    }
    .no {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      background-color: #cc4949;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 4px solid transparent;
      color: white;
      font-size: 36px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
      cursor: pointer;
      :hover {
        border: 4px solid #fff;
        color: #770000;
      }
    }
  }
`;
