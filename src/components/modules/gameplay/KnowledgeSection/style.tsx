import styled from '@emotion/styled';

export const KnowLedgeSectionWrapper = styled.div`
  width: auto;
  height: calc((12 / 12) * 100vh);
  padding: 16px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.5);
  gap: 5vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow-x: scroll;
  .answer-layout {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    flex-wrap: wrap;
    .answer {
      width: 30%;
    }
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
