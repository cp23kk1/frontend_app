import JoinCreateLobby from '@/components/modules/V2/lobby/JoinCreateLobby';
import Lobby from '@/components/modules/V2/lobby/Lobby';
import UserProfile from '@/components/modules/V2/profile/UserProfile';
import { NextPage } from 'next';

const UserProfilePage: NextPage = () => {
  return (
    <UserProfile
      {...{
        account: {},
        mode: 'account',
        stats: {},
        onClickBack: () => {},
        onClickSetting: () => {}
      }}
    />
  );
};
export default UserProfilePage;
