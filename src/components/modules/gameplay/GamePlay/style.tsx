import styled from '@emotion/styled';

export const GamePlayWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  gap: 4vh;
  z-index: 1;
  height: 96.6vh;
`;
export const TopSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    text-align: center;
    .score {
      color: #fff;

      /* Audiowide/Display2-Regular-48 */
      font-family: 'Audiowide', cursive;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
