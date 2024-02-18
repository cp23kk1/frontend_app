import Button from '@/components/common/LandingButton';
import { getPublicPath } from '@/utils/basePath';
import Image from 'next/image';
import { TLanding } from './type';
import {
  ClickToBeginText,
  Discription,
  LandingBackgroundWrapper,
  LandingText
} from './style';
import Icon from '@/components/common/Icon';
import ProfileTab from '@/components/common/ProfileTab';
import { Col } from '@/components/common/layout/responsive';

const Landing = ({
  onLogin,
  onSetting,
  onBegin,
  userProfile,
  onClickLogout,
  onClickProfile
}: TLanding) => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100%',
          height: '100vh'
        }}
      >
        <Image
          src={getPublicPath('/background/Landing_Background.svg')}
          alt="Landing_Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <LandingBackgroundWrapper onClick={onBegin}>
        <div className="bottom-wrapper">
          <div className="top-wrapper">
            <Icon
              className="hover-scale"
              onClick={onSetting}
              iconName="SettingLight"
              size={60}
            />
            {userProfile?.displayName ? (
              <ProfileTab
                profilePic={userProfile.image}
                userName={userProfile.displayName}
                onClickLogout={onClickLogout}
                onClickProfile={onClickProfile}
              />
            ) : (
              <button className="signInButton hover-scale" onClick={onLogin}>
                Sign in
              </button>
            )}
          </div>

          <div className="bottom-section">
            <div className="landing-text-wrapper">
              <LandingText>
                <div>
                  VOCA <br />
                  VERSE
                </div>
                <div className="logo">
                  <Icon iconName="Logo" size={240} />
                </div>
              </LandingText>
              <Discription>
                Expand Your Universe, Word by Word: Learn, Play, and Master
                Vocabulary!
              </Discription>
            </div>
            <div>
              <Image
                src={getPublicPath('/decorations/rocket.svg')}
                alt="rocket"
                width={166.6}
                height={360}
              />
            </div>
          </div>
        </div>
        <div className="begin-wrapper">
          <ClickToBeginText>CLICK TO BEGIN</ClickToBeginText>
        </div>
      </LandingBackgroundWrapper>
    </>
  );
};
export default Landing;
