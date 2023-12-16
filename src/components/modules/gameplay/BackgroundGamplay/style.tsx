import { getPublicPath } from '@/utils/basePath';
import styled from '@emotion/styled';

export const BackGroundWrapper = styled.div`
  background: #011135;
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${getPublicPath('/background/Planet_BG.svg')});
  background-position: 0 70px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
