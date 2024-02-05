import Image from 'next/image';
import Icon from '../Icon';
import { ProfileTabWrapper } from './style';
import { TProfileTab } from './type';

const ProfileTab = ({ profilePic, userName, onClick }: TProfileTab) => {
  return (
    <ProfileTabWrapper>
      <img
        className="profilepic"
        src={profilePic}
        width={48}
        height={48}
        alt="profile_pic"
      />

      <div className="username">{userName}</div>
      <div className="icon" onClick={onClick}>
        <Icon iconName="ChevronDown" size={13} />
      </div>
    </ProfileTabWrapper>
  );
};
export default ProfileTab;
