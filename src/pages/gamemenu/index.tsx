import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import MultiplayerGameplay from '@/components/modules/multiplayer/MultiplayerGameplay';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import type { NextPage } from 'next';
import { useState } from 'react';
import HomeMenu from '@/components/modules/home-menu/HomeMenu';

//

const GameMenuPage: NextPage = () => {
  return (
    <HomeMenu
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
