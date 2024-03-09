import styled from '@emotion/styled';

export const SettingModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;

  .character-frame {
    display: flex;
    background-color: #f5f5f5;
    gap: 64px;
    border-radius: 24px;
    height: 100%;
    justify-content: end;
    .character {
      display: flex;
      align-items: end;
      justify-content: center;
    }
    .button {
      display: flex;
      justify-content: center;
      padding: 16px 0;
      .change {
        border: 0;
        padding: 12px 16px;
        font-size: 20px;
        font-family: Audiowide;
        color: #fff;
        background-color: black;
        border-radius: 16px;
      }
    }
  }

  .setting-frame {
    display: flex;
    align-items: center;
    gap: 68px;
    font-family: Audiowide;
    .header {
      font-size: 36px;
    }
    .panel {
      display: flex;
      flex-direction: row;
      gap: 32px;
      font-size: 24px;
      width: 90%;

      .text-panel {
        display: flex;
        flex-direction: column;
        gap: 36px;
        div {
          padding: 14.5px 0;
        }
      }
      .setting-panel {
        display: flex;
        flex-direction: column;
        gap: 36px;

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
            width: 66%;
            height: 4px;
            background: black;
            outline: none;
            -webkit-transition: 0.2s;
            transition: opacity 0.2s;
          }
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: black;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: black;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
