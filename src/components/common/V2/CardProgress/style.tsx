import styled from '@emotion/styled';

export const CardProgressWrapper = styled.div`
  width: calc(100% - 48px);
  height: calc(123px - 48px);
  padding: 24px;

  background-color: #fff;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  .top {
    display: flex;
    justify-content: space-between;
    height: calc(50% - 12px);
    color: #262956;
    font-size: 24px;
    font-family: Passion One;
    font-weight: 400;
    word-wrap: break-word;
    .max-score {
      font-size: 16px;
    }
  }

  .bottom {
    height: calc(50% - 12px);

    width: 100%;
    backgroun-color: #e6e6e6;
    border-radius: 8px;
    .progress {
      width: ${({ progress }: { progress: string }) => progress}%;
      height: 100%;
      background-color: #dc672e;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
`;
