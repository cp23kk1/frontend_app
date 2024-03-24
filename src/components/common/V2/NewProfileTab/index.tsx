import Image from 'next/image';

import { ProfileTabWrapper } from './style';
import { TNewProfileTab } from './type';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks';
import Icon from '../../Icon';

const ProfileTab = ({
  profilePic,
  userName,
  style,
  onClickLogout,
  onClickProfile,
  onClickSignIn
}: TNewProfileTab) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickProfileTab = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <ProfileTabWrapper
      isOpen={isOpen}
      style={style}
      onClick={handleClickProfileTab}
    >
      <img
        className="profilepic"
        src={profilePic}
        width={36}
        height={36}
        alt="profile_pic"
      />

      <div className="username">
        <p>{userName}</p>
      </div>

      <Icon className="icon" color="#262956" iconName="ChevronDown" size={13} />

      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-content">
            {userName === 'Guest' ? (
              <button className="list" onClick={onClickSignIn}>
                SIGN IN
              </button>
            ) : (
              <>
                <button className="list" onClick={onClickProfile}>
                  PROFILE
                </button>

                <button className="list" onClick={onClickLogout}>
                  SIGN OUT
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </ProfileTabWrapper>
  );
};
export default ProfileTab;
