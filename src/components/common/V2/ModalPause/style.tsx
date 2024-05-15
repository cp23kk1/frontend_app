import styled from '@emotion/styled';

export const ModalPauseWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: calc(720px - 48px);
  max-width: calc(1280px - 48px);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #262956;
  border: 0;

  .topic {
    width: 100%;
    height: calc((1 / 12) * 100%);
    color: #f8d34d;
    font-size: 36px;
    font-family: Passion One;
    font-weight: 400;
    word-wrap: break-word;
    display: flex;
    justify-content: center;
  }
  .main {
    width: calc(100% - 48px);
    height: calc((9 / 12) * 100%);
    background-color: #fff;
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .header {
      display: flex;
      justify-content: start;
      color: #262956;
      font-size: 24px;
      font-family: Passion One;
      font-weight: 400;
      word-wrap: break-word;
    }
    .content {
      width: calc(100% - 48px);
      height: calc((2 / 9) * 100%);
      background-color: #e6e6e6;
      padding: 24px;
      border-radius: 8px;
      display: flex;
      flex-wrap: wrap;
      .input {
        display: flex;
        align-items: center;
        gap: 24px;
        .value {
          width: 64px;
          display: flex;
          justify-content: end;
        }
        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          outline: none;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
          overflow: hidden;
          border-radius: 4px;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 8px;
          height: 8px;
          background: #393d73;
          cursor: pointer;
          box-shadow: -1000px 0 0 1000px #393d73;
        }
        .slider::-moz-range-thumb {
          appearance: none;
          width: 20px;
          height: 0px;
          background: #393d73;
          cursor: pointer;
          box-shadow: -1000px 0 0 1000px #393d73;
        }
      }
      .master {
        flex-basis: 100%;
        display: flex;
        color: #393d73;
        font-size: 20px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
        justify-content: space-between;
        align-items: center;
        .panel {
          width: calc((7 / 8) * 100%);
        }
      }
      .sfx,
      .music {
        display: flex;
        color: #393d73;
        font-size: 20px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
        flex-basis: 50%;
        align-items: center;
        .panel {
          width: calc((6 / 8) * 100%);
        }
      }
    }

    // .content {
    //   width: calc(100% - 48px);
    //   height: 100%;
    //   background-color: #e6e6e6;
    //   padding: 24px;
    //   border-radius: 8px;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-between;
    //   .input {
    //     display: flex;
    //     align-items: center;
    //     gap: 24px;
    //     .value {
    //       width: 64px;
    //       display: flex;
    //       justify-content: end;
    //     }
    //     .slider {
    //       -webkit-appearance: none;
    //       width: 100%;
    //       height: 8px;
    //       outline: none;
    //       -webkit-transition: 0.2s;
    //       transition: opacity 0.2s;
    //       overflow: hidden;
    //       border-radius: 4px;
    //     }

    //     .slider::-webkit-slider-thumb {
    //       appearance: none;
    //       width: 8px;
    //       height: 8px;
    //       background: #393d73;
    //       cursor: pointer;
    //       box-shadow: -1000px 0 0 1000px #393d73;
    //     }
    //     .slider::-moz-range-thumb {
    //       appearance: none;
    //       width: 20px;
    //       height: 0px;
    //       background: #393d73;
    //       cursor: pointer;
    //       box-shadow: -1000px 0 0 1000px #393d73;
    //     }
    //   }
    // }
    // .master {
    //   width: 100%;
    //   display: flex;
    //   align-items: center;
    //   color: #393d73;
    //   font-size: 20px;
    //   font-family: Passion One;
    //   font-weight: 400;
    //   word-wrap: break-word;
    //   .panel {
    //     width: calc((11 / 12) * 100%);
    //   }
    //   .master-head {
    //     width: calc((1 / 12) * 100%);
    //   }
    // }
    // .bottom {
    //   width: 100%;
    //   display: flex;
    //   align-items: center;
    //   color: #393d73;
    //   font-size: 20px;
    //   font-family: Passion One;
    //   font-weight: 400;
    //   word-wrap: break-word;
    //   gap: 24px;
    //   .sfx,
    //   .music {
    //     width: 50%;
    //     display: flex;
    //     align-items: center;
    //     .panel {
    //       width: 100%;
    //     }
    //   }
    // }
  }
  .buttom-button {
    display: flex;
    justify-content: center;
    align-items: end;
    height: calc((2 / 12) * 100%);
    .tutorial {
      color: white;
      font-size: 20px;
      font-family: Passion One;
      font-weight: 400;
      cursor: pointer;
      word-wrap: break-word;
    }
    .button {
      display: flex;
      gap: 24px;
    }
  }
`;
