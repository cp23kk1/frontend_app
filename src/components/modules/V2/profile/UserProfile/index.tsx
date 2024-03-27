import Icon from '@/components/common/Icon';
import { UserProfileWrapper } from './style';
import { TUserProfile } from './type';
import NewButton from '@/components/common/V2/NewButton';

const UserProfile = ({
  onClickBack,
  onClickSetting,
  account,
  mode,
  stats
}: TUserProfile) => {
  return (
    <UserProfileWrapper>
      <div className="top-content">
        <div className="back-button button">
          <NewButton
            iconName="Back"
            style={{ width: 'fit-content' }}
            label="BACK"
            onClick={onClickBack}
          />
        </div>

        <div className="topic">Profile</div>

        <div className="play-quick-button button">
          <NewButton
            iconName="SettingLight"
            style={{ width: 'fit-content' }}
            label="SETTING"
            onClick={onClickSetting}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="page-mode">
          <div className="mode">
            <NewButton
              state={mode === 'account' ? 'selected' : 'unselected'}
              label={'ACCOUNT'}
              onClick={() => {}}
            />
          </div>
          <div className="mode">
            <NewButton
              state={mode === 'stats' ? 'selected' : 'unselected'}
              label={'STATISTICS'}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="changeable-content">
          {}
          <div className="account">
            <div className="profile-card">
              <div className="user-card">
                <div className="user-info">
                  <img
                    className="profile-pic"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt=""
                  />
                  <div className="display-name">asfasdfasdfasdfasdf</div>
                </div>
                <div className="edit">Edit</div>
              </div>
              <div className="associate">
                <div className="google-card">
                  <div className="topic">
                    <Icon size={24} iconName={'GoogleWithBG'} />
                    Authentication with Google
                  </div>
                  <div className="email">testing_user@gmail.com</div>
                </div>
              </div>
              <div className="bottom-card">
                Member since Jan, 1 2024
                <NewButton
                  style={{ width: 'fit-content' }}
                  onClick={() => {}}
                  label="SIGN OUT"
                  iconName="Exit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserProfileWrapper>
  );
};
export default UserProfile;
