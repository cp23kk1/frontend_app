import styled from '@emotion/styled';

export const KnowLedgeSectionWrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 16px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.5);
  gap: 5vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
  .answer-layout {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .validate-button {
    background-color: #4681f4;
    color: #fff;
    width: fit-content;
    align-self: center;
    padding: 8px 24px;
    border-radius: 32px;

    font-family: 'Poppins', Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
  }
`;
