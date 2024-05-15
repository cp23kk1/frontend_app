import styled from '@emotion/styled';
import { TTab } from './type';

export const TabWrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 24px 24px 0px 0px;

  color: #000;

  /* SemiBold-32 */
  font-family: Passion One;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ${({ isSelected }: { isSelected: boolean }) => {
    return isSelected ? `background: #fff;` : `background: #c6c6c6;`;
  }}
`;
