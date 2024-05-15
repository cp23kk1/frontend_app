import styled from '@emotion/styled';

export const SummarySectionWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  .tabs {
    width: 100%;
  }
  .table-section {
    width: 100%;

    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0px 0px 24px 24px;
  }
  .table {
    width: 100%;
    background-color: #fff;
    border-radius: 0px 0px 24px 24px;
    overflow-y: hidden;
  }
`;
