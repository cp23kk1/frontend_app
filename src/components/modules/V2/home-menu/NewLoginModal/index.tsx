import Modal from '@/components/common/Modal';

import { getPublicPath } from '@/utils/basePath';
import { TNewLoginModal } from './type';
import { Col } from '@/components/common/layout/responsive';
import { NewLoginModalWrapper } from './style';
import NewButton from '@/components/common/V2/NewButton';

const LoginModal = ({
  onClickTerm,
  onClickPolicy,
  onClickGoogleLogin,
  onClickGuestLogin,
  isConnectGuest
}: TNewLoginModal) => {
  return (
    <NewLoginModalWrapper>
      <div className="image"></div>
      <div className="login-content">
        <div className="login">
          <div className="title">Get Started!</div>
          <div className="google">
            <NewButton
              onClick={onClickGoogleLogin}
              label="CONTINUE WITH GOOGLE"
              iconName="Google"
              style={{ width: 294 }}
              state="unselected-light"
            />
          </div>
          {!isConnectGuest && (
            <div className="guest">
              <NewButton
                onClick={onClickGuestLogin}
                label="CONTINUE WITH GUEST"
                state="unselected-light"
                iconName="User"
                style={{ width: 294 }}
              />
            </div>
          )}
        </div>

        <div className="bottom-content">
          <span onClick={onClickTerm}>Terms of Service</span> &nbsp;and&nbsp;
          <span onClick={onClickPolicy}>Privacy Policy</span>
        </div>
      </div>
    </NewLoginModalWrapper>
  );
};
export default LoginModal;
