import styled from '@emotion/styled';

export const AnimationSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 1;
  .player {
    display: flex;
    flex-direction: column;
    .health-bar {
      background-color: white;
      border-radius: 16px;
      height: 16px;
      width: 100%;
      padding: 4px;
      .health {
        ${({
          playerHealth,
          enemyHealth
        }: {
          playerHealth?: number;
          enemyHealth?: number;
        }) => {
          return `
        width: ${playerHealth ?? 0}%;
        transition: 0.5s;
        height: 100%;
        max-width: 100%;
        border-radius: 16px;
        background-color: #0fa958;
      }
    }
  }
  .enemy {
    display: flex;
    flex-direction: column;
    .health-bar {
      background-color: white;
      border-radius: 16px;
      height: 16px;
      width: 100%;
      padding: 4px;
      .health {
        transition: .5s;
        height: 100%;
        width: ${enemyHealth ?? 0}%;
        border-radius: 16px;
        max-width: 100%;
        background-color: #B11F1F;
      }
    }
  }`;
        }}
`;
