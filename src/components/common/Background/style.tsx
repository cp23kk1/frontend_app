import styled from '@emotion/styled';
export const BackGroundImg = styled.div`
  width: 1440px;
  height: 1024px;
  position: relative;
  display: flex;
  overflow: hidden;
  .background {
    position: absolute;
    aspect-ratio: 1 / 1;
    height: 140%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
  .children {
    color: red;
    z-index: 1;
  }
`;
//  .background-cir1 {
//     position: absolute;
//     aspect-ratio: 1 / 1;
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     top: -55%;
//     height: 210%;
//     flex-shrink: 0;
//     border-radius: 100%;
//     background: #3d3d3d;
//     box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25) inset;
//   }
//   .background-cir2 {
//     position: absolute;
//     aspect-ratio: 1 / 1;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     width: 90%;
//     flex-shrink: 0;
//     border-radius: 100%;
//     right: 0.5%;
//     background: #686868;
//     box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25) inset;
//     z-index: 1;
//   }
//   .background-cir3 {
//     position: absolute;
//     aspect-ratio: 1 / 1;
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     width: 90%;
//     flex-shrink: 0;
//     left: 2.5%;
//     border-radius: 100%;
//     background: #939393;
//     box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25) inset;
//     z-index: 2;
//   }
//   .background-cir4 {
//     position: absolute;
//     aspect-ratio: 1 / 1;
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     height: 90%;
//     margin-right:
//     flex-shrink: 0;
//     border-radius: 100%;
//     background: red;
//     box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25) inset;
//     z-index: 3;
//   }

export const BackGroundWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
