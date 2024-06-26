import styled from '@emotion/styled';

export const SummaryResultWrapper = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;

  font-family: Passion One;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .gameover-header {
    text-align: center;
    -webkit-text-stroke: 4px #ffffff;
    color: #e40714;

    /* Audiowide/Regular-96 */
    font-family: Passion One;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .score {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .current-score {
    display: inline-flex;
    padding: 24px;
    gap: 10px;
    border-radius: 32px;
    background-color: #fff;
    box-shadow: 8px -4px 0px 0px rgba(0, 0, 0, 0.25) inset;
    color: #000;
  }
  .mode {
    text-align: start;
  }
  .best-score {
    text-align: end;
  }
  .headers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding-top: 32px;
    width: 100%;
  }
  .header {
    width: 100%;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .options {
    width: 512px;
  }
`;
