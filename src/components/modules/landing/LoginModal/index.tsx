import Modal from '@/components/common/Modal';

import { getPublicPath } from '@/utils/basePath';
import { TLoginModal } from './type';
import { Col } from '@/components/common/layout/responsive';
import {
  GoogleLoginButtonWrapper,
  GuestLoginButtonWrapper,
  LoginModalWrapper
} from './style';

const LoginModal = ({
  isModalOpen,
  onClose,
  onClickTerm,
  onClickPolicy,
  onClickGoogleLogin,
  onClickGuestLogin
}: TLoginModal) => {
  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <LoginModalWrapper>
        <Col span={12}>
          <img src={getPublicPath(`/decorations/login_image.svg`)} alt="" />
        </Col>
        <Col className="loginContent" span={12}>
          <div className="top">
            <div className="getStart">Get started!</div>
            <div className="loginButtons">
              <GoogleLoginButtonWrapper onClick={onClickGoogleLogin}>
                <img src={getPublicPath(`/icon/GoogleLogo.svg`)} alt="" />
                <span>Continue with Google</span>
              </GoogleLoginButtonWrapper>
              <GuestLoginButtonWrapper onClick={onClickGuestLogin}>
                <img src={getPublicPath(`/icon/UserIcon.svg`)} alt="" />
                <span>Continue with Guest</span>
              </GuestLoginButtonWrapper>
            </div>
          </div>
          <div className="termAndService">
            <div>Terms of Service</div>&nbsp; and &nbsp;
            <div>Privacy Policy</div>
          </div>
        </Col>
      </LoginModalWrapper>
    </Modal>
  );
};
export default LoginModal;
