import JoinCreateLobby from '@/components/modules/V2/lobby/JoinCreateLobby';
import { NextPage } from 'next';

const JoinCreatLobbyPage: NextPage = () => {
  return (
    <JoinCreateLobby
      currentPage="create"
      isJoinButtonDisabled
      onChangeRoomID={(e) => {}}
      onClickBack={() => {}}
      onClickJoin={() => {}}
      onClickPlayQuickly={() => {}}
      onClickPlay={() => {}}
      createLobby={{
        onClickCloseLobby: () => {},
        gameSetting: {
          mode: 'all',
          onChangeMode: (e) => {},
          onChangeSpeed: (e) => {},
          onChangeNumQuestions: (e) => {},
          speed: 'slow',
          numQuestions: 10
        },
        roomID: '12312',
        players: [
          {
            displayName: 'jedi',
            isReady: true,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
          },
          {
            displayName: 'jedi',
            isReady: false,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
          },
          {
            displayName: 'player3',
            isReady: false,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
          }
        ]
      }}
    />
  );
};
export default JoinCreatLobbyPage;
