import styled from '@emotion/styled';

export const PlayButtonWrapper = styled.button`
  display: flex;
  gap: 16px;
  border-radius: 12px;
  background-color: #f8d34d;
  color: #262956;
  padding: 12px 16px;
  color: #262956;
  font-size: 36px;
  font-family: Passion One;
  font-weight: 400;
  word-wrap: break-word;
  border: 0;
  :disabled {
    opacity: 0.5;
  }
  ${({ disabled }: { disabled?: boolean }) => {
    return disabled
      ? ''
      : `:hover {
    cursor: pointer;
    background-color: #262956;
    color: #f8d34d;
    div > svg > path {
      fill: #f8d34d;
    }
  }`;
  }}
`;
