import styled from '@emotion/styled';

export const GamePlayWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 27px;
  max-height: 100vh;
  z-index: 1;
`;
export const TopSectionWrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  gap: 56px;
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
