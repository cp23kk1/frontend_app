import GameMode from '@/components/modules/gamemode/Gamemode';
import BackGround from '@/components/modules/gameplay/BackgroundGamplay';
import GamePlay from '@/components/modules/gameplay/GamePlay';
import GamePlayContainer from '@/modules/gameplay/GamePlayContainer';
import type { NextPage } from 'next';
import { useState } from 'react';

//

const GameModePage: NextPage = () => {
  return (
    <GameMode
      scoreBoard={{
        listScore: [
          { no: 2, score: 333, userName: 'j' },
          { no: 2, score: 333, userName: 'j' },
          { no: 2, score: 333, userName: 'j' },
          { no: 2, score: 333, userName: 'j' }
        ],
        userScore: { no: 2, score: 333, userName: 'j' }
      }}
      onSelectMode={(e) => {
        console.log(e);
      }}
      listMode={[
        { modeName: 'Single Player', onClick: () => {}, isSelected: true },
        {
          modeName: 'Single Player',
          modeSubtitle:
            'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd',
          onClick: () => {}
        },
        { modeName: 'Single Player', onClick: () => {} },
        { modeName: 'Single Player', onClick: () => {} },
        { modeName: 'Single Player', onClick: () => {} }
      ]}
      onClickSetting={() => {}}
    ></GameMode>
  );
};
export default GameModePage;
