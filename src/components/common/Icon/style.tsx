import styled from '@emotion/styled';

export const IconImg = styled.img`
  ${({ size, onClick }: { size: number; onClick?: () => void }) => {
    let css =
      size > 0
        ? `width: ${size}px;
height: ${size}px;`
        : '';
    css += onClick ? 'cursor: pointer;' : '';
    return css;
  }}
`;
