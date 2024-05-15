import styled from '@emotion/styled';

export const ErrorWraper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  .header {
    color: red;
    font-size: 60px;
    font-family: Audiowide;
  }
  .description {
    font-size: 24px;
    font-family: Audiowide;
  }
`;
