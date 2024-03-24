import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const MultiplayerGameplayWrapper = styled.div`
  padding: 24px;
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  background-image: url(${getPublicPath('/background/BackgroundSpace1.png')});

  .top {
    display: flex;
    justify-content: space-between;
    height: calc((1 / 12) * 100%);
    .round {
      color: white;
      font-size: 48px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
  .main {
    display: flex;
    align-items: center;
    gap: 78px;
    height: calc((11 / 12) * 100%);
    .list-player {
      width: calc((4 / 24) * 100%);
    }
    .question-multiplayer {
      width: calc((18 / 24) * 100%);
    }
  }
`;
