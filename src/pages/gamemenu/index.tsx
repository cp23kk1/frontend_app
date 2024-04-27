import HomeMenu from '@/components/modules/V2/home-menu/HomeMenu';
import type { NextPage } from 'next';

//

const GameMenuPage: NextPage = () => {
  return (
    <HomeMenu
      listCharacter={[]}
      onChangeCharacter={(img) => {}}
      onSelectCharacter={(input) => {}}
      currentCharacter="/character/player/robot.svg"
      selectedCharacter="/character/player/robot.svg"
      leaderBoard={{
        currentPlayer: {
          displayName: '',
          score: 123,
          id: 123,
          img: '',
          isReady: false,
          rank: ''
        },
        listPlayer: []
      }}
      onClickTutorial={() => {}}
      onCLickSettings={() => {}}
      onChangePage={(input) => {}}
      onClickSignIn={() => {}}
      currentPage="home"
      profileTab={{
        onClickLogout: () => {},
        onClickProfile: () => {},
        onClickSignIn: () => {},
        profilePic:
          'https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg',
        userName: 'Superman Batman'
      }}
      modes={[
        {
          modeName: 'SINGLE PLAYER',
          modeDesc: 'Single play mode play for train for english skills.',
          modeExtraInfo: 'Best Score: 999',
          modeButtons: [
            { iconName: 'Play', onClick: () => {}, text: 'PLAY NOW' }
          ]
        },
        {
          modeName: 'MULTIPLAYER',
          modeDesc: 'Multiplayer mode!! That u can play for fun!!!',
          modeExtraInfo: 'I HAVE A CODE',
          modeButtons: [
            { iconName: 'Play', onClick: () => {}, text: 'PLAY QUICKLY' },
            { iconName: 'Group', onClick: () => {}, text: 'PLAY QUICKLY' }
          ]
        }
      ]}
    />
  );
};
export default GameMenuPage;
