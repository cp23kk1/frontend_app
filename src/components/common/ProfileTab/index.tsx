import Image from 'next/image';
import Icon from '../Icon';
import { ProfileTabWrapper } from './style';
import { TProfileTab } from './type';
import { Textfit } from 'react-textfit';

const ProfileTab = ({ profilePic, userName, onClick, style }: TProfileTab) => {
  return (
    <ProfileTabWrapper style={style}>
      <img
        className="profilepic"
        src={profilePic}
        width={48}
        height={48}
        alt="profile_pic"
      />

      <div className="username">
        <p>{userName}</p>
      </div>
      <div className="icon" onClick={onClick}>
        <Icon iconName="ChevronDown" size={13} />
      </div>
    </ProfileTabWrapper>
  );
};
export default ProfileTab;
