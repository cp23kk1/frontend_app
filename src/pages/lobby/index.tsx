import JoinCreateLobby from '@/components/modules/V2/lobby/JoinCreateLobby';
import Lobby from '@/components/modules/V2/lobby/Lobby';
import { NextPage } from 'next';

const JoinCreatLobbyPage: NextPage = () => {
  return (
    <Lobby
      onClickReady={() => {}}
      onClickLeave={() => {}}
      players={[
        {
          displayName: 'jedi',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          isReady: false
        },
        {
          displayName: 'jedi',
          img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          isReady: false
        }
      ]}
      currentPlayer={{
        displayName: 'jedi',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        isReady: false
      }}
      roomID="123456"
    />
  );
};
export default JoinCreatLobbyPage;
