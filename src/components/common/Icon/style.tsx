import styled from '@emotion/styled';

export const IconDiv = styled.div`
  ${({ size, color }: { size: number; color?: string }) => {
    return `
        display: inline-flex;
        align-self: center;
        align-items: center;
        div > div {
          display: flex;
          align-items: center;
        }
        div > div > svg {
          width: ${size}px;
          height: ${size}px;
        }
        ${
          color
            ? `div > div > svg > path {
          fill: ${color};
        }`
            : ''
        }       
        `;
  }}
`;
