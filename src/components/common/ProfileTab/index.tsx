import Image from 'next/image';
import Icon from '../Icon';
import { ProfileTabWrapper } from './style';
import { TProfileTab } from './type';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks';

const ProfileTab = ({
  profilePic,
  userName,
  style,
  onClickLogout,
  onClickProfile
}: TProfileTab) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickProfileTab = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ProfileTabWrapper
        isOpen={isOpen}
        style={style}
        onClick={handleClickProfileTab}
      >
        <Image
          className="profilepic"
          src={`${profilePic ?? ''}`}
          width={48}
          height={48}
          alt="profile_pic"
        />

        <div className="username">
          <p>{userName}</p>
        </div>

        <Icon className="icon" iconName="ChevronDown" size={13} />

        {isOpen && (
          <div className="dropdown">
            <div className="dropdown-content">
              <button className="list" onClick={onClickProfile}>
                Profile
              </button>

              <button className="list" onClick={onClickLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </ProfileTabWrapper>
    </div>
  );
};
export default ProfileTab;
