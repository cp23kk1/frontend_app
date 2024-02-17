import styled from '@emotion/styled';

export const LoginModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  .loginContent {
    display: flex;
    align-items: center;
    gap: 64px;
    .getStart {
      display: flex;
      align-items: end;
      color: #000;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      height: 30%;
    }
    .loginButtons {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 22px;
      width: 60%;
    }
    .termAndService {
      display: flex;
      align-items: end;
      height: 30%;
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
