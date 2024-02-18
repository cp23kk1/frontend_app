import Image from 'next/image';
import Icon from '../Icon';
import { DropDownWrapper, ProfileTabWrapper } from './style';
import { TProfileTab } from './type';
import { Textfit } from 'react-textfit';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks';
import authDispatch from '@/modules/user/auth/auth-dispatch';

const ProfileTab = ({
  profilePic,
  userName,
  style,
  onClickLogout,
  onClickProfile
}: TProfileTab) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickProfileTab = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ProfileTabWrapper isOpen={isOpen} style={style}>
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
        <div onClick={handleClickProfileTab}>
          <Icon className="icon" iconName="ChevronDown" size={13} />
        </div>

        {isOpen && (
          <div className="dropdown">
            <div className="menu">
              <button className="list" onClick={onClickProfile}>
                Profile
              </button>
            </div>
            <button className="list" onClick={onClickLogout}>
              Logout
            </button>
          </div>
        )}
      </ProfileTabWrapper>
    </div>
  );
};
export default ProfileTab;
