import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  background: linear-gradient(180deg, rgba(35, 0, 82, 0) 8.85%, #230052 100%);
  border-radius: 32px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 32px;
    width: 320px;
    height: 448px;
    padding: 12px;
    cursor: pointer;
    gap: 24px;

    .card-icon {
      width: 240px;
      height: 240px;
    }
    .card-content {
      padding: 48px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
      height: 100%;
      .mode-name {
        color: #fff;
        font-family: Audiowide;
        font-size: 28px;
      }
      .mode-subtitle {
        text-align: center;
        color: #fff;
        font-family: Fredoka;
        font-size: 20px;
        width: 100%;
        height: 40%;
        overflow-wrap: break-word;
        overflow-x: scroll;
      }
    }
  }
`;
