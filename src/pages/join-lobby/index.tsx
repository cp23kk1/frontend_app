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
          { displayName: 'jedi', isReady: true, img: '' },
          { displayName: 'jedi', isReady: false, img: '' },
          { displayName: 'player3', isReady: false, img: '' }
        ]
      }}
    />
  );
};
export default JoinCreatLobbyPage;
