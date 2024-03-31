import styled from '@emotion/styled';

export const TableLayoutWrapper = styled.div`
  width: 100%;
  height: 464px;
  overflow-y: scroll;
  border-radius: 12px
  border: 1px solid #f5f5f5;
  .header {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 60px;
    background: #e1e1e1;
    
    color: #000;

    /* Fredoka/SemiBold-24 */
    font-family: Fredoka;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .record {
    display: flex;
    width: 100%;
    height: fit-content;

    color: black;

    /* Fredoka/Regular-24 */
    font-family: Fredoka;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    :nth-child(even) {
      background: #f5f5f5;
    }
    :nth-child(odd) {
      background: #fff;
    }
  }
  .col {
    justify-content: center;
    align-items: center;
    color: black;
  }
  .record .col {
    justify-content: center;
    align-items: center;
    :nth-child(3) {
      /* Mitr/Light-24 */
      font-family: Mitr;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
  .more-info {
    display: flex;
    flex-direction: row;
    gap: 8px;
    color: #1B61E9;

    /* Fredoka/Regular-20 */
    font-family: Fredoka;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .detail{
    width: 100%;

     /* Fredoka/Regular-20 */
    font-family: Fredoka;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }


`;
