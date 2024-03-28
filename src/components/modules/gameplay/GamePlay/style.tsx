import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const GamePlayWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: calc((100vh) - 48px);
  width: calc((100vw) - 48px);
  background-image: url(${getPublicPath('/background/PlanetBG.png')});
  padding: 24px;

  z-index: 1;
`;
export const TopSectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 24px;

  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    text-align: center;
    .score {
      color: #fff;

      color: white;
      font-size: 36px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
`;
