import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const BackgroundSummaryWrapper = styled.div`
  background: #28005b;
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${getPublicPath('/background/BackgroundSpace3.png')});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  top: 0;
  left: 0;
`;
