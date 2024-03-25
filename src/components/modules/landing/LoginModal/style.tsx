import styled from '@emotion/styled';

export const LoginModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 16px;
  border-radius: 24px;
  width: 65vw;
  .loginContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    height: auto;
    .top {
      display: flex;
      height: 60%;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      gap: 64px;
    }
    .getStart {
      display: flex;
      color: #000;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .loginButtons {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 22px;
    }
    .termAndService {
      display: flex;
      align-items: end;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const GoogleLoginButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 54px;
  padding: 0px 42px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  background: #fff;
  border: 0;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.17),
    0px 0px 3px 0px rgba(0, 0, 0, 0.08);

  color: rgba(0, 0, 0, 0.54);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const GuestLoginButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 54px;
  padding: 0px 42px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  background: #fff;
  border: 0;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.17),
    0px 0px 3px 0px rgba(0, 0, 0, 0.08);

  color: rgba(0, 0, 0, 0.54);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
